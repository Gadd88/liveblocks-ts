'use client'

import { createBoard } from "@/actions/boardActions"
import { useTranslations } from "next-intl"
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
    const t = useTranslations('new-board')
    return (
        <div>
            <h1 className="text-2xl mb-4">{t('title')}</h1>
            <form className="max-w-xs space-y-5 mt-5" action={handleNewBoard}>
                <label htmlFor="boardName">
                    {t('label')}
                    <input type="text" name="boardName" id="boardName" placeholder={t('placeholder')} />
                </label>
                <button type="submit">{t('createBtn')}</button>
            </form>
        </div>
    )
}