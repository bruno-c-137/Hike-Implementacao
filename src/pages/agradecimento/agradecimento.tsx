import { ReactComponent as TratoFeito } from "../../assets/imgs/tratoFeito.svg";

export default function Agradecimento(){
    return(
        <>
            <div className=" sm:flex items-center sm:px-6 md:px-16 sm:gap-14">
                <div className=" flex justify-center sm:block">
                    <TratoFeito />
                </div>
                <div className=" pt-5 sm:pt-0">
                    <p className=" text-2xl text-[#1c1c1e] font-light">Estamos muito felizes com essa parceria e sempre disponíveis para você e sua empresa. Se achar necessário, podemos fazer uma reunião de Kick-off para avançarmos. </p>
                    <p className=" text-[1.6rem] text-[#1c1c1e] font-normal pt-4">LEAVE THE ROADS. TAKE THE TRAILS.</p>
                </div>
            </div>
        </>
    )

}