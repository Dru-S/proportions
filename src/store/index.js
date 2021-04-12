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
			switch (theme) {
				case 'light':
				case 'dark':
					state.theme = theme;
					break;

				default:
					state.theme = state.theme == 'light' ? 'dark' : state.theme;
					state.theme = state.theme == 'dark' ? 'light' : state.theme;
					break;
			}
		},
	}
});

export default store;
