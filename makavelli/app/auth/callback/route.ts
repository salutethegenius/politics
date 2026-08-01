import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Supabase auth callback will be implemented here.
  // For now, redirect back to the app after receiving the code.
  return NextResponse.redirect(new URL(next, request.url));
}
