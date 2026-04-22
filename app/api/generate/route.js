export async function POST(req) {
  const body = await req.json();

  return Response.json({
    message: "Hello AI API",
    input: body
  });
}