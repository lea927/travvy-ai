export function GET() {
  return new Response(JSON.stringify({ data: "Travvy is running!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
