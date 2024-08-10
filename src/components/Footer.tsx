import Link from "next/link";
import React from "react";
import Image from "next/image";

import Brand from "../../public/TeckloLogo.png";

function Footer() {
  return (
    <footer className="pt-10  text-black border-t border-blue-500">
      <div className="max-w-7xl py-10 mx-auto flex flex-col md:flex-row px-5 md:justify-between">
        <div>
          <Image
            src={Brand}
            width={1000}
            height={1000}
            className="w-56"
            alt="Brand Image"
          />
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div className="flex flex-col">
            <Link className="hover:text-yellow-500 duration-500" href="/">
              About
            </Link>
            <Link className="hover:text-yellow-500 duration-500" href="/">
              Services
            </Link>
            <Link className="hover:text-yellow-500 duration-500" href="/">
              Our Work
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="font-bold text-lg">Get In Touch</h1>
          <div>
            <p>Contact No : (604) 206-0777</p>
            <p>
              Email : <a href="mailto:">example@domain.in</a>
            </p>
            <p>Office: Address</p>
          </div>
        </div>
      </div>
      <div className="p-5 text-center border-t border-blue-500 max-w-4xl mx-auto flex flex-col gap-2 itme-center justify-center">
        <p>copyright &copy; 2024 Tecklo.co All Rights Reserved.</p>
        <p className="text-sm">
          Made by{" "}
          <a href="https://noblessetech.com/" className="font-bold underline">
            Noblessetech
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
