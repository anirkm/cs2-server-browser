import { NextRequest, NextResponse } from "next/server";
import { getServers } from "@/lib/steamAPI";
import steam from "@/lib/steamAPI";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest): Promise<NextResponse> {
  const servers = await getServers({
    appid: "730",
    region: "3",
    ngametype: ["valve_ds", "empty"],
    dedicated: 1,
  });
  return NextResponse.json(servers);
}
