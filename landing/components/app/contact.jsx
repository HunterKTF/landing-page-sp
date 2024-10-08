'use client';

import Link from "next/link";

export default function Contact() {
    return (
        <div className="w-full flex justify-center items-center px-10 my-24">

            {/* Desktop contact view */}
            <div className="hidden xl:flex gap-16 bg-gradient-to-l from-cyan-700 to-slate-500 px-32 py-24 rounded-br-[64px] rounded-tl-[64px]">
                <div className="flex w-full">
                    <h3 className="text-3xl text-white">¡ENCUENTRA EL PLAN PERFECTO PARA TI!</h3>
                </div>
                <div className="flex flex-col justify-between gap-3 w-full">
                    <p className="text-white w-full">
                        Da el primer paso hacia la automatización y digitalización
                    </p>
                    <div className="flex gap-5 items-center">
                        <Link href="" className="bg-white px-6 py-4 w-fit h-fit rounded-l-full rounded-br-full drop-shadow-2xl">
                            <p className="text-sm text-center">
                                Agenda tu Demo
                            </p>
                        </Link>
                        <Link href="" className="border border-white px-3 py-2 w-fit h-fit rounded-md drop-shadow-2xl">
                            <p className="text-white text-xs text-center">
                                Chatea con un experto
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile contact view */}
            <div className="xl:hidden flex flex-col gap-10 bg-gradient-to-l from-cyan-700 to-slate-500 px-16 py-20 rounded-br-[64px] rounded-tl-[64px]">
                <div className="flex w-full">
                    <h3 className="text-3xl text-white text-center">¡ENCUENTRA EL PLAN PERFECTO PARA TI!</h3>
                </div>
                <div className="flex flex-col justify-between gap-8 w-full">
                    <p className="text-white w-full text-center">
                        Da el primer paso hacia la automatización y digitalización
                    </p>
                    <div className="flex flex-col gap-5 items-center">
                        <Link href="" className="bg-white px-6 py-4 w-fit h-fit rounded-l-full rounded-br-full drop-shadow-2xl">
                            <p className="text-sm text-center">
                                Agenda tu Demo
                            </p>
                        </Link>
                        <Link href="" className="border border-white px-3 py-2 w-fit h-fit rounded-md drop-shadow-2xl">
                            <p className="text-white text-xs text-center">
                                Chatea con un experto
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}