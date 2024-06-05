'use client'
import React, { FormEvent } from 'react'
import { useMutation } from '../../../liveblocks.config'
import { LiveObject } from '@liveblocks/client'

export const ColumnForm = () => {
    const addColumn = useMutation(({ storage }, columnName)=>{
        storage.get('columns').push(new LiveObject({
            name: columnName,
            id: crypto.randomUUID().slice(0,8),
            index: 0,
        }))
    },[])
    const handleAddColumn = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget)
        const columnName = formData.get('newColumn')
        addColumn(columnName)
    }
  return (
    <form className='rounded max-w-sm' onSubmit={handleAddColumn}>
        <label htmlFor="newColumn" className="block mb-2 text-sm font-medium text-gray-600">
            <span>
                Nombre de columna
            </span>
            <input type="text" name="newColumn" id="newColumn" placeholder="Agregar columna" className='block w-full p-2 mt-1 border border-gray-300 rounded'/>
        </label>
        <button type="submit" className='mt-2 block w-full'>Crear columna</button>
    </form>
  )
}
