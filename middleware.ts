export default function lockPublicOperatorRoutes() {
  return new Response(JSON.stringify({
    error: "OPERATOR_AUTH_NOT_CONFIGURED",
    message: "Forge operator tools are not available on public deployments."
  }), {
    status: 404,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive"
    }
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/capture", "/reports"],
  runtime: "edge"
};
