import { lazy, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingEllipsis from "../components/loadingEllipsis";
const HeaderMain = lazy(() => import("../components/headerMain"));
const FooterMain = lazy(() => import("../components/footerMain"));
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LayoutMain() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <HeaderMain />
            <main>
                <Suspense fallback={<LoadingEllipsis />}>
                    <Outlet />
                </Suspense>
            </main>
            <FooterMain />
        </>
    )
}