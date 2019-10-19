import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        letter: '',
        currentCity: localStorage.getItem('currentCity') || '广州',
    },
    mutations: {
        changeLetter(state, letter){
            state.letter = letter
        },
        changeCity(state, city){
            state.currentCity = city
            localStorage.setItem('currentCity', city) 
        }
    }

})