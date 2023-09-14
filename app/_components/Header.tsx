import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-lime-100 px-2 pb-2 pt-1 shadow-sm shadow-lime-950/5">
      <div className="mx-auto flex max-w-[700px] items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/dirkha-logo.svg"
            alt="Dirkha Logo"
            width={50}
            height={50}
            className="relative -right-[2px] h-10 w-10 "
          />
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-lime-900">Dirkha</div>
            <div className="-mt-1 text-xs font-light text-lime-900">
              Good Green News
            </div>
          </div>
        </Link>
        <Link href="/about" className="-mt-1 ml-6">
          About
        </Link>
      </div>
    </header>
  );
}
