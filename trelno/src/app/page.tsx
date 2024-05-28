import { Navbar } from "@/components/organisms/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white bg-black h-screen">
      <Navbar />
      <div className="w-3/4 m-auto mt-20">
        <p className="">
          Trello? Trel...no&nbsp;
        </p>
      </div>
    </main>
  );
}
