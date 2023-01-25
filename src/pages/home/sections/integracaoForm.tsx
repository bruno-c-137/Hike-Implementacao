import MenuNav from "../../../components/menuNav";
import { CheckCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import Api from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';

const initialForm = {
  link_lp: '',
  avaliacao_jornada: '',
  avaliacao_postback: '',
  tagueamento: '',
  integracao: ''
}

export default function IntegracaoForm() {
  const [valDados, setValDados] = useState(true)
  const [form, setForm] = useState<any>(initialForm);
  const [error, setError] = useState<Array<string | undefined>>();
  const [sending, setSending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    getProjeto()
  }, []);

  function updateForm(cliente: any) {
    if (!!cliente?.data?.attributes?.link_lp) {
      setValDados(false);
    }

    setForm({
      ...form,
      'link_lp': cliente?.data?.attributes?.link_lp || '',
      'avaliacao_jornada': cliente?.data?.attributes?.avaliacao_jornada || '',
      'avaliacao_postback': cliente?.data?.attributes?.avaliacao_postback || '',
      'tagueamento': cliente?.data?.attributes?.tagueamento || '',
      'integracao': cliente?.data?.attributes?.integracao || ''

    })

  }

  function handleFormChange(name: string, value: any) {
    setForm({
      ...form,
      [name]: value
    })
  };

  async function getProjeto() {
    try {
      const resp = await Api.Projeto();
      if (resp) {
        updateForm(resp?.data);
      }
    } catch (error) {
      console.log('erro');
    } finally {
    }
  }

  async function handleSubmit(e: any) {
    const formData = {
      'data': {
        ...form
      }
    };

    e.preventDefault();

    setSending(true);
    try {
      const resp = await Api.Integracao(formData);
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


  }
  return (
    <>
      <div className="sm:flex">
        <div className="sm:w-1/4 pb-8 sm:pt-0">
          <MenuNav />
        </div>
        <div className="sm:flex-1">
          <div className=" sm:flex gap-5">
            <div

            >
              <div
                className={`flex items-center px-4 py-5 gap-3 rounded-2xl duration-200 ease-in ${valDados
                  ? "border-2 border-[#3962a8] bg-white styleBoxShadow"
                  : "bg-[#e7e8e8]"
                  }`}
              >
                <CheckCircle
                  size={60}
                  weight="thin"
                  className={`${valDados ? "text-[#3962a8]" : "text-[#8e8e8e]"
                    }`}
                />
                <p
                  className={` text-base ${valDados ? "" : "text-[#8e8e8e]"
                    }`}
                >
                  <strong>
                    Caso seu produto seja um aplicativo (contratação ou venda
                    via site ou e-commerce)
                  </strong>
                </p>
              </div>

              <div
                className={`mt-5 rounded-3xl duration-200 ease-in ${valDados ? "bg-white styleBoxShadow" : "bg-[#e7e8e8]"
                  }`}
              >
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                      }`}
                  >
                    <strong>
                      Enviar link da LP ou site onde a aquisição combinada
                      acontece:
                    </strong>
                  </h1>

                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`p-1 duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                            }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          disabled={!valDados}
                          onChange={(e) => handleFormChange('link_lp', e.target.value)} value={form.link_lp}
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] bg-transparent hover:border-[#1462AC] focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                      >
                        Avaliação da jornada e definição exata dos passos para
                        aquisição:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                            }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          disabled={!valDados}
                          onChange={(e) => handleFormChange('avaliacao_jornada', e.target.value)} value={form.avaliacao_jornada}
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                      >
                        Avaliação do melhor formato de integração para inclusão
                        de postback do sucesso da inscrição:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                            }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          disabled={!valDados}
                          onChange={(e) => handleFormChange('avaliacao_postback', e.target.value)} value={form.avaliacao_postback}
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                      >
                        Implementar tagueamento definido:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                            }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          disabled={!valDados}
                          onChange={(e) => handleFormChange('tagueamento', e.target.value)} value={form.tagueamento}
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                      >
                        Validação da integração (Sucesso ou ajustes
                        necessários):
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                            }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          disabled={!valDados}
                          onChange={(e) => handleFormChange('integracao', e.target.value)} value={form.integracao}
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>
                    <div className=" px-4 pt-10 pb-14">
                      <button
                        type="submit"
                        disabled={sending}
                        className={`${!valDados && 'hidden'} duration-200 ease-in text-xs px-10 py-2 bg-[#3962a8] text-white btn-custom ${sending ? 'opacity-50' : ''}`}
                      >
                        {sending ? 'Aguarde...' : ' Enviar'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setValDados(true)}
                        className={` ${valDados && 'hidden'} duration-200 ease-in text-xs px-10 py-2 bg-[#333333] text-white btn-custom`}
                      >
                        Editar
                      </button>
                    </div>
                  </form>
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
              </div>
            </div>

            <div
              className={`pt-10 sm:pt-0
                }`}
            >
              <div
                className={`flex items-center px-4 py-5 gap-3 rounded-2xl duration-200 ease-in border-2 border-[#3962a8] bg-white styleBoxShadow
                  }`}
              >
                <CheckCircle
                  size={60}
                  weight="thin"
                  className={`duration-200 ease-in text-[#3962a8]
                    }`}
                />
                <p
                  className={` duration-200 ease-in text-base text-[#3962a8]
                    }`}
                >
                  <strong>
                    Caso seu produto seja um aplicativo (contratação ou venda
                    via site ou e-commerce)
                  </strong>
                </p>
              </div>

              <div
                className={`mt-5 rounded-3xl duration-200 ease-in bg-white styleBoxShadow pb-10
                  }`}
              >
                <h1
                  className={`pt-7 px-4 font-medium text-base duration-200 ease-in text-[#3962a8]
                    }`}
                >
                  Texto introdutório explicando <strong>MMP</strong>
                </h1>
                <p
                  className={`text-base px-4 pt-3 duration-200 ease-in text-[#1c1c1e] 
                    }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in text-[#1c1c1e]
                      }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"

                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] btn-custom
                      }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                      }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"

                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] btn-custom
                      }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                      }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"

                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] btn-custom
                      }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${valDados ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                      }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"

                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] btn-custom
                      }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                {/* <div className=" px-4 pt-10 pb-14">
                  <button
                    type="button"
                   
                    className={`duration-200 ease-in text-xs px-10 py-2 ${valDados
                      ? "bg-[#3962a8] text-white btn-custom"
                      : "bg-[#939394] text-[#cbcccc]"
                      }`}
                  >
                    Enviar
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
