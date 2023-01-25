import {
    useContext,
    createContext,
    useState,
} from 'react';

interface LayoutProps {
    fullLoading: boolean;
    showNav: any;
    setFullLoading: (value: boolean) => void;
    setShowNav: (value: any) => void;
}

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
    return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
    const [fullLoading, setFullLoading] = useState(false);
    const [showNav, setShowNav] = useState(0)
    return {
        fullLoading,
        showNav,
        setFullLoading,
        setShowNav
    }
}
const ProvideLayout: any = ({ children }: any) => {
    const layout: LayoutProps = useProvideLayout();
    return (
        <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
    );
};

export default ProvideLayout;