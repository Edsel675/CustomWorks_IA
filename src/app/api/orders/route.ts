import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const source = searchParams.get("source");
    const limit = Number(searchParams.get("limit") ?? 50);

    const orders = await prisma.order.findMany({
      where: {
        ...(status ? { status: status as never } : {}),
        ...(source ? { source: source as never } : {}),
      },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("[orders GET]", error);
    return NextResponse.json({ error: "Error al obtener órdenes" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, customerEmail, items, source, notes } = body;

    if (!customerEmail || !items?.length) {
      return NextResponse.json({ error: "customerEmail e items son requeridos" }, { status: 400 });
    }

    const totalAmount = items.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0);

    const order = await prisma.order.create({
      data: {
        orderNumber: `ORD-${Date.now()}`,
        customerName: customerName ?? "Cliente",
        customerEmail,
        totalAmount,
        source: source ?? "DIRECT",
        notes,
        items: {
          create: items.map((item: { productId: string; quantity: number; price: number }) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("[orders POST]", error);
    return NextResponse.json({ error: "Error al crear orden" }, { status: 500 });
  }
}
