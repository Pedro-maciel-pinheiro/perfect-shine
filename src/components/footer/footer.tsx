import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-base-content mt-10 grid grid-cols-2 content-center gap-8 bg-black p-10 text-white">
      <aside className="mt-2 flex flex-col gap-8">
        <Link href={"/"}>
          <Image src={"/logo/logo-white.png"} alt="" width={300} height={300} />
        </Link>
        <p>
          ACME Industries Ltd.
          <br />
          Providing car detail since 2018
        </p>
      </aside>
      <nav className="flex items-start justify-around gap-2">
        <nav className="flex flex-col gap-2">
          <h6 className="text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="ftext-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="ftext-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </nav>
    </footer>
  );
}
