import { NextResponse } from "next/server";

export async function GET() {
let dogs = ["German Shepherd", "Chihuahua", "Beagle", "Hotdog", "Tyrannous Rexdog"];
let randomDoge = Math.floor(Math.random() * dogs.length);
  return NextResponse.json({ animal: dogs[randomDoge] });
}
