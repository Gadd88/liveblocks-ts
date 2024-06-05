"use client";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { useRouter } from "next/navigation";
import { FaTrashCan } from "react-icons/fa6";
import { RoomProvider } from "../../liveblocks.config";
import Columns from "./columns";

export const Board = ({ id }: { id: string }) => {

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
                          <Columns />
                          <button className="ms-auto mt-4 bg-red-500 p-2 rounded-sm shadow-sm cursor-pointer text-white font-normal w-fit flex items-center justify-center hover:bg-black" onClick={() => deleteBoard(id)}>
                            Eliminar tablero <FaTrashCan className="w-5 h-5"/>
                          </button>
                        </div>
                    )
                }
            </ClientSideSuspense>
    </RoomProvider>
  );
};
