import loading from "../../assets/imgs/loading-ellipsis.svg"
export default function LoadingEllipsis() {
    return (
        <div className="w-screen h-screen flex justify-center items-center"><img loading="lazy" src={loading} width="100" alt="" /></div>
    )
}