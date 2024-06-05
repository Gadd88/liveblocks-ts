import { authOptions } from "@/lib/authOptions";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {

    const session = await getServerSession(authOptions)
    if(!session || !session.user){
        return new Response("Unauthorized", { status: 401 });
    }
    const user = session.user

    const { status, body } = await liveblocksClient.identifyUser(
        {
        userId: user.email!,
        groupIds: [],
        },
        { userInfo: {
            name: user.name || '',
            email: user.email || '',
            image: user.image || '',
        } },
    );
  return new Response(body, { status });
}