import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl';

// bg-clip-text text-transparent
export const HomeView = () => {
    const t = useTranslations('Home');
  return (
    <div className="w-full pt-6 text-center flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
        <article className="w-full md:w-1/2 flex items-center justify-center rounded-md">
            <Image src='/boards.svg' alt='boads image' height={500} width={500} className="max-w-full h-auto" />
        </article>
        <article className="flex flex-col space-y-5 items-center w-1/2 p-5 gap-5">
            <h1 className="text-center text-2xl md:text-4xl">
                {t('welcome')} <span className="bg-gradient-to-bl from-[#008793] to-[#a8eb12] p-2 text-white mb-2 md:mb-0 block">TaskEase</span>
            </h1>
            <div className="text-slate-500">
                <p className="text-sm text-start leading-7">
                    {t('description1')}
                </p>
                <hr className="border-2 border-lime-500 rounded-full w-5/6 mx-auto my-5"/>
                <p className="text-sm text-start leading-7">
                    {t('description2')}</p>
                <p className="text-sm text-center w-full leading-7 mt-5 italic">
                    {t('loginPrompt')} 
                </p>

            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Link className="btn bg-gradient-to-bl from-[#008793] to-[#a8eb12] text-white font-medium px-4 py-2 inline-flex gap-2 items-center rounded-md min-w-32 justify-center" href='/login'>Login</Link>
                <Link href='/register' 
                    type='button' 
                    className="w-fit font-normal bg-gray-300 text-slate-800 hover:text-white py-2 px-2 rounded-md"
                    >
                       {t('register') }
                </Link>
            </div>
        </article>
    </div>
  )
}
