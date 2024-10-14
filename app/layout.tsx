import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "../styles/mainLayout.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import LoginBtn from "@/pages/LoginBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip-Flutter",
  description: "여행의 즐거움, 트리플러터",
};

export default async function RootLayout({ children,}: Readonly<{  children: React.ReactNode;}>) {
    await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={style.body}>
        <Header />
        <LoginBtn />
        <div className={style.childrenContainer}>{children}</div>


        <Footer />
      </body>
    </html>
  );
}
