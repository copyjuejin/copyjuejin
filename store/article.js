export const state=()=>({
    tabs:[],
    index:'0'
})

export const mutations={
    M_UPDATE_TABS(article,payload){
        article.tabs=payload.tabs
    },
    M_UPDATE_INDEX(article,payload){
        article.index=payload.index
    }
}

export const actions={
    A_UPDATE_TABS({commit},payload){
        commit('M_UPDATE_TABS',payload)
    },
    A_UPDATE_INDEX({commit},payload){
        commit('M_UPDATE_INDEX',payload)
    }
}
