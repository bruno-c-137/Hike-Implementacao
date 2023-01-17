
import LogoHikeFooter from '../../assets/imgs/logo-hike-footer.png'
import LinkedinLogo from '../../assets/imgs/img-linkedin.png'
import InstagramLogo from '../../assets/imgs/img-instagram.png'
import SetaTop from '../../assets/imgs/seta-top.png'
export default function FooterMain() {
    return (
        <div className="footer">
            <footer className="bg-[#1462AC]">
                <div className="container">
                    <div className='py-10'>
                        <div className='sm:flex py-7 sm:py-14'>
                            <div className='flex-1 flex flex-col items-center sm:items-start pb-7 sm:pb-0'>
                                <img src={LogoHikeFooter} alt="" />
                            </div>
                            <div className=" sm:w-4/12 flex flex-col items-center sm:items-start pb-7 sm:pb-0">
                                <p className="text-lg text-[#F4F4F4] pb-3">Endereço</p>
                                <p className="text-[15px] text-[#DADBE0] pb-1">Rua Amauri, 305</p>
                                <p className="text-[15px] text-[#DADBE0]">Itaim Bibi, São Paulo, SP</p>
                            </div>
                            <div className=" sm:w-4/12 flex flex-col items-center sm:items-start pb-7 sm:pb-0">
                                <p className="text-lg text-[#F4F4F4] pb-3">Redes Sociais</p>
                                <div className="flex justify-center sm:justify-start">
                                    <a aria-label="linkedin - gohikebr" href="https://www.linkedin.com/company/gohikebr" target='_blank' rel="noopener noreferrer" className="text-[15px] mr-5 text-[#DADBE0] pb-1">
                                        <img src={LinkedinLogo} alt="linkedin" />
                                    </a>
                                    <a aria-label="instagram - gohikebr" href="https://www.instagram.com/gohikebr" target='_blank' rel="noopener noreferrer" className="text-[15px] text-[#DADBE0]">
                                        <img src={InstagramLogo} alt="instagram" />
                                    </a>

                                </div>
                            </div>
                            <div>
                                <button className="mb-3 flex items-center text-[11px] uppercase text-[#F4F4F4]">
                                    <p className="pr-2">TOPO</p><img src={SetaTop} /></button>
                                {/* <a download target='_blank' rel="noopener noreferrer" href="./termos-de-uso.pdf" className="font-bold underline text-[15px] text-[#DADBE0] ">
                                <span>  {DataLanguage[idioma].termos}</span></a> */}


                            </div>
                        </div>
                        <div className="text-[#ffffff] text-center text-[11px]">
                            Copyright Hike. Todos os direitos reservados. É proibida a reprodução do conteúdo desta página em qualquer meio de comunicação, eletrônico ou impresso, sem autorização escrita da Hike.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}