
import { liveblocksClient } from '@/lib/liveblocksClient'
import { getUserEmail } from '@/lib/userClient'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'

export default async function UserBoards() {
    const userEmail = await getUserEmail()
    if(!userEmail) return
    //obtenemos y extraemos los datos de los tableros usando el email del usuario y los renombramos como "rooms"
    const {data: rooms} = await liveblocksClient.getRooms({
        userId: userEmail!
    })
  return (
    <div className='my-4 grid md:grid-cols-4 gap-2'>
        {
            rooms.length > 0 
            ? rooms.map(room => (
                <Link key={room.id} href={`/boards/${room.id}`} className='rounded-md p-4 bg-slate-300 cursor-pointer hover:bg-lime-500 hover:text-white font-medium'>
                    {room.metadata.boardName}
                </Link>
            )) 
            : <p>No hay tableros</p>}
    </div>
  )
}
