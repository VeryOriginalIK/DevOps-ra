import { NextResponse } from "next/server";

export async function GET() {
let cats = ["Siamese cat", "Persian cat", "Maine Coon", "Bengal", "Sphynx"];
let randomCat = Math.floor(Math.random() * cats.length);
  return NextResponse.json({ animal: cats[randomCat] });
}