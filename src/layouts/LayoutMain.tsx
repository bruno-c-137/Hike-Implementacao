import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingEllipsis from "../components/loadingEllipsis";
const HeaderMain = lazy(() => import("../components/headerMain"));
const FooterMain = lazy(() => import("../components/footerMain"));

export default function LayoutMain() {
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