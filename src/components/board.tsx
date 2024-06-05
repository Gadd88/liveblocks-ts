"use client";
import { useState } from "react";
import { Column } from "./column";
import { ColumnForm } from "./forms/column-form";
import { RoomProvider } from "../../liveblocks.config";
import { LiveList } from "@liveblocks/client";
import Columns from "./columns";
import { ClientSideSuspense } from "@liveblocks/react";

export const Board = ({ id }: { id: string }) => {
  // const [cards, setCards] = useState<CardType[]>();
  // const [columns, setColumns] = useState<ColumnType[]>();
  if(!id) return
  return (
    <RoomProvider 
        id={id} 
        initialPresence={{}} 
        initialStorage={{
            columns: new LiveList(),
            cards: new LiveList(),
        }}>
            <ClientSideSuspense fallback={(<div>Cargando columnas...</div>)}>
                {
                    () => (
                        <>
                            <Columns />
                        </>
                    )
                }
            </ClientSideSuspense>
    </RoomProvider>
  );
};
