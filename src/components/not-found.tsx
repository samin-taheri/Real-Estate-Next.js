"use client";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const NotFoundd: React.FC = ()=> {
    const t = useTranslations('Index');

    return (
    <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto flex xl:px-20 md:px-4 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-4xl font-bold mb-4">{t("404-not-found")}</h1>
            <p className="text-lg text-gray-600 mb-4">{t("sorry-pages-doesnt-exist")}</p>
            <Link href="/" className="text-yellow-500 hover:underline pb-5">{t("go-back-to-home")}</Link>
        </div>
            <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/2" src="/not-found.jpg" />
        </div>
    </div>
    )
}
export default NotFoundd;