'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Features() {
    return (
        <div className="w-full">
            {/* Desktop features */}
            <div className="hidden xl:flex">
                
            </div>

            {/* Mobile features */}
            <div className="xl:hidden w-full flex flex-col justify-center items-center py-24 gap-5">
                <h4 className="text-center text-xl w-full font-bold text-slate-700">
                    Descubre el poder de lo simple con calidad SOFTPITAL excepcional
                </h4>
                <Carousel className="w-full max-w-xs drop-shadow-xl">
                    <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}