'use client'
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { CardType, ColumnType, useMutation, useStorage } from "../../liveblocks.config";
import { LiveList, LiveObject, shallow } from "@liveblocks/client";
import { CardForm } from "./forms/card-form";
import { FaTrashCan } from 'react-icons/fa6'
import { CardItem } from "./card-item";

export const Column = ({ column }: { column: ColumnType } ) => {
    const columnCards = useStorage<CardType[]>(root => {
        return root.cards
          .filter(card => card.columnId === column.id)
          .map(card => ({...card}))
          .sort((a,b) => a.index - b.index)
    }, shallow)

    const updateCard = useMutation(({ storage }, index, updateData ) => {
      const card = storage.get('cards').get(index)
      if(card){
        for(let key in updateData){
          card?.set(key as keyof CardType, updateData[key])
        }
      }
    }, [])

  const setTasksOrderForColumn = useMutation(({storage}, sortedCards:CardType[], newColumnId) => {
    const idsOfSortedCards = sortedCards.map( card => card.id)
    const allCards:CardType[] = [...storage.get('cards').map(card => card.toObject())]
    idsOfSortedCards.forEach( (sortedCardId, colIdx) => {
      const cardStorageIdx = allCards.findIndex(card => card.id === sortedCardId)
      updateCard(cardStorageIdx, {
        columnId: newColumnId,
        index: colIdx})
    })
  },[])

  const deleteCol = useMutation(({storage}, columnId) => {
    const newColumnList: LiveObject<ColumnType>[] = []
    const allColumns = storage.get('columns').map(col => col.toObject())
    allColumns.forEach( column => {
      if(column.id !== columnId){
        newColumnList.push(new LiveObject(column))
      }
    })
    return storage.set('columns', new LiveList(newColumnList))
  },[])

  if(!columnCards) return

  return (
    <div className="bg-white shadow-sm rounded-md p-2 flex flex-col justify-between relative pt-5 max-w-80 columnItem">
      <div className="absolute -top-1 -right-1 bg-red-500 p-1 rounded-full cursor-pointer text-white w-5 h-5 flex items-center hover:bg-black justify-center" onClick={()=>deleteCol(column.id)}>
        <FaTrashCan className="w-full h-full"/>
      </div>
      <h3 className="text-lg font-medium text-center bg-black text-white">{column.name}</h3>
      {
        columnCards &&
        <ReactSortable
        list={columnCards}
        setList={(items) => setTasksOrderForColumn(items, column.id)}
        group="cards"
        sort={false}
        className="min-h-80 max-h-96 overflow-y-scroll"
        ghostClass="opacity-40"
        >
                {columnCards.map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
            </ReactSortable>
      }
      <CardForm columnId={column.id} />
    </div>
  );
};
