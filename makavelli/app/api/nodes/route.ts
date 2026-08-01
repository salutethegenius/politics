import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder: will query Prisma/Postgres for nodes and return them.
  return NextResponse.json({
    nodes: [
      { id: "1", type: "Ministry", name: "Ministry for Grand Bahama" },
      { id: "2", type: "Person", name: "Ginger Maria Moxey" },
      { id: "3", type: "Project", name: "Grand Bahama Data Dashboard" },
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  // Placeholder: will create a node via Prisma and sync to Neo4j.
  return NextResponse.json({ success: true, created: body });
}
