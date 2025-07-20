import { Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function FooterInput() {
  return (
    <footer className="w-full mt-auto bg-[#162156] px-4 md:px-20 py-4">
      <section className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-0 py-6">
        <section className="flex flex-col gap-2">
          <h1 className="uppercase font-bold text-white">Tautan</h1>
          <Link
            href="https://winnicode.com/"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <Globe />
            <p>www.winnicode.com</p>
          </Link>
          <Link
            href="https://www.instagram.com/winnicodeofficial/"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <FaInstagram size={24} />
            Instagram
          </Link>
        </section>

        <section>
          <Link
            href={"/"}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <Avatar className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
              <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
            </Avatar>
            <h1 className="font-changa text-[#FF66C4] text-3xl md:text-5xl text-center md:text-left">
              Winni<span className="text-[#5271FF]">Career</span>
            </h1>
          </Link>
        </section>
      </section>

      <div className="w-full text-center text-white text-sm md:text-base">
        <span>© 2025 PT Winnicode Garuda Teknologi</span>
      </div>
    </footer>
  );
}
