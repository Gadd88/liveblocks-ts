import { Board } from '@/components/board'
import { liveblocksClient } from '@/lib/liveblocksClient'
import React from 'react'

export default async function BoardPage({params}: {params: {boardId: string}}) {
    const { boardId } = params
    const boardInfo = await liveblocksClient.getRoom(boardId)
    
  return (
    <div>
        <h1 className='text-2xl md:text-4xl text-end'>Tablero:<span className='bg-black text-white px-2'>{boardInfo.metadata.boardName}</span></h1>
        <Board id={boardId}/>
    </div>
  )
}
