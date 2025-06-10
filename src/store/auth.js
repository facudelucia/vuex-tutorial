export const authModule = {
    namespaced:true,
    state() {
        return {
            loggedIn: false
        }
    },
    mutations: {
        login(state) {
            state.loggedIn = true
        },
    },
    actions: {
        login(context) {
            context.commit('login')
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.loggedIn
        }
    }
}