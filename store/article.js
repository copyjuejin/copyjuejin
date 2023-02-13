export const state=()=>({
    tabs:[],
    index:0,
    sortTab:[],
    sortActiveName:'推荐'
})

export const mutations={
    M_UPDATE_TABS(article,payload){
        article.tabs=payload.tabs
    },
    M_UPDATE_INDEX(article,payload){
        article.index=payload.index
    },
    M_UPDATE_SORT(article,payload){
        article.sortTab=payload.sortTab
    },
    M_UPDATE_ACTIVENAME(article,payload){
        article.sortActiveName=payload.sortActiveName
    }
}

export const actions={
    A_UPDATE_TABS({commit},payload){
        commit('M_UPDATE_TABS',payload)
    },
    A_UPDATE_INDEX({commit},payload){
        commit('M_UPDATE_INDEX',payload)
    },
    A_UPDATE_SORT({commit},payload){
        commit('M_UPDATE_SORT',payload)
    },
    A_UPDATE_ACTIVENAME({commit},payload){
        commit('M_UPDATE_ACTIVENAME',payload)
    }
}
