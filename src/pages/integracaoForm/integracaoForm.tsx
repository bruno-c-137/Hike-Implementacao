import MenuNav from "../../components/menuNav";

import { CheckCircle } from "phosphor-react";
import { useState } from "react";

import "../../assets/styles/_global.scss";

export default function IntegracaoForm() {
  const [idForm, setIdForm] = useState<number>(1);
  return (
    <>
      <div className=" flex">
        <div className="w-1/3">
          <MenuNav />
        </div>
        <div className=" flex-1">
          <div className=" flex gap-5">
            <div className=" cursor-pointer" onClick={() => setIdForm(0)}>
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
            </div>
            <div className=" cursor-pointer" onClick={() => setIdForm(1)}>
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
                  className={`${
                    idForm === 1 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                />
                <p
                  className={` text-base ${
                    idForm === 1 ? "text-[#3962a8]" : "text-[#8e8e8e]"
                  }`}
                >
                  <strong>
                    Caso seu produto seja um aplicativo (contratação ou venda
                    via site ou e-commerce)
                  </strong>
                </p>
              </div>

              <div className={`mt-5 styleBoxShadow rounded-3xl`}>
                <h1 className=" pt-7 px-4 text-[#3962a8] font-medium text-base">
                  Texto introdutório explicando <strong>MMP</strong>
                </h1>
                <p className={`text-[#1c1c1e] text-base px-4 pt-3`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className=" px-4 pt-6">
                  <h1 className={`text-[#1c1c1e] text-base pb-2`}>
                    Caso você utilize Appsflyer:
                  </h1>
                  <button className="btn-custom border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e]">
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className=" px-4 pt-6">
                  <h1 className={`text-[#1c1c1e] text-base pb-2`}>
                    Caso você utilize Appsflyer:
                  </h1>
                  <button className="btn-custom border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e]">
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className=" px-4 pt-6">
                  <h1 className={`text-[#1c1c1e] text-base pb-2`}>
                    Caso você utilize Appsflyer:
                  </h1>
                  <button className="btn-custom border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e]">
                    <strong>BAIXAR PDF</strong>
                  </button>
                </div>
                <div className=" px-4 pt-6">
                  <h1 className={`text-[#1c1c1e] text-base pb-2`}>
                    Caso você utilize Appsflyer:
                  </h1>
                  <button className="btn-custom border-[2px] border-[#8e8e8e] text-[12px] px-9 py-1 text-[#8e8e8e]">
                    <strong>BAIXAR PDF</strong>
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
