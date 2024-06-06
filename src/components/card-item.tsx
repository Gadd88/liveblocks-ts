'use client'
import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { CardType, useMutation } from '../../liveblocks.config'
import { LiveList, LiveObject } from '@liveblocks/client'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export const CardItem = ({card}:{card:CardType}) => {
    const params = useParams()
    const deleteItem = useMutation(({storage}, cardId) => {
        const newCardList: LiveObject<CardType>[] = []
        const allCards = storage.get('cards').map(card => card.toObject())
        allCards.forEach( card => {
            if(card.id !== cardId){
                newCardList.push(new LiveObject(card))
            }
        })
        return storage.set('cards', new LiveList(newCardList))
    },[])
  return (
    <Link href={`/boards/${params.boardId}/cards/${card.id}`} className="border my-2 p-4 rounded-md cursor-default relative w-[96%] block">
        <span>{card.name}</span>
        <div className="absolute top-1/2 bottom-1/2 my-auto -right-2 bg-gray-500 p-1 rounded-full cursor-pointer text-white w-5 h-5 flex items-center justify-center" onClick={()=>deleteItem(card.id)}>
            <FaTrashCan className="w-full h-full"/>
        </div>
    </Link>
  )
}
