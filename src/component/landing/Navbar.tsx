import React from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full bg-[#fbfaf7f0] relative z-10 border-b border-[#eeeae2] text-text-color">
      <div className="h-20 flex items-center justify-between mx-6">
        {/* --- 1. BRAND LOGO --- */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 tracking-revers-3 text-lg text-nav-link font-bold hover:-rotate-6 transition-transform">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#f7ce3c] rotate-[-8deg]">
            <Sparkles size={17} />
          </span>
          <p>Opportunity</p>
          <span className="text-[#eb725d]">.</span>
        </Link>

        {/* --- 2. DESKTOP NAVIGATION LINKS (Hidden on mobile) --- */}
        <nav className="hidden md:flex gap-16 font-medium">
          <Link
            href="/"
            className="hover:text-[#115dc0] hover:-rotate-6 transition-all">
            Home
          </Link>
          <Link
            href="/jobs"
            className="hover:text-[#115dc0] hover:-rotate-6 transition-all">
            Jobs
          </Link>
          <Link
            href="/about"
            className="hover:text-[#115dc0] hover:-rotate-6 transition-all">
            About
          </Link>
        </nav>

        {/* --- 3. DESKTOP AUTH BUTTONS (Hidden on mobile) --- */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 border border-[#d9ddd9] bg-white py-3 px-5 rounded-full text-text-color text-xs font-bold transition-all duration-200 ease-in-out hover:bg-text-color hover:text-white hover:border-text-color hover:-translate-y-px">
            Log in
          </Link>
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 border border-[#d9ddd9] bg-white py-3 px-5 rounded-full text-text-color text-xs font-bold transition-all duration-200 ease-in-out hover:bg-text-color hover:text-white hover:border-text-color hover:-translate-y-px">
            Register
          </Link>
        </div>

        {/* --- 4. CSS-DRIVEN MOBILE MENU (Visible ONLY on mobile/tablets) --- */}
        <details className="md:hidden group relative">
          {/* Custom Toggle Trigger */}
          <summary className="list-none p-2 rounded-lg cursor-pointer flex items-center justify-center transition-colors hover:bg-[#eeeae2]">
            <Menu className="block group-open:hidden w-6 h-6 text-text-color" />
            <X className="hidden group-open:block w-6 h-6 text-text-color" />
          </summary>

          {/* Styled Menu Dropdown matching main scheme */}
          <div className="absolute top-15 right-0 w-64 min-h-full rounded-[5%] bg-[#fbfaf7]/75 backdrop-blur-md border border-[#eeeae2]/80 shadow-2xl  p-5 flex flex-col space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Mobile Nav Links */}
            <ul className="flex flex-col space-y-3 font-medium">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 rounded-lg text-text-color hover:text-[#115dc0] hover:bg-[#eeeae2] transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="block py-2 px-3 rounded-lg text-text-color hover:text-[#115dc0] hover:bg-[#eeeae2] transition-all">
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 rounded-lg text-text-color hover:text-[#115dc0] hover:bg-[#eeeae2] transition-all">
                  About
                </Link>
              </li>
            </ul>

            {/* Content Divider */}
            <div className="h-px bg-[#eeeae2] w-full" />

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3">
              <Link
                href="/auth/login"
                className="text-center border border-[#d9ddd9] bg-white py-3 px-4 rounded-full text-text-color text-xs font-bold transition-all duration-200 ease-in-out hover:bg-text-color hover:text-white">
                Log in
              </Link>
              <Link
                href="/auth/register"
                className="text-center border border-[#d9ddd9] bg-white py-3 px-4 rounded-full text-text-color text-xs font-bold transition-all duration-200 ease-in-out hover:bg-text-color hover:text-white">
                Register
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export default Navbar;
