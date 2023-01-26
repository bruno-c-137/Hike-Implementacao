import MenuNav from "../../../components/menuNav";
import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import Api from "../../../services/api";

export default function Criativo() {
  const [error, setError] = useState<Array<string | undefined>>();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<any>()
  const [dataUpload, setDataUpload] = useState<any>()


  useEffect(() => {
    if (form) {
      handlePutUpload(form);
    }

  }, [!!dataUpload && form])


  function uploadSubmit(name: any, files: any) {
    let formdata = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append("files", files[i])
    }
    handleSubmit(formdata);
    setForm(name)
  }
  async function handleSubmit(e: any) {
    try {
      const resp = await Api.Upload(e);
      if (resp) {
        setDataUpload(resp?.data);

      } else {
        throw new Error("");
      }
    } catch (e: any) {
      const errors = e?.response?.data?.mensagem;
      setError([errors || 'Algo deu errado. Tente novamente.'])
      setIsOpen(true);
    } finally {

    }
  }


  async function handlePutUpload(e: any) {
    const formData = {
      'data': {
        [e]: [
          ...dataUpload
        ]
      }

    };
    try {
      const resp = await Api.Integracao(formData);
      if (resp) {

      } else {
        throw new Error("");
      }
    } catch (e: any) {
      const errors = e?.response?.data?.mensagem;
      setError([errors || 'Algo deu errado. Tente novamente.'])
      setIsOpen(true);
    } finally {

    }


  }
  return (
    <>
      <div data-aos="fade-up" className=" w-full sm:w-10/12 md:w-8/12">
        <p className="text-[#1c1c1e] text-lg">
          Por fim, solicitamos as <strong>peças criativas</strong> já produzidas
          por vocês e em linha com a atual estratégia de comunicação. Caso não
          possuam todos os formatos colocados, podemos realizar o desdobramento
          por aqui, respeitando KV (A ser enviado) e guide da marca (A ser
          enviado):
        </p>
      </div>

      <div className=" sm:flex pt-10">
        <div data-aos="fade-right" className="sm:w-1/4 pb-8 sm:pt-0">
          <MenuNav />
        </div>
        <div data-aos="fade-left" className=" sm:flex-1">
          <div>
            <form action="">
              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">E-mail marketing: *</p>
                </label>
                <label className=" flex items-center gap-3 pb-1">
                  <input
                    id="1"
                    required
                    multiple
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="file" onChange={(e) => uploadSubmit('criativos_email', e.target.files)}
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </label>
                <p className=" text-lg">
                  Arte (Se tiverem já o HTML, solicitamos o arquivo);{" "}
                </p>
              </div>

              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">Banners (Formatos): * </p>
                </label>
                <label className=" flex items-center gap-3 pb-1">
                  <input
                    multiple
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="file" onChange={(e) => uploadSubmit('banners', e.target.files)}
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </label>
                <p className=" text-lg">
                  300x50, 320x480x 480x320, 728x90, 1024x768, 768x1024,
                  1200x627, 320x50
                </p>
              </div>
              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">Vídeo:</p>
                </label>
                <label className=" flex items-center gap-3 pb-1">
                  <input
                    multiple
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="file" onChange={(e) => uploadSubmit('videos', e.target.files)}
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </label>
                <p className=" text-lg">
                  (1200x1200, Texto 80, Título 25 e Descrição 30; 1080x1920
                  (9:16), podendo ser animado.)
                </p>
              </div>
              {/* <div className=" sm:px-4 pb-14">
                <button
                  type="submit"
                  className="duration-200 ease-in text-xs px-10 py-2 bg-[#3962a8] text-white btn-custom"
                >
                  Enviar
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
