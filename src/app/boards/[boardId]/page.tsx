import { Board } from '@/components/board'
import { liveblocksClient } from '@/lib/liveblocksClient'
import { getUserEmail } from '@/lib/userClient'
import React from 'react'

export default async function BoardPage({params}: {params: {boardId: string}}) {
    const { boardId } = params
    const email = await getUserEmail()
    const boardInfo = await liveblocksClient.getRoom(boardId)
    
  return (
    <div>
        Board: {boardInfo.metadata.boardName}
        <Board id={boardId}/>
    </div>
  )
}
