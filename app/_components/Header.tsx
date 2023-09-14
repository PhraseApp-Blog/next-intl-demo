import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center px-2 pt-1 pb-2 bg-lime-100">
      <Image src="/dirkha-logo.svg" alt="Dirkha Logo" width={50} height={50} className="w-10 h-10 relative -right-[2px]" />

      <div className="flex flex-col">
        <div className="text-2xl font-bold">
          Dirkha
        </div>
        <div className="font-light text-xs -mt-1 text-lime-900">
          Good Green News
        </div>
      </div>
    </header>
  )
}