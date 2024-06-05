'use client'
import React, { FormEvent, useRef } from 'react'
import { useMutation } from '../../../liveblocks.config'
import { LiveObject } from '@liveblocks/client'

export const ColumnForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const addColumn = useMutation(({ storage }, columnName)=>{
        storage.get('columns').push(new LiveObject({
            name: columnName,
            id: crypto.randomUUID().slice(0,8),
            index: 0,
        }))
    },[])
    const handleAddColumn = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        if (formRef.current === null) {
            return;
          }      
        const formData = new FormData(formRef.current)
        const columnName = formData.get('newColumn')
        addColumn(columnName)
        formRef.current.reset()
    }
  return (
    <form ref={formRef} className='rounded max-w-sm' onSubmit={handleAddColumn}>
        <label htmlFor="newColumn" className="block mb-2 text-sm font-medium text-gray-600">
            <input type="text" name="newColumn" id="newColumn" placeholder="Agregar columna" className='block w-full p-2 mt-1 border border-gray-300 rounded'/>
        </label>
        <button type="submit" className='mt-2 block w-full'>Crear columna</button>
    </form>
  )
}
