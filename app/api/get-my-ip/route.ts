import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.ip || req.headers.get("x-forwarded-for") || "0.0.0.0";
  return NextResponse.json({ ip });
}
