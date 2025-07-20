import { Globe } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <section className="flex flex-wrap justify-between bg-[#162156] p-12 gap-8 text-white">
        {/* Tautan */}
        <section className="min-w-[200px] flex flex-col gap-2">
          <h1 className="uppercase font-bold">Tautan</h1>
          <Link
            href="https://winnicode.com/"
            className="flex items-center gap-2"
          >
            <Globe />
            <p>www.winnicode.com</p>
          </Link>
          <Link
            href="https://www.instagram.com/winnicodeofficial/"
            className="flex items-center gap-2"
          >
            <FaInstagram size={24} />
            Instagram
          </Link>
        </section>

        {/* Kontak Kami */}
        <section className="min-w-[250px] flex flex-col gap-2">
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
            Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung, Kota
            Bandung, Jawa Barat 40261
          </p>
          <p>
            <span className="font-bold">Alamat (Cabang Yogyakarta):</span>{" "}
            Bantul, Yogyakarta
          </p>
          <p>
            <span className="font-bold">Alamat (Cabang Jakarta):</span> Bekasi,
            Jawa Barat
          </p>
          <p>
            <span className="font-bold">Administrasi Berkas:</span> Hubungi
            Admin Telp: +6285159932501
          </p>
        </section>

        {/* Logo & Branding */}
        <section className="flex flex-col items-center justify-center mx-auto">
          <Avatar className="w-[180px] h-[180px]">
            <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
          </Avatar>
          <h1 className="font-changa text-[#FF66C4] text-5xl mt-4 text-center">
            Winni<span className="text-[#5271FF]">Career</span>
          </h1>
        </section>
      </section>

      <section className="w-full bg-[#162156] text-white text-sm text-center py-2">
        <span>Copyright 2025 PT Winnicode Garuda Teknologi</span>
      </section>
    </footer>
  );
}
