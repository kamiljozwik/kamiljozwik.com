import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const news = request.nextUrl.searchParams.get("news"); // for example: "webdev", "ai"

  if (!news) {
    return Response.json({ error: "Missing news parameter" }, { status: 400 });
  }

  try {
    revalidatePath("/");
    revalidatePath(`/news/${news}`);
  } catch (error) {
    console.error("Error revalidating:", error);
    return Response.json({ error: "Error revalidating" }, { status: 500 });
  }

  return Response.json({
    revalidated: true,
    now: new Date(Date.now()).toISOString(),
    news,
  });
}
