<template>

	<main class="ds_main" v-bind:class="[`_${$store.state.theme}`]">
		<ul class="ds_proportions">
			<li class="ds_proportions_input">
				<label for="inputA">A</label>
				<div>
					<input type="number" v-model="inputA" autofocus />
				</div>
			</li>
			<li>
				<a class="ds_proportions_swap" @click="swapTwins()"><ds-sprite id="swap"/></a>
			</li>
			<li class="ds_proportions_input">
				<label for="inputB">B</label>
				<div>
					<input type="number" v-model="inputB" />
				</div>
			</li>
			<li>
				=
			</li>
			<li class="ds_proportions_input">
				<label for="inputC">C</label>
				<div>
					<input type="number" v-model="inputC" />
				</div>
			</li>
			<li>:</li>
			<li class="ds_proportions_input _res" v-bind:class="{ _border: !!inputD }">
				<label for="inputD">?</label>
				<div>
					<input type="text" :value="inputD" readonly tabindex="0" />
				</div>
			</li>
		</ul>

		<div class="ds_tools">

			<div class="ds_unit_append">
				<div class="ds_input">
					<label>Unit</label>
					<input type="text" v-model="unit" />
				</div>
			</div>

			<!--  -->

			<div class="ds_fixed_changer">
				<a class="minus"
					v-bind:class="{ _disabled: $store.state.fixed == 0 }"
					@click="changeFixed(-1)">
					<ds-sprite id="minus"/>
				</a>
				<div class="ds_input">
					<label>Fixed</label>
					<div class="input">{{ $store.state.fixed }}</div>
				</div>
				<a class="plus" @click="changeFixed(1)">
					<ds-sprite id="plus"/>
				</a>
			</div>

			<div class="ds_theme_switcher">
				<a class="sun" @click="$store.commit('themeUpdate', 'light')"><ds-sprite id="sun"/></a>
				<a class="switch" @click="$store.commit('themeUpdate')"></a>
				<a class="moon" @click="$store.commit('themeUpdate', 'dark')"><ds-sprite id="moon"/></a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			inputA: '',
			inputB: '',
			inputC: '',
		};
	},
	computed: {
		inputD() {
			if (!(this.$data.inputA && this.$data.inputB && this.$data.inputC)) return '';

			let value = ((this.$data.inputB * this.$data.inputC) / this.$data.inputA).toFixed(this.$store.state.fixed);
			return value + this.$store.state.unit;
		},
		unit: {
			get() {
				return this.$store.state.unit;
			},
			set(val) {
				this.$store.commit('unitUpdate', val)
			},
		}
	},
	methods: {
		swapTwins() {
			let tmp = this.$data.inputA;
			this.$data.inputA = this.$data.inputB;
			this.$data.inputB = tmp;
		},
		changeFixed(val) {
			this.$store.commit('fixedIncrement', val)
		},
	},
};
</script>

<style lang="scss">
@import 'stylesheets/main';
</style>
