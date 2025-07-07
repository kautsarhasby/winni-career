import { Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function FooterInput() {
  return (
    <footer className="w-full mt-auto bg-[#162156] px-20 py-2">
      <section className="h-[180px] w-full flex justify-between py-8">
        <section className="h-full flex flex-col gap-2 ">
          <h1 className="uppercase font-bold">Tautan</h1>
          <Link href="https://winnicode.com/" className="flex gap-2">
            <Globe />
            <p>www.winnicode.com</p>
          </Link>
          <Link
            href="https://www.instagram.com/winnicodeofficial/"
            className="flex gap-2"
          >
            <FaInstagram size={24} />
            Instagram
          </Link>
        </section>
        <section
          className="flex gap-6  items-center justify-center
      "
        >
          <Avatar className="w-[140px] h-[140px]">
            <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
          </Avatar>
          <h1 className="font-changa text-[#FF66C4] text-5xl">
            Winni<span className="text-[#5271FF]">Career</span>
          </h1>
        </section>
      </section>
      <div className="w-full">
        <span className="">Copyright 2025 PT Winnicode Garuda Teknologi</span>
      </div>
    </footer>
  );
}
