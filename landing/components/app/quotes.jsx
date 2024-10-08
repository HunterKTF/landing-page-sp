'use client'

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


export default function Quotes() {
    return (
        <div className="w-full py-16">
            {/* Desktop view */}
            <div className="hidden xl:flex flex-col w-full gap-16">
                <div className="">
                    <p className="text-center text-md font-bold text-cyan-700">CITAS QUE RESUENAN</p>
                    <h5 className="text-center text-2xl text-slate-700 font-bold">
                        Importancia de un CMMS para gestionar tus equipos y tecnología médica
                    </h5>
                </div>
                <div className="flex justify-around">
                    {/* Quote 1 */}
                    <Card className="w-72 px-4 py-6 hover:drop-shadow-2xl hover:-translate-y-7 animate-in duration-200">
                        <CardContent>
                            <p>
                                &quot;One of the core disciplines in clinical engineering is the management of healthcare technologies,
                                involving assessment, evaluation, procurement, control, asset management, maintenance and repair, replacement
                                planning, and more tasks&quot;.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Clinical Engineering Handbook, 2020, p.xlv</p>
                        </CardFooter>
                    </Card>

                    {/* Quote 2 */}
                    <Card className="w-72 px-4 py-6 hover:drop-shadow-2xl hover:-translate-y-7 animate-in duration-200">
                        <CardContent>
                            <p>&quot;Toda organización que pretenda contar con un programa eficaz de gestión de equipo médico deberá disponer
                                de un inventario de equipos y mantenerlo&quot;.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.21-22</p>
                        </CardFooter>
                    </Card>


                    {/* Quote 3 */}
                    <Card className="w-72 px-4 py-6 hover:drop-shadow-2xl hover:-translate-y-7 animate-in duration-200">
                        <CardContent>
                            <p>&quot;Un inventario sólo es eficaz si es exhaustivo y exacto. Para ello debe actualizarse siempre que haya cambios
                                o información nueva, así como en las auditorías y exámenes anuales&quot;.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.18</p>
                        </CardFooter>
                    </Card>

                    {/* Quote 4 */}
                    <Card className="w-72 px-4 py-6 hover:drop-shadow-2xl hover:-translate-y-7 animate-in duration-200">
                        <CardContent>
                            <p>
                                &quot;
                                Aunque es perfectamente aceptable registrar un inventario en papel, un sistema computarizado puede facilitar su gestión,
                                especialmente si es grande&quot;.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.19</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* Mobile view */}
            <div className="xl:hidden flex justify-center items-center">
                <div className="xl:hidden w-full flex flex-col justify-center items-center py-16 gap-5">
                    <div className="flex flex-col gap-3">
                        <p className="text-center text-md font-bold text-cyan-700">CITAS QUE RESUENAN</p>
                        <h5 className="text-center text-2xl text-slate-700 font-bold">
                            Importancia de un CMMS para gestionar tus equipos y tecnología médica
                        </h5>
                    </div>
                    <Carousel className="w-full max-w-xs drop-shadow-xl flex justify-center items-center">
                        <CarouselContent>
                            <CarouselItem>
                                <Card className="px-4 py-6">
                                    <CardContent>
                                        <p>
                                            &quot;One of the core disciplines in clinical engineering is the management of healthcare technologies,
                                            involving assessment, evaluation, procurement, control, asset management, maintenance and repair, replacement
                                            planning, and more tasks&quot;.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Clinical Engineering Handbook, 2020, p.xlv</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>

                            <CarouselItem>
                                <Card className="px-4 py-6">
                                    <CardContent>
                                        <p>&quot;Toda organización que pretenda contar con un programa eficaz de gestión de equipo médico deberá disponer
                                            de un inventario de equipos y mantenerlo&quot;.</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.21-22</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>

                            <CarouselItem>
                                <Card className="px-4 py-6">
                                    <CardContent>
                                        <p>&quot;Un inventario sólo es eficaz si es exhaustivo y exacto. Para ello debe actualizarse siempre que haya cambios
                                            o información nueva, así como en las auditorías y exámenes anuales&quot;.</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.18</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>

                            <CarouselItem>
                                <Card className="px-4 py-6">
                                    <CardContent>
                                        <p>
                                            &quot;
                                            Aunque es perfectamente aceptable registrar un inventario en papel, un sistema computarizado puede facilitar su gestión,
                                            especialmente si es grande&quot;.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Introducción a la gestión de inventarios de equipo médico, 2012, p.19</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}