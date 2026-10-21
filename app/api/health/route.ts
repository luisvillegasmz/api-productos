export function GET() {
  return Response.json({ estado: "ok", hora: new Date().toISOString() });
}