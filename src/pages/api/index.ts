
export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();


      return new Response(JSON.stringify({
        message: "mensaje " 
      }), {
        status: 200
      })
    }
    return new Response(null, { status: 400 });
  };