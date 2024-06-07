import { Board } from "@/components/board";
import { HomeView } from "@/components/home-view";
import UserBoards from "@/components/user-boards";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const t = await getTranslations('Boards');
  if(!session){
    return (
      <HomeView/>
    )
  }
  return (
    <div className="space-y-5">
      <h1 className="text-4xl">{t('title')}</h1>
      <UserBoards />
      <Link
        className="btn bg-sky-500 hover:bg-sky-700 text-white font-medium px-4 py-3 inline-flex gap-2 items-center rounded-md" 
        href='/new-board'>
          <span>{t('createBoard')}</span>
          <FaChevronRight className="h-4"/>
      </Link>
    </div>
  );
}
