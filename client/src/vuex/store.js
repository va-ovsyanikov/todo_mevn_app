import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todo: []
    },
    mutations: {
        GET_ITEM_TODO(state, todo) { 
            state.todo = todo
        },
        ADD_TODO(state, todo) {
            state.todo.push(todo)
        },
        DELETE_TODO(state, todo) {
            state.todo = state.todo.filter(item => item._id !== todo._id)
        },
        COMPLETED_TODO(state, todoCompleted) {
        const indexTodo = state.todo.findIndex(item => item._id === todoCompleted._id )
          if(indexTodo !== -1){
              state.todo.splice(indexTodo, 1, todoCompleted)
          }
        }
    },
    actions: {
        GET_TODO({ commit }) {
            return axios.get('get/')
                .then(response => {
                    commit("GET_ITEM_TODO", response.data)
                }).catch((error) => {
                    console.log(error)
                })
        },
        ADD_TODO: async ({ commit }, data) => {
            try {
                const response = await axios.post('save/', {
                    title: data
                })
                commit("ADD_TODO", response.data)
            } catch (error) {
                console.log(error)
            }
        },
        DELETE_TODO({ commit }, id) {
            return axios.delete(`delete/${id}`)
                .then(response => {
                    commit("DELETE_TODO", response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        COMPLETED_TODO({commit}, { id, todoCompleted }) {
            return axios.post(`complete/${id}`, {
                completed: todoCompleted
            })
                .then(response => {
                    // console.log(response.data)
                    commit("COMPLETED_TODO", response.data)
                 })
                
                .catch((error) => {
                    console.log(error)
                })
        }

    },
    getters: {
        GETTERS_TODO(state) {
            return state.todo
        }
    }
})

export default store



