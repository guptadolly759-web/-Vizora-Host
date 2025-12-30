import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ordersFile = path.join(process.cwd(), "data", "orders.json");

export async function GET() {
  const orders = JSON.parse(fs.readFileSync(ordersFile, "utf-8") || "[]");
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  const newOrder = await req.json();
  const orders = JSON.parse(fs.readFileSync(ordersFile, "utf-8") || "[]");
  orders.push(newOrder);
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
  return NextResponse.json({ message: "Order saved", order: newOrder });
}
