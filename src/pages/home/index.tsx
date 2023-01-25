import ImgRetangulo from "../../assets/imgs/img-retangulo.webp";
import ImgMainImplementacao from "../../assets/imgs/img-main-implementacao.webp";
import IntegracaoForm from "./sections/integracaoForm";
import Criativo from "./sections/criativo";
import Agradecimento from "./sections/agradecimento";
import MenuNav from "../../components/menuNav";
import Api from "../../services/api";
import VMasker from 'vanilla-masker';
import { useEffect, useState } from "react";
import DialogError from "../../components/dialogError";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLayout } from "../../contexts";
import ImgBoxModelo from '../../assets/imgs/img-box-modelo.png'

const initialForm = {
  cnpj: '',
  endereco: '',
  representante_nome: '',
  representante_email: '',
  testemunha_nome: '',
  testemunha_email: ''
}

export default function Home() {
  const layoutContext = useLayout();
  const { dataProjeto, dataConfiguracoes } = layoutContext

  const [form, setForm] = useState<any>(initialForm)
  const [nome, setNome] = useState('')
  const [error, setError] = useState<Array<string | undefined>>();
  const [sending, setSending] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [valDados, setValDados] = useState(false)

  const notify = () => toast.success('Dados alterados com sucesso!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  useEffect(() => {
    updateForm(dataProjeto?.data?.attributes?.cliente)
  }, [dataProjeto?.data?.attributes?.cliente]);


  function updateForm(cliente: any) {
    if (!!cliente?.data?.attributes?.cnpj) {
      setValDados(true);
    }

    setNome(cliente?.data?.attributes?.nome)
    setForm({
      ...form,
      'cnpj': cliente?.data?.attributes?.cnpj || '',
      'endereco': cliente?.data?.attributes?.endereco || '',
      'representante_nome': cliente?.data?.attributes?.representante_nome || '',
      'representante_email': cliente?.data?.attributes?.representante_email || '',
      'testemunha_nome': cliente?.data?.attributes?.testemunha_nome || '',
      'testemunha_email': cliente?.data?.attributes?.testemunha_email || ''

    })

  }

  function handleFormChange(name: string, value: any) {
    if (name === 'cnpj') {
      value = VMasker.toPattern(value, "999.999.999-99");
    }
    setForm({
      ...form,
      [name]: value
    })
  }

  function validateForm() {
    setError(undefined);
    const arrError: Array<string | undefined> = [];
    if (form?.cnpj?.length < 14) {
      arrError.push('CNPJ incompleto');
    }
    if (form?.endereco == '') {
      arrError.push('Informe o Endereço');
    }
    if (form?.representante_nome == '') {
      arrError.push('Informe o Nome do representante legal');
    }
    if (form?.representante_email.match(/[A-Za-z0-9.]+@[A-Za-z0-9]/) == null) {
      arrError.push('Email do Email do representante legal inválido');
    }
    setError(arrError);
    return !arrError.length;
  };


  async function handleSubmit(e: any) {
    const formData = {
      'data': {
        ...form
      }
    };

    e.preventDefault();
    if (validateForm()) {
      setSending(true);
      try {
        const resp = await Api.Cliente(formData);
        if (resp) {
          updateForm(resp?.data);
          notify()
        } else {
          throw new Error("");
        }
      } catch (e: any) {
        const errors = e?.response?.data?.mensagem;
        setError([errors || 'Algo deu errado. Tente novamente.'])
        setIsOpen(true);
      } finally {
        setSending(false);
      }
    } else {
      setIsOpen(true);
    }

  }


  return (
    <div className="home">
      <div className="container">
        <div className="border-b border-[#5C5D5C] mb-10">
          <div className="sm:flex justify-between">
            <div data-aos="fade-right" className="sm:w-1/3 pb-7 sm:pb-0">
              <p className="text-[#1c1c1e] text-2xl pb-3">
                Seja muito bem-vindo ao seu guia para fora da rota
              </p>
              <p className="text-[#1c1c1e] text-lg pb-7">
                Esse é o primeiro passo do início da nossa parceira. Ficamos
                muito felizes quando empresas incríveis pensam além e acreditam
                no nosso negócio.
              </p>
              <p className="text-[#1c1c1e] text-lg pb-7">
                A partir daqui, vamos encontrar, juntos, a melhor trilha para
                levar a <strong> {nome} </strong> -
                ao topo.
              </p>
              <p className="text-[#1c1c1e] text-lg">
                Para dar início à sua estratégia personalizada, basta seguir as
                indicações abaixo. Se precisar
              </p>
            </div>
            <div data-aos="fade-left" className="z-10">
              <img src={ImgRetangulo} alt="" />
            </div>
          </div>
          <div className="flex justify-center md:-mt-[165px] pointer-events-none" data-aos="fade-up">
            <img src={ImgMainImplementacao} alt="" />
          </div>
        </div>
        <div data-aos="fade-up" className="mb-16" id="contrato">
          <p className="text-[#1c1c1e] text-lg">
            Para gerar o contrato que efetiva a nossa parceria, precisamos dos
            dados a seguir. Assim que eles forem enviados, o documento é
            encaminhado para a assinatura.
          </p>
        </div>
        <div className="sm:flex">
          <div data-aos="fade-right" className="w-1/3 mb-10 sm:mb-0">
            <MenuNav />
          </div>
          <div data-aos="fade-up" className="flex-1">
            <p className="text-[#393939] text-2xl mb-7">
              <strong>Validar dados da Empresa {nome}</strong>
            </p>
            <div className="mb-10 border-b border-[#5C5D5C] pb-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-10">
                  <div className="w-1/2 pb-5">
                    <div className="pr-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>CNPJ:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('cnpj', e.target.value)} value={form.cnpj}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 pb-5">
                    <div className="pl-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>Endereço:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('endereco', e.target.value)} value={form.endereco}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 pb-5">
                    <div className="pr-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>Nome do representante legal:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('representante_nome', e.target.value)} value={form.representante_nome}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 pb-5">
                    <div className="pl-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>Email do representante legal:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('representante_email', e.target.value)} value={form.representante_email}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="pr-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>Nome da testemunha:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('testemunha_nome', e.target.value)} value={form.testemunha_nome}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="pl-3">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p>Email da testemunha:</p>
                        <input
                          disabled={valDados}
                          onChange={(e) => handleFormChange('testemunha_email', e.target.value)} value={form.testemunha_email}
                          required
                          className={`w-full border border-[#1462AC] outline-none  pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent ${valDados && 'bg-[#E7E8E8]'}`}
                          type="text"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className={`flex ${!valDados && 'justify-end '}`}>
                  <button
                    onClick={() => setValDados(false)}
                    type="button"
                    className={`${!valDados && 'hidden'} btn-custom w-1/6 bg-[#333333] text-white px-12 py-3  shadow-md flex justify-center items-center`}
                  >
                    <p className="text-secondary text-sm uppercase">
                      <strong>editar</strong>
                    </p>
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className={`${valDados && 'hidden'} btn-custom w-1/6 bg-[#1462AC] text-white px-12 py-3  shadow-md flex justify-center items-center ${sending ? 'opacity-50' : ''}`}
                  >
                    <p className="text-secondary text-sm uppercase">
                      <strong>{sending ? 'Aguarde...' : ' Enviar'}</strong>
                    </p>
                  </button>
                </div>
              </form>
              <DialogError isOpen={isOpen} onClose={() => setIsOpen(false)} errors={error} />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
            <div className="mb-10 border-b border-[#5C5D5C] pb-12">
              <p className="text-[#393939] text-xl mb-7">
                <strong>Validar proposta comercial</strong>
              </p>
              <a download
                target="_blank"
                href={dataConfiguracoes?.data?.attributes?.proposta_comercial?.data?.attributes?.url}
                className="inline-block btn-custom text-[#3962a8] text-sm border border-[#1462AC] py-3 px-10">
                <strong>BAIXAR PROPOSTA COMERCIAL</strong>
              </a>
            </div>
            <div className="mb-10  pb-12">
              <p className="text-[#393939] text-xl mb-7">
                <strong>Validar modelo de contrato</strong>
              </p>
              <div className="sm:flex">
                <div className="flex flex-col justify-center items-center bg-white styleBoxShadow relative py-10 sm:w-1/2 rounded-3xl mb-5 sm:mb-0 sm:mr-3">
                  <div className="z-10">
                    <p className="text-[#3962a8] text-base underline uppercase">
                      <strong>Utilizar nosso modelo?</strong>
                    </p>
                  </div>
                  <img className="absolute right-0 top-0 h-full rounded-r-3xl" src={ImgBoxModelo} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center px-5 bg-white styleBoxShadow relative py-10  sm:w-1/2 rounded-3xl  sm:ml-3">
                  <div className="z-10 mb-5">
                    <p className="text-[#3962a8] text-base uppercase">
                      <strong>Utilizar outro modelo?</strong>
                    </p>

                  </div>
                  <div className="border border-[#4E73B1] p-5 mb-7 ">
                    <p className="text-[#454545] text-sm text-center">
                      Por favor, insira mais informações sobre como a parceria pode ser fomalizada.
                    </p>
                  </div>
                  <div>
                    <button


                      className={`btn-custom  bg-[#1462AC] text-white px-7 py-3  shadow-md flex justify-center items-center `}
                    >
                      <p className="text-secondary text-[11px] uppercase">
                        <strong>enviar contrato</strong>
                      </p>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10  border-y pt-14 border-[#5C5D5C] pb-12" id="integracao">
          <div>
            <IntegracaoForm />
          </div>
        </div>
        <div className="mb-10 border-b border-[#5C5D5C] pb-12" id="criativo">
          <div>
            <Criativo />
          </div>
        </div>
        <div data-aos="fade-up" className="mb-10 border-b border-[#5C5D5C] pb-12">
          <div>
            <Agradecimento />
          </div>
        </div>
      </div>
    </div>
  );
}
