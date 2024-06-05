'use client'
import React, { FormEvent } from 'react'
import { ColumnType, useMutation } from '../../../liveblocks.config'
import { LiveObject } from '@liveblocks/client'

export const CardForm = ({columnId}:{columnId: ColumnType['id']}) => {
    const addCard = useMutation(({ storage }, cardName)=>{
        storage.get('cards').push(new LiveObject({
            name: cardName,
            id: crypto.randomUUID().slice(0,8),
            columnId: columnId,
            index:99999,
        }))
    },[columnId])
    const handleAddCard = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget)
        const cardName = formData.get('newCard')
        addCard(cardName)
    }
  return (
    <form className='rounded max-w-sm flex items-center gap-1' onSubmit={handleAddCard}>
        <input type="text" name="newCard" id="newCard" placeholder="Agregar tarjeta" className='block w-full p-2 border border-gray-300 rounded text-xs'/>
        <button type="submit" className='w-8 h-8 p-1 flex items-center justify-center font-normal'>+</button>
    </form>
  )
}
