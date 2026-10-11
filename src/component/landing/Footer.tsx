import React from "react";
import Link from "next/link";
import { Sparkles, Mail, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#f0eee8] py-16 border-t border-[#eeeae2] text-[#14243b]">
      <div className="w-full max-w-280 mx-auto px-8 flex flex-col">
        {/* --- Upper Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#d8d7d3] text-center items-center md:text-left md:items-start">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 tracking-revers-3 text-lg text-nav-link font-bold hover:-rotate-6 transition-transform">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#f7ce3c] rotate-[-8deg]">
                <Sparkles size={17} />
              </span>
              <p>Opportunity</p>
              <span className="text-[#eb725d]">.</span>
            </Link>
            <p className="text-xs leading-[1.6] text-[#999ca0] max-w-65">
              A better way to find meaningful work, close to dream and beyond.
            </p>
          </div>

          {/* Column 2: Explore links */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-xs  uppercase tracking-wider text-[#667181] mb-1">
              Explore
            </h1>
            <Link
              href="/jobs"
              className="text-sm text-[#313d4e] hover:text-text-color transition-colors">
              Browse opportunities
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#313d4e] hover:text-text-color transition-colors">
              About Opportunity
            </Link>
          </div>

          {/* Column 3: For Organisations */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-xs  uppercase tracking-wider text-[#667181] mb-1">
              For organisations
            </h1>
            <Link
              href="/jobs"
              className="text-sm text-[#313d4e] hover:text-text-color transition-colors">
              Post an opportunity
            </Link>
          </div>

          {/* Column 4: Get in Touch Channels */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h1 className="text-xs uppercase tracking-wider text-[#667181] mb-1 ">
              Social Links
            </h1>

            <div className="flex flex-col items-center md:items-start gap-y-3 text-[13px] text-[#313d4e] font-medium">
              {/* Email Link */}
              <Link
                href="mailto:hello@opportunity.com"
                className="hover:text-text-color transition-colors flex items-center gap-2">
                <Mail size={14} />
                <span>Email</span>
              </Link>

              {/* LinkedIn Link */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-color transition-colors flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </Link>

              {/* Instagram Link */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-color transition-colors flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </Link>

              {/* Telegram Link */}
              <Link
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-color transition-colors flex items-center gap-2">
                <Send size={14} />
                <span>Telegram</span>
              </Link>

              {/* Facebook Link */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-color transition-colors flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 grid grid-cols-2 justify-between text-center md:text-left text-sm text-[#667181] font-medium">
          <span className="text-left">Made for people who care.</span>
          <span className="text-right">&copy; 2026 Opportunity</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
