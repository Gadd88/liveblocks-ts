'use client'
import React from 'react'
import { ColumnType, useMutation, useStorage } from '../../liveblocks.config'
import { ColumnForm } from './forms/column-form'
import { Column } from './column'
import { ReactSortable } from 'react-sortablejs'
import { LiveList, LiveObject, shallow } from '@liveblocks/core'

export default function Columns() {
    const columns = useStorage(root => root.columns.map(column => ({...column})), shallow) //retorno copia para que no chille al ser un elemento readonly
    
    const updateColumns = useMutation(({ storage }, columns: LiveObject<ColumnType>[]) => {
      storage.set('columns', new LiveList(columns))
    },[])

    const updateColumnsOrder = (sortedColumns: ColumnType[]) => {
      const newColumns: LiveObject<ColumnType>[] = [];
      sortedColumns.forEach((sortedCol, newIdx) => {
        const newSortedCol = {...sortedCol}
        newSortedCol.index = newIdx
        newColumns.push(new LiveObject(newSortedCol))
      })
      
      updateColumns(newColumns)
    }
    if(!columns) return
  return (
    <div className="flex justify-start items-start gap-4 mt-4 overflow-x-auto flex-col pb-10">
      <ColumnForm />
      <div className='flex justify-start items-start gap-4'>
        <ReactSortable
          group="columns"
          className='flex gap-4'
          ghostClass='opacity-40'
          list={columns}
          setList={updateColumnsOrder}>
            {columns.map((column) => (
                <Column
                    key={column.id}
                    column={column}
                    />
            ))}
        </ReactSortable>
      </div>
    </div>
  )
}
