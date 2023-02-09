import Head from "next/head";
import { FaCode } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Vásquez</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 md:p-6 bg-neutral-100 min-h-screen">
        <div className=" bg-zinc-800 rounded-md shadow-lg max-w-screen-lg m-auto">
          <div className="bg-slate-100 p-2 shadow-md border-solid border-x border-y border-zinc-800 flex-row">
            <FaFacebookF className="cursor-pointer" />
          </div>
          <h1 className="text-2xl text-center text-lime-400 pt-1">
            Eduardo Vásquez
          </h1>
          <FaCode className="h-32 w-32 sm:h-64 sm:w-64 text-white" />
        </div>
      </main>
    </>
  );
}
