import Service from "./service";
export default {

    Projeto: async () => {
        return await Service(false).get(`/api/slugify/slugs/projeto/projeto-1?populate[0]=cliente&populate[cliente][populate]=logo`)
    },
    Cliente: async (body: any) => {
        return await Service(false).put(`/api/clientes/1`, body)
    },
    Integracao: async (body: any) => {
        return await Service(false).put(`/api/projetos/1`, body)
    },
    Configuracao: async () => {
        return await Service(false).get(`/api/configuracao?populate=*`)
    }
}