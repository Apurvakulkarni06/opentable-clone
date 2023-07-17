import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

import Navbar from "../components/Navbar/Navbar";
import MainPageHeader from "../components/MainPageHeader/MainPageHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}

        {/* Header */}
       <MainPageHeader />
        {/* Header */}
      </main>
    </main>
  );
}
