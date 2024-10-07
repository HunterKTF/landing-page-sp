'use client'

import Image from "next/image";
import Link from "next/link";

import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Hero() {
    return (
        <div className="w-full flex justify-center items-center py-20">
            {/* Desktop Hero Section */}
            <div className="hidden xl:flex justify-around gap-10 py-10 items-center">
                <div className="w-full px-10 flex flex-col gap-5" id="hero-text">
                    <h1 className="text-3xl font-bold text-slate-700">
                        EL FUTURO PARA LA GESTIÓN DE EQUIPOS Y TECNOLOGÍA BIOMÉDICA
                    </h1>
                    <h2 className="text-md text-slate-600">
                        Monitorea en tiempo real y centraliza los servicios y mantenimientos
                        de tus equipos médicos.
                    </h2>
                    <div className="flex gap-5" id="button-group">
                        <Link href="" className="bg-slate-700 border border-slate-700 px-4 py-2 rounded-md drop-shadow-2xl">
                            <p className="text-sm text-white">Agendar Demo</p>
                        </Link>
                        <Link href="" className="border border-slate-700 px-4 py-2 rounded-md flex items-center drop-shadow-2xl">
                            <p className="text-xs text-slate-700">Chatea con un experto</p>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex justify-center drop-shadow-2xl" id="hero-img">
                    <Image
                        src="/sistemacomputo.png"
                        width={500}
                        height={500}
                        alt="Picture of Softpital software" />
                </div>
            </div>

            {/* Mobile Hero Section */}
            <div className="xl:hidden">
                <div className="w-full px-10 flex flex-col gap-5 items-center justify-center" id="hero-text">
                    <div className="w-full flex justify-center drop-shadow-2xl mb-10" id="hero-img">
                        <Image
                            src="/sistemacomputo.png"
                            width={400}
                            height={400}
                            alt="Picture of Softpital software" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-700 text-center">
                        EL FUTURO PARA LA GESTIÓN DE EQUIPOS Y TECNOLOGÍA BIOMÉDICA
                    </h1>
                    <h2 className="text-md text-slate-600 text-center">
                        Monitorea en tiempo real y centraliza los servicios y mantenimientos
                        de tus equipos médicos.
                    </h2>
                    <div className="flex gap-5" id="button-group">
                        <Link href="" className="bg-slate-700 border border-slate-700 px-4 py-2 rounded-md drop-shadow-2xl">
                            <p className="text-sm text-white text-center">Agendar Demo</p>
                        </Link>
                        <Link href="" className="border border-slate-700 px-4 py-2 rounded-md flex items-center drop-shadow-2xl">
                            <p className="text-xs text-slate-700 text-center">Chatea con un experto</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}