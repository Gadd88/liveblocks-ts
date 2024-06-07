import { Board } from "@/components/board";
import { HomeView } from "@/components/home-view";
import UserBoards from "@/components/user-boards";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";


export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session){
    return (
      <HomeView/>
    )
  }
  return (
    <div className="space-y-5">
      <h1 className="text-4xl">Tus tableros:</h1>
      <UserBoards />
      <Link
        className="btn bg-sky-500 hover:bg-sky-700 text-white font-medium px-4 py-3 inline-flex gap-2 items-center rounded-md" 
        href='/new-board'>
          <span>Crea un nuevo tablero</span>
          <FaChevronRight className="h-4"/>
      </Link>
    </div>
  );
}
