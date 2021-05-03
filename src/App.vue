<template>

	<div class="ds_app" v-bind:class="[`_${$store.state.theme}`]">

		<ds-header />

		<main class="ds_main">

			<ul class="ds_proportions">
				<li class="ds_proportions_input">
					<label for="inputA">A</label>
					<div>
						<input type="number" v-model="inputA" autofocus />
					</div>
				</li>
				<li>
					<a class="ds_proportions_swap" @click="swapTwins()"><ds-octicon name="arrow-switch"/></a>
				</li>
				<li class="ds_proportions_input">
					<label for="inputB">B</label>
					<div>
						<input type="number" v-model="inputB" />
					</div>
				</li>
				<li>{{ '=' }}</li>
				<li class="ds_proportions_input">
					<label for="inputC">C</label>
					<div>
						<input type="number" v-model="inputC" />
					</div>
				</li>
				<li>{{ ':' }}</li>
				<li class="ds_proportions_input _res" v-bind:class="{ _border: !!inputD }">
					<label for="inputD">?</label>
					<div>
						<input type="text" :value="inputD" readonly tabindex="0" />
					</div>
				</li>
			</ul>

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
			return value + this.$store.state.unit;
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
