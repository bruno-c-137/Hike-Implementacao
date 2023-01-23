import MenuNav from "../../../components/menuNav";

import { CheckCircle } from "phosphor-react";
import { useState } from "react";

import "../../../assets/styles/_global.scss";

export default function IntegracaoForm() {
  const [idForm, setIdForm] = useState<number>(1);
  return (
    <>
      <div className="sm:flex">
        <div className="sm:w-1/4 pb-8 sm:pt-0">
          <MenuNav />
        </div>
        <div className="sm:flex-1">
          <div className=" sm:flex gap-5">
            <div
              className={`${idForm === 0 ? "" : "cursor-pointer"}`}
              onClick={() => setIdForm(0)}
            >
              <div
                className={`flex items-center px-4 py-5 gap-3 rounded-2xl duration-200 ease-in ${
                  idForm === 0
                    ? "border-2 border-[#3962a8] bg-white styleBoxShadow"
                    : "bg-[#e7e8e8]"
                }`}
              >
                <CheckCircle
                  size={60}
                  weight="thin"
                  className={`${
                    idForm === 0 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                />
                <p
                  className={` text-base ${
                    idForm === 0 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                >
                  <strong>
                    Caso seu produto seja um aplicativo (contratação ou venda
                    via site ou e-commerce)
                  </strong>
                </p>
              </div>

              <div
                className={`mt-5 rounded-3xl duration-200 ease-in ${
                  idForm === 0 ? "bg-white styleBoxShadow" : "bg-[#e7e8e8]"
                }`}
              >
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${
                      idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                    }`}
                  >
                    <strong>
                      Enviar link da LP ou site onde a aquisição combinada
                      acontece:
                    </strong>
                  </h1>

                  <form action="">
                    <div className="">
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`p-1 duration-200 ease-in ${
                            idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] bg-transparent hover:border-[#1462AC] focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${
                          idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                        }`}
                      >
                        Avaliação da jornada e definição exata dos passos para
                        aquisição:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${
                            idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${
                          idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                        }`}
                      >
                        Avaliação do melhor formato de integração para inclusão
                        de postback do sucesso da inscrição:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${
                            idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${
                          idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                        }`}
                      >
                        Implementar tagueamento definido:
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${
                            idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>

                    <div className="pt-6">
                      <p
                        className={`${
                          idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                        }`}
                      >
                        Validação da integração (Sucesso ou ajustes
                        necessários):
                      </p>
                      <label className="text-[#393939] text-lg font-medium ">
                        <p
                          className={`duration-200 ease-in ${
                            idForm === 0 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                          }`}
                        >
                          Responsabilidade <strong>Hike</strong>;
                        </p>
                        <input
                          required
                          className={`w-full border-2 border-[#8e8e8e] outline-none pl-5 pr-2 py-1 duration-200 ease-in text-lg text-[#393939] hover:border-[#1462AC] bg-transparent  focus:border-[#1462AC]`}
                          type="text"
                        />
                      </label>
                    </div>
                    <div className=" px-4 pt-10 pb-14">
                      <button
                        type="submit"
                        disabled={idForm != 0}
                        className={`duration-200 ease-in text-xs px-10 py-2 ${
                          idForm === 0
                            ? "bg-[#3962a8] text-white btn-custom"
                            : "bg-[#939394] text-[#cbcccc]"
                        }`}
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className={`pt-10 sm:pt-0 ${
                idForm === 1 ? "" : "cursor-pointer"
              }`}
              onClick={() => setIdForm(1)}
            >
              <div
                className={`flex items-center px-4 py-5 gap-3 rounded-2xl duration-200 ease-in ${
                  idForm === 1
                    ? "border-2 border-[#3962a8] bg-white styleBoxShadow"
                    : "bg-[#e7e8e8]"
                }`}
              >
                <CheckCircle
                  size={60}
                  weight="thin"
                  className={`duration-200 ease-in ${
                    idForm === 1 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                />
                <p
                  className={` duration-200 ease-in text-base ${
                    idForm === 1 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                >
                  <strong>
                    Caso seu produto seja um aplicativo (contratação ou venda
                    via site ou e-commerce)
                  </strong>
                </p>
              </div>

              <div
                className={`mt-5 rounded-3xl duration-200 ease-in ${
                  idForm === 1 ? "bg-white styleBoxShadow" : "bg-[#e7e8e8]"
                }`}
              >
                <h1
                  className={`pt-7 px-4 font-medium text-base duration-200 ease-in ${
                    idForm === 1 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                >
                  Texto introdutório explicando <strong>MMP</strong>
                </h1>
                <p
                  className={`text-base px-4 pt-3 duration-200 ease-in ${
                    idForm === 1 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${
                      idForm === 1 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                    }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"
                    disabled={idForm != 1}
                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] ${
                      idForm === 1 ? "btn-custom" : ""
                    }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${
                      idForm === 1 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                    }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"
                    disabled={idForm != 1}
                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] ${
                      idForm === 1 ? "btn-custom" : ""
                    }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${
                      idForm === 1 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                    }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"
                    disabled={idForm != 1}
                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] ${
                      idForm === 1 ? "btn-custom" : ""
                    }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className="px-4 pt-6">
                  <h1
                    className={`text-base pb-2 duration-200 ease-in ${
                      idForm === 1 ? "text-[#1c1c1e]" : "text-[#8e8e8e]"
                    }`}
                  >
                    Caso você utilize Appsflyer:
                  </h1>
                  <button
                    type="button"
                    disabled={idForm != 1}
                    className={`duration-200 ease-in border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e] ${
                      idForm === 1 ? "btn-custom" : ""
                    }`}
                  >
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className=" px-4 pt-10 pb-14">
                  <button
                    type="button"
                    disabled={idForm != 1}
                    className={`duration-200 ease-in text-xs px-10 py-2 ${
                      idForm === 1
                        ? "bg-[#3962a8] text-white btn-custom"
                        : "bg-[#939394] text-[#cbcccc]"
                    }`}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
