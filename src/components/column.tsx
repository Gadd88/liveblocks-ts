import React, { ReactNode } from "react";
import { ReactSortable } from "react-sortablejs";
import { CardType, ColumnType, useMutation, useStorage } from "../../liveblocks.config";
import { shallow } from "@liveblocks/client";
import { CardForm } from "./forms/card-form";
import { FaTrashCan } from 'react-icons/fa6'

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

  if(!columnCards) return

  return (
    <div className="w-36 bg-white shadow-sm rounded-md p-2">
      <h3>{column.name}</h3>
      {
        columnCards &&
        <ReactSortable
        list={columnCards}
        setList={(items) => setTasksOrderForColumn(items, column.id)}
        group="cards"
        sort={false}
        className="min-h-12"
        ghostClass="opacity-40"
        >
                {columnCards.map((card) => (
                  <div key={card.id} className="border my-2 p-4 rounded-md cursor-default relative">
                    <span>{card.name}</span>
                    <div className="absolute top-1/2 bottom-1/2 my-auto -right-2 bg-gray-500 p-1 rounded-full cursor-pointer text-white w-5 h-5 flex items-center justify-center"><FaTrashCan className="w-full h-full"/></div>
                  </div>
                ))}
            </ReactSortable>
      }
      <CardForm columnId={column.id} />
    </div>
  );
};
