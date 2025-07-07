import { Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <section className="h-[360px]  flex justify-center bg-[#162156] p-12 pl-24 pr-24 gap-8">
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
        <section className="flex flex-col">
          <h1 className="uppercase font-bold">Kontak Kami</h1>
          <p>
            <span className="font-bold">E-Mail: </span>
            winnicodegarudaofficial@gmail.com
          </p>
          <p>
            <span className="font-bold">Call Center: </span>
            6285159932501 (24 Jam)
          </p>
          <p>
            <span className="font-bold">Alamat (Cabang Bandung):</span>
            Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung,Kota Bandung,
            Jawa Barat 40261
          </p>
          <span className="font-bold">Alamat (Cabang Yogyakarta):</span>
          Bantul, Yogyakarta
          <span className="font-bold">Alamat (Cabang Jakarta):</span>
          Bekasi, Jawa Barat
          <span className="font-bold">Administrasi Berkas:</span>
          Hubungi Admin Telp: +6285159932501
        </section>
        <section
          className="flex gap-6 w-[720px] items-center justify-center
      "
        >
          <Avatar className="w-[180px] h-[180px]">
            <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
          </Avatar>
          <h1 className="font-changa text-[#FF66C4] text-5xl">
            Winni<span className="text-[#5271FF]">Career</span>
          </h1>
        </section>
      </section>
      <section className="w-full pl-8 py-2 ">
        <span className="">Copyright 2025 PT Winnicode Garuda Teknologi</span>
      </section>
    </footer>
  );
}
