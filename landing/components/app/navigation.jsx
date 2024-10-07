'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Bars3Icon } from '@heroicons/react/24/solid';

import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex w-full h-full justify-between items-center rounded-full bg-white drop-shadow-xl px-10">
            <h3 className="text-xl font-bold" id="logo">
                Softpital
            </h3>

            {/* Desktop menu navigation */}
            <div className="hidden xl:flex xl:gap-10" id="menu">
                <Link href="#"><p className="text-md text-slate-700" >Solución</p></Link>
                <Link href="#"><p className="text-md text-slate-700" >Blog</p></Link>
                <Link href="#"><p className="text-md text-slate-700" >Contáctanos</p></Link>
            </div>
            <div className="hidden xl:flex xl:gap-5" id="cta">
                <Link href="#" className="px-5 py-2 border border-slate-700 rounded-md">
                    <p className="text-sm">Login</p>
                </Link>
                <Link href="#" className="px-5 py-2 border border-slate-700 bg-slate-700 rounded-md">
                    <p className="text-sm text-white">Agendar Demo</p>
                </Link>
            </div>

            {/* Mobile menu navigation */}
            <div className="xl:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Bars3Icon className="size-6 text-slate-700" />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col justify-between">
                        <SheetHeader>
                            <SheetTitle>
                                Softpital
                            </SheetTitle>
                        </SheetHeader>
                        <div className="h-full w-full flex flex-col gap-5 justify-center">
                            <Link href="#" className="px-5 py-2 rounded-md">
                                <p className="text-center text-lg">Solución</p>
                            </Link>
                            <Link href="#" className="px-5 py-2 rounded-md">
                                <p className="text-center text-lg">Blog</p>
                            </Link>
                            <Link href="#" className="px-5 py-2 rounded-md">
                                <p className="text-center text-lg">Contáctanos</p>
                            </Link>
                        </div>
                        <SheetFooter>
                            <div className="flex flex-col gap-5 w-full">
                                <Link href="#" className="px-5 py-2 border border-slate-700 rounded-md">
                                    <p className="text-md text-center">Login</p>
                                </Link>
                                <Link href="#" className="px-5 py-2 border border-slate-700 bg-slate-700 rounded-md">
                                    <p className="text-md text-center text-white">Agendar Demo</p>
                                </Link>
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}