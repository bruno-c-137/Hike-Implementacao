import { useState } from "react"

export default function MenuNav() {
    const [showNav, setShowNav] = useState(0)
    return (
        <div className="menu-nav">
            <div>
                <button className="flex items-center mb-10" onClick={() => setShowNav(0)}>
                    <div className={`rounded-full py-3 px-2 flex items-center mr-3  ${showNav == 0 ? 'bg-[#3962a8]' : 'bg-[#A9AAA9]'}`}>
                        <p className="text-sm  text-[#F3F8F7] leading-[0px]">
                            <strong>
                                1
                            </strong>
                        </p>
                    </div>
                    <div>
                        <p className={`${showNav == 0 ? 'text-xl text-[#3962a8] font-bold' : 'text-[#242424] text-lg'}`}>CONTRATO</p>
                    </div>
                </button>
                <button className="flex items-center mb-10" onClick={() => setShowNav(1)}>
                    <div className={`rounded-full py-3 px-2 flex items-center mr-3  ${showNav == 1 ? 'bg-[#3962a8]' : 'bg-[#A9AAA9]'}`}>
                        <p className="text-sm  text-[#F3F8F7] leading-[0px]">
                            <strong>
                                2
                            </strong>
                        </p>
                    </div>
                    <div>
                        <p className={`${showNav == 1 ? 'text-xl text-[#3962a8] font-bold' : 'text-[#242424] text-lg'}`}>INTEGRAÇÃO</p>
                    </div>
                </button>
                <button className="flex items-center" onClick={() => setShowNav(2)}>
                    <div className={`rounded-full py-3 px-2 flex items-center mr-3 ${showNav == 2 ? 'bg-[#3962a8]' : 'bg-[#A9AAA9]'}`}>
                        <p className="text-sm  text-[#F3F8F7] leading-[0px]">
                            <strong>
                                3
                            </strong>
                        </p>
                    </div>
                    <div>
                        <p className={`${showNav == 2 ? 'text-xl text-[#3962a8] font-bold' : 'text-[#242424] text-lg'}`}>CRIATIVO</p>
                    </div>
                </button>
            </div>
        </div>
    )
}