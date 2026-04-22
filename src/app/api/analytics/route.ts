import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [totalOrders, totalRevenue, totalCustomers, topProducts] = await Promise.all([
      prisma.order.count({ where: { status: "COMPLETED" } }),
      prisma.order.aggregate({ _sum: { totalAmount: true }, where: { status: "COMPLETED" } }),
      prisma.customer.count(),
      prisma.product.findMany({
        orderBy: { downloads: "desc" },
        take: 5,
        select: { id: true, name: true, downloads: true, price: true, category: true },
      }),
    ]);

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentRevenue = await prisma.order.aggregate({
      _sum: { totalAmount: true },
      where: { status: "COMPLETED", createdAt: { gte: thirtyDaysAgo } },
    });

    return NextResponse.json({
      totalOrders,
      totalRevenue: totalRevenue._sum.totalAmount ?? 0,
      recentRevenue: recentRevenue._sum.totalAmount ?? 0,
      totalCustomers,
      topProducts,
    });
  } catch (error) {
    console.error("[analytics GET]", error);
    return NextResponse.json({ error: "Error al obtener analíticas" }, { status: 500 });
  }
}
