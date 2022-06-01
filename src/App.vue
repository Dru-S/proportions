<template>

	<div class="ds_app" v-bind:class="[`_${$store.state.theme}`]">

		<ds-header />

		<main class="ds_main">

			<div class="ds_proportion">

				<div class="ds_proportion_i ds_proportion_input">
					<label for="inputA">A</label>
					<div>
						<input type="number" v-model="inputA" autofocus />
					</div>
				</div>

				<div class="ds_proportion_i ds_proportion_swap">
					<a class="" @click="swapTwins()"><ds-octicon name="arrow-switch"/></a>
				</div>

				<div class="ds_proportion_i ds_proportion_input">
					<label for="inputB">B</label>
					<div>
						<input type="number" v-model="inputB" />
					</div>
				</div>

				<div class="ds_proportion_i ds_proportion_equals">{{ '=' }}</div>

				<div class="ds_proportion_i ds_proportion_input">
					<label for="inputC">C</label>
					<div>
						<input type="number" v-model="inputC" />
					</div>
				</div>

				<div class="ds_proportion_i ds_proportion_colon">{{ ':' }}</div>

				<div class="ds_proportion_i ds_proportion_input _res" v-bind:class="{ _border: !!inputD }">
					<label for="inputD">?</label>
					<div>
						<input type="text" :value="inputD" readonly tabindex="0" />
					</div>
				</div>

			</div>

		</main>

	</div>
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
			return this.$store.state.prefix + value + this.$store.state.suffix;
		}
	},

	methods: {
		swapTwins() {
			let tmp = this.$data.inputA;
			this.$data.inputA = this.$data.inputB;
			this.$data.inputB = tmp;
		},
	}
};
</script>

<style lang="scss">
@import 'stylesheets/main';
</style>
