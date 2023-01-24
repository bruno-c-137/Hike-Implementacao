import Service from "./service";
export default {

    Projeto: async () => {
        return await Service(false).get(`/api/slugify/slugs/projeto/projeto-1?populate[0]=cliente&populate[cliente][populate]=logo`)
    }
}