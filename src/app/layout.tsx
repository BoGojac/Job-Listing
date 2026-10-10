import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Best job listing site, get your dream job here, explore employers, and apply for jobs online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
