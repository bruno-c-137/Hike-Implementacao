import {
    useContext,
    createContext,
    useState,
    useEffect,
} from 'react';
import Api from '../services/api';

interface LayoutProps {
    fullLoading: boolean;
    showNav: any;
    dataConfiguracoes: any;
    dataProjeto: any;
    setFullLoading: (value: boolean) => void;
    setShowNav: (value: any) => void;
    setDataConfiguracoes: (value: any) => void;
    setDataProjeto: (value: any) => void;
}

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
    return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
    const [fullLoading, setFullLoading] = useState(false);
    const [showNav, setShowNav] = useState(0)
    const [dataConfiguracoes, setDataConfiguracoes] = useState<any>(undefined)
    const [dataProjeto, setDataProjeto] = useState<any>(undefined)


    useEffect(() => {
        getProjeto();
        getConfiguracoes()
    }, [])

    async function getProjeto() {
        try {
            const resp = await Api.Projeto();
            if (resp) {
                setDataProjeto(resp?.data);
            }
        } catch (error) {
            console.log('erro');
        } finally {
        }
    };

    async function getConfiguracoes() {
        try {
            const resp = await Api.Configuracao();
            if (resp) {
                setDataConfiguracoes(resp?.data);
            }
        } catch (error) {
            console.log('erro');
        } finally {
        }
    }

    return {
        fullLoading,
        showNav,
        dataConfiguracoes,
        dataProjeto,
        setFullLoading,
        setShowNav,
        setDataConfiguracoes,
        setDataProjeto
    }
}
const ProvideLayout: any = ({ children }: any) => {
    const layout: LayoutProps = useProvideLayout();
    return (
        <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
    );
};

export default ProvideLayout;