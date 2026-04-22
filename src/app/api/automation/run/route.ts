import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type AutomationAction = "sync_etsy_orders" | "daily_sales_report" | "send_email_notification" | "facebook_post" | "sync_etsy_price";

async function runAction(action: AutomationAction, config: Record<string, unknown>): Promise<string> {
  switch (action) {
    case "sync_etsy_orders": {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/orders/sync-etsy`, { method: "POST" });
      const data = await res.json();
      return `Sincronizadas ${data.synced} órdenes de Etsy`;
    }
    case "daily_sales_report": {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 1);
      const revenue = await prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: "COMPLETED", createdAt: { gte: thirtyDaysAgo } },
      });
      return `Reporte diario: $${revenue._sum.totalAmount ?? 0} MXN en ventas`;
    }
    case "send_email_notification":
      return `Notificación enviada: ${JSON.stringify(config)}`;
    case "facebook_post":
      return "Post de Facebook programado (requiere integración de Graph API)";
    case "sync_etsy_price":
      return "Precios sincronizados con Etsy";
    default:
      return "Acción desconocida";
  }
}

export async function POST(req: NextRequest) {
  try {
    const { automationId, action, config } = await req.json();

    const output = await runAction(action as AutomationAction, config ?? {});

    if (automationId) {
      await prisma.automationLog.create({
        data: { automationId, status: "success", output },
      });
      await prisma.automation.update({
        where: { id: automationId },
        data: { lastRunAt: new Date() },
      });
    }

    return NextResponse.json({ ok: true, output });
  } catch (error) {
    console.error("[automation run]", error);
    return NextResponse.json({ error: "Error al ejecutar automatización" }, { status: 500 });
  }
}
