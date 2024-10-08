'use client'

export default function Stats() {
    return (
        <div className="w-full pb-14">
            {/* Desktop stats view */}
            <div className="hidden xl:flex gap-5 w-full justify-around">
                <h4 className="text-2xl font-bold text-slate-700 w-[200px] drop-shadow-xl">Planifica, Automatiza y Gestiona</h4>
                <div className="w-[210px] flex flex-col drop-shadow-xl gap-3" id="stats-1">
                    <h4 className="text-4xl font-bold text-slate-700">100%</h4>
                    <p className="text-sm text-slate-600">Digitaliza tus servicios, mantenimientos preventivos MP y mantenimientos correctivos MC</p>
                </div>
                <div className="w-[210px] flex flex-col drop-shadow-xl gap-3" id="stats-2">
                    <h4 className="text-4xl font-bold text-slate-700">100%</h4>
                    <p className="text-sm text-slate-600">Control del historial de tus equipos e instrumental médico</p>
                </div>
                <div className="w-[210px] flex flex-col drop-shadow-xl gap-3" id="stats-3">
                    <h4 className="text-4xl font-bold text-slate-700">2,000+</h4>
                    <p className="text-sm text-slate-600">Gestiona grandes cantidades de equipos médicos</p>
                </div>
            </div>

            {/* Mobile stats view */}
            <div className="xl:hidden flex flex-col w-full gap-5 justify-center items-center">
                <h4 className="text-2xl font-bold text-slate-700 drop-shadow-xl text-center">Planifica, Automatiza y Gestiona</h4>
                <div className=" flex flex-col items-center drop-shadow-xl gap-3" id="stats-1">
                    <h4 className="text-4xl font-bold text-slate-700">100%</h4>
                    <p className="text-sm text-slate-600 text-center">Digitaliza tus servicios, mantenimientos preventivos MP y mantenimientos correctivos MC</p>
                </div>
                <div className="flex flex-col items-center drop-shadow-xl gap-3" id="stats-2">
                    <h4 className="text-4xl font-bold text-slate-700">100%</h4>
                    <p className="text-sm text-slate-600">Control del historial de tus equipos e instrumental médico</p>
                </div>
                <div className="flex flex-col items-center drop-shadow-xl gap-3" id="stats-3">
                    <h4 className="text-4xl font-bold text-slate-700">2,000+</h4>
                    <p className="text-sm text-slate-600">Gestiona grandes cantidades de equipos médicos</p>
                </div>
            </div>
        </div>
    )
}