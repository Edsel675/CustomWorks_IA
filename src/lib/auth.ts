import { cookies } from "next/headers";

const ADMIN_TOKEN_COOKIE = "cw_admin_token";
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY ?? "change_this";

export async function verifyAdminToken(token: string): Promise<boolean> {
  return token === ADMIN_SECRET;
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) return null;
  const valid = await verifyAdminToken(token);
  return valid ? { authenticated: true } : null;
}

export async function setAdminSession(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_TOKEN_COOKIE);
}
