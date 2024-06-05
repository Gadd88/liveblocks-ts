'use server'
import { authOptions } from "@/lib/authOptions"
import { liveblocksClient } from "@/lib/liveblocksClient"
import { getUserEmail } from "@/lib/userClient"
import { RoomInfo } from "@liveblocks/node"
import { getServerSession } from "next-auth"


export async function createBoard(name: string): Promise<boolean | RoomInfo> {    
    const email = await getUserEmail()
    if(email){
        const roomId = crypto.randomUUID().slice(0,8)
        const roomInfo = await liveblocksClient.createRoom(roomId, {
            defaultAccesses: [],
            usersAccesses: {
                [email]: ['room:write'],
            },
            metadata: {
                boardName: name,
            }
        })
        return roomInfo
    }
    return false
}