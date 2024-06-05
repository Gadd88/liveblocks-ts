'use client'

import { createBoard } from "@/actions/boardActions"
import { redirect } from "next/navigation"

export default function NewBoardPage() {
    const handleNewBoard = async (formData: FormData) => {
        const boardName = formData.get('boardName')
        const boardInfo = await createBoard(boardName as string)
        if(boardInfo === false){
            alert('No se pudo crear el tablero')
        }
        redirect(`/boards/${boardInfo.id}`)  
        
    }
    return (
        <div>
            <h1 className="text-2xl mb-4">Crea tu nuevo tablero</h1>
            <form className="max-w-xs space-y-5 mt-5" action={handleNewBoard}>
                <label htmlFor="boardName">
                    Nombre del tablero
                    <input type="text" name="boardName" id="boardName" placeholder="Nombre del tablero" />
                </label>
                <button type="submit">Crear tablero</button>
            </form>
        </div>
    )
}