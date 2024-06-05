"use client";
import { useState } from "react";
import { Column } from "./column";
import { ColumnForm } from "./forms/column-form";
import { RoomProvider } from "../../liveblocks.config";
import { LiveList } from "@liveblocks/client";
import Columns from "./columns";
import { ClientSideSuspense } from "@liveblocks/react";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { FaTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const Board = ({ id }: { id: string }) => {
  // const [cards, setCards] = useState<CardType[]>();
  // const [columns, setColumns] = useState<ColumnType[]>();

  const router = useRouter()
  
  const deleteBoard = async (id: string) =>{
    await liveblocksClient.deleteRoom(id)
    router.push('/')
  }
  if(!id) return router.push('/')
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
                        <div className="w-full shadow-sm rounded-md p-2 flex flex-col justify-between">
                          <button className="bg-red-500 p-2 rounded-sm shadow-sm cursor-pointer text-white font-normal w-fit flex items-center justify-center hover:bg-black" onClick={() => deleteBoard(id)}>
                            Eliminar tablero <FaTrashCan className="w-5 h-5"/>
                          </button>
                          <Columns />
                        </div>
                    )
                }
            </ClientSideSuspense>
    </RoomProvider>
  );
};
