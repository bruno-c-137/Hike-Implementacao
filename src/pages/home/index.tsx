import ImgRetangulo from '../../assets/imgs/img-retangulo.webp'
import ImgMainImplementacao from '../../assets/imgs/img-main-implementacao.webp'
import MenuNav from '../../components/menuNav'
export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className='border-b border-[#5C5D5C] mb-10'>
                    <div className="sm:flex justify-between">
                        <div className='sm:w-1/3 pb-7 sm:pb-0'>
                            <p className="text-[#1c1c1e] text-2xl pb-3">
                                Seja muito bem-vindo ao seu
                                guia para fora da rota
                            </p>
                            <p className="text-[#1c1c1e] text-lg pb-7">
                                Esse é o primeiro passo do início da nossa parceira.
                                Ficamos muito felizes quando empresas incríveis pensam
                                além e acreditam no nosso negócio.
                            </p>
                            <p className="text-[#1c1c1e] text-lg pb-7">
                                A partir daqui, vamos encontrar, juntos,
                                a melhor trilha para levar a <strong> [nome da empresa]
                                    - ou sua empresa </strong> - ao topo.
                            </p>
                            <p className="text-[#1c1c1e] text-lg">
                                Para dar início à sua estratégia personalizada,
                                basta seguir as indicações abaixo. Se precisar
                            </p>
                        </div>
                        <div className='z-10'>
                            <img src={ImgRetangulo} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center md:-mt-[165px] pointer-events-none'>
                        <img src={ImgMainImplementacao} alt="" />
                    </div>
                </div>
                <div className='mb-16'>
                    <p className="text-[#1c1c1e] text-lg">
                        Para gerar o contrato que efetiva a nossa parceria, precisamos dos dados a seguir.
                        Assim que eles forem enviados, o documento é encaminhado para a assinatura.
                    </p>
                </div>
                <div className='flex'>
                    <div className='w-1/3'>
                        <MenuNav />
                    </div>
                    <div className='flex-1'>
                        <p className='text-[#393939] text-2xl mb-7'>
                            <strong>
                                Validar dados da Empresa XXXX
                            </strong>
                        </p>
                        <div className='mb-10 border-b border-[#5C5D5C] pb-10'>
                            <form>
                                <div className='flex flex-wrap mb-10'>
                                    <div className="w-1/2 pb-5">
                                        <div className='pr-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>CNPJ:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pb-5">
                                        <div className='pl-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>Endereço:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pb-5">
                                        <div className='pr-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>Nome do representante legal:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pb-5">
                                        <div className='pl-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>Email do representante legal:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className='pr-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>Nome da testemunha:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className='pl-3'>
                                            <label className="text-[#393939] text-lg font-medium " ><p>Email da testemunha:</p>
                                                <input required
                                                    className="w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent "
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex justify-end'>
                                    <button
                                        type="button"
                                        className="btn-custom w-1/6 bg-[#1462AC] text-white px-12 py-3  shadow-md flex justify-center items-center">
                                        <p className="text-secondary text-sm uppercase">
                                            <strong>
                                                ENVIAR
                                            </strong>
                                        </p>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='mb-10 border-b border-[#5C5D5C] pb-12'>
                            <p className='text-[#393939] text-xl mb-7'>
                                <strong>
                                    Validar proposta comercial
                                </strong>
                            </p>
                            <button className='btn-custom text-[#3962a8] text-sm border border-[#1462AC] py-3 px-10'>
                                <strong>
                                    BAIXAR PROPOSTA COMERCIAL
                                </strong>
                            </button>
                        </div>
                        <div className='mb-10 border-b border-[#5C5D5C] pb-12'>
                            <p className='text-[#393939] text-xl mb-7'>
                                <strong>
                                    Validar modelo de contrato
                                </strong>
                            </p>
                            <div>
                                <div className='shadow-inner bg-[#F3F8F7]'>
                                    <p className='text-[#3962a8] text-base underline uppercase'>
                                        <strong>
                                            Utilizar nosso modelo?
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}