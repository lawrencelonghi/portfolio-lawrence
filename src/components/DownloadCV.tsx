import { Download } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"


const DownloadCV = () => {

  const { t } = useLanguage();

  return (
    <Link
      href="/cv-lawrence-longhi.pdf"
      download
      className="flex gap-2 items-center px-4 py-2 mt-2 rounded-xl bg-white/15 hover:bg-neutral-600/50 duration-300 cursor-pointer"
    >
      <Download size={20} />
      <span className="text-md">{t.resume}</span>
    </Link>
  )
}

export default DownloadCV