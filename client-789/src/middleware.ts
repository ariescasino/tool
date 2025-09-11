import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/account/:path*"],
};

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/dang-nhap", request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
