import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		unit: '',
		fixed: 2,
		theme: 'dark',
	},
	mutations: {
		fixedIncrement(state, val) {
			state.fixed += val;
			if (state.fixed < 0) state.fixed = 0;
		},
		//
		unitUpdate(state, unit) {
			state.unit = unit;
		},
		//
		themeUpdate(state, theme) {
			if (theme) {
				state.theme = theme;
			} else {
				if (state.theme == 'light') {
					state.theme = 'dark'
				} else if (state.theme == 'dark') {
					state.theme = 'light'
				}
			}
		},
	}
});

export default store;
