"use client";
import Test from "@/components/Test";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <>
      <div>
        <Test />
        <button
          className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-black py-2 px-4 rounded me-3"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className="bg-black/80 hover:bg-black/60 hover:cursor-pointer text-white py-2 px-4 rounded"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      </div>
    </>
  );
}
