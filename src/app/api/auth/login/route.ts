import { NextRequest, NextResponse } from "next/server";
import { setAdminSession, verifyAdminToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const valid = await verifyAdminToken(password);

  if (!valid) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  await setAdminSession(password);
  return NextResponse.json({ ok: true });
}
