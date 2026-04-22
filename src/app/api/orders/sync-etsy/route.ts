import { NextResponse } from "next/server";
import { getEtsyOrders } from "@/lib/etsy";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const etsyOrders = await getEtsyOrders(50);
    const synced: string[] = [];

    for (const eo of etsyOrders) {
      const exists = await prisma.order.findFirst({ where: { etsyOrderId: String(eo.receipt_id) } });
      if (exists) continue;

      await prisma.order.create({
        data: {
          orderNumber: `E-${eo.receipt_id}`,
          etsyOrderId: String(eo.receipt_id),
          source: "ETSY",
          status: eo.status === "paid" ? "PROCESSING" : "PENDING",
          totalAmount: eo.grandtotal?.amount ? eo.grandtotal.amount / 100 : 0,
          currency: eo.grandtotal?.currency_code ?? "USD",
          customerEmail: eo.buyer_email ?? `etsy-${eo.receipt_id}@noreply.com`,
          customerName: eo.name ?? "Etsy Customer",
        },
      });
      synced.push(String(eo.receipt_id));
    }

    return NextResponse.json({ synced: synced.length, ids: synced });
  } catch (error) {
    console.error("[sync-etsy]", error);
    return NextResponse.json({ error: "Error al sincronizar Etsy" }, { status: 500 });
  }
}
