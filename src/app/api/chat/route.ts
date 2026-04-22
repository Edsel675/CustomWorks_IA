import { NextRequest, NextResponse } from "next/server";
import { chatWithAssistant, type Message } from "@/lib/anthropic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages ?? [];

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const reply = await chatWithAssistant(messages);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[chat/route]", error);
    return NextResponse.json({ error: "Error al procesar el mensaje" }, { status: 500 });
  }
}
