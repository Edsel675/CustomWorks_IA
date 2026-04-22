import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const active = searchParams.get("active");

    const products = await prisma.product.findMany({
      where: {
        ...(category ? { category } : {}),
        ...(featured === "true" ? { isFeatured: true } : {}),
        ...(active !== "false" ? { isActive: true } : {}),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[inventory GET]", error);
    return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description, price, category, tags, fileUrl, previewUrls } = body;

    if (!name || !price || !category) {
      return NextResponse.json({ error: "name, price y category son requeridos" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        slug: slugify(name),
        description,
        price: Number(price),
        category,
        tags: tags ?? [],
        fileUrl,
        previewUrls: previewUrls ?? [],
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("[inventory POST]", error);
    return NextResponse.json({ error: "Error al crear producto" }, { status: 500 });
  }
}
