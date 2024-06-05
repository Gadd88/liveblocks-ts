'use client'
import React from 'react'
import { useStorage } from '../../liveblocks.config'
import { ColumnForm } from './forms/column-form'
import { Column } from './column'

export default function Columns() {
    const columns = useStorage(root => root.columns)
    if(!columns) return
  return (
    <div className="flex justify-center items-start gap-4">
        {columns.map((column) => (
            <Column
                key={column.id}
                column={column}
                />
        ))}
    <ColumnForm />
    </div>
  )
}
