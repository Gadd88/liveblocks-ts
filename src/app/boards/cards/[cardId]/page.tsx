import React from 'react'
import BoardPage from '../../[boardId]/page'

export default function CardPage({params}: {params: {boardId: string, cardId: string}}) {
  return (
    <BoardPage params={params} />
  )
}
