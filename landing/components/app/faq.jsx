'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <div className="py-16 w-full flex flex-col gap-5">
            <h3 className="text-center text-xl font-bold text-slate-700">Preguntas Más Frecuentes</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="">
                    <AccordionTrigger className="text-md">¿SOFTPITAL es fácil de implementar?</AccordionTrigger>
                    <AccordionContent>
                        Sí, SOFTPITAL está diseñado para facilitar una implementación rápida y sencilla, optimizando el
                        tiempo y los recursos de tu organización.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="">
                    <AccordionTrigger className="text-md">¿Necesito capacitaciones tardadas para comprender el funcionamiento del SOFTPITAL?</AccordionTrigger>
                    <AccordionContent>
                        No, el sistema es intuitivo y se puede aprender fácilmente con capacitaciones breves, minimizando el tiempo de adaptación.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="">
                    <AccordionTrigger className="text-md">¿Cómo afecta SOFTPITAL en los costos de mis mantenimientos?</AccordionTrigger>
                    <AccordionContent>
                        SOFTPITAL ayuda a reducir los costos de mantenimiento al mejorar la eficiencia y permitir una mejor gestión de recursos,
                        evitando gastos innecesarios. Además de contar con estadisticas que te ayudan a crear estratégias sobre retorno de inversión
                        y alargar la vida de tus equipos y tecnología médica.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="">
                    <AccordionTrigger className="text-md">¿Puedo acceder a la información desde cualquier dispositivo?</AccordionTrigger>
                    <AccordionContent>
                        Por supuesto, la accesibilidad es clave. Podras accedar a tus proyectos e información sin limitaciones,
                        permitiendo que tu creatividad y productividad fluyan sin fronteras.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}