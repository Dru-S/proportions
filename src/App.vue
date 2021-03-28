<template>

	<main class="ds_main" v-bind:class="{ _light: light }">
		<ul class="ds_proportions">
			<li class="ds_proportions_input">
				<label for="inputA">A</label>
				<div>
					<input type="number" v-model="inputA" autofocus />
				</div>
			</li>
			<li>
				<a class="ds_proportions_swap" @click="swapTwins()">
					<span class="ds_svg">
						<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80">
							<path
								d="M1.2,17.3c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.2-0.1,0.3-0.2,0.5c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.6-0.1,1.3,0,1.9 c0,0.1,0.1,0.3,0.1,0.4c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.2,0.4c0.2,0.3,0.4,0.5,0.6,0.7 c0,0,0,0,0,0l14.3,14.3c0.9,0.9,2.2,1.4,3.4,1.4s2.5-0.5,3.4-1.4c1.9-1.9,1.9-4.9,0-6.8l-6.1-6.1h57.7c2.6,0,4.8-2.1,4.8-4.8 s-2.1-4.8-4.8-4.8H16.9l6.1-6.1c1.9-1.9,1.9-4.9,0-6.8c-1.9-1.9-4.9-1.9-6.8,0L2,16.2c0,0,0,0,0,0c-0.2,0.2-0.4,0.4-0.6,0.7 C1.3,17.1,1.2,17.2,1.2,17.3z"
							/>
							<path
								d="M79.1,62.2c0.1-0.2,0.1-0.3,0.1-0.5c0-0.1,0.1-0.3,0.1-0.4c0.1-0.6,0.1-1.3,0-1.9c0-0.1-0.1-0.3-0.1-0.4 c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.2-0.2-0.3-0.2-0.5c-0.1-0.1-0.1-0.2-0.2-0.4c-0.2-0.3-0.4-0.5-0.6-0.7L63.7,42.7 c-1.9-1.9-4.9-1.9-6.8,0c-1.9,1.9-1.9,4.9,0,6.8l6.1,6.1H5.4c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h57.7l-6.1,6.1 c-1.9,1.9-1.9,4.9,0,6.8c0.9,0.9,2.2,1.4,3.4,1.4s2.5-0.5,3.4-1.4L78,63.8c0.2-0.2,0.4-0.5,0.6-0.7c0.1-0.1,0.1-0.2,0.2-0.4 C78.9,62.6,79,62.4,79.1,62.2z"
							/>
						</svg>
					</span>
				</a>
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

			<div class="ds_fixed_changer">
				<a
					class="minus"
					v-bind:class="{ _disabled: fixed == 0 }"
					@click="changeFixed(-1)"
				>
					<span class="ds_svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
							<path
								d="M74.7,35.2H5.3c-2.7,0-4.8,2.1-4.8,4.8s2.1,4.8,4.8,4.8h69.4c2.7,0,4.8-2.1,4.8-4.8S77.4,35.2,74.7,35.2z"
							/>
						</svg>
					</span>
				</a>
				<div class="ds_input">
					<label>Fixed</label>
					<div class="input">{{ fixed }}</div>
				</div>
				<a class="plus" @click="changeFixed(1)">
					<span class="ds_svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
							<path
								d="M74.7,35.2H44.8V5.3c0-2.7-2.1-4.8-4.8-4.8s-4.8,2.1-4.8,4.8v29.9H5.3c-2.7,0-4.8,2.1-4.8,4.8s2.1,4.8,4.8,4.8h29.9v29.9 c0,2.7,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8V44.8h29.9c2.7,0,4.8-2.1,4.8-4.8S77.4,35.2,74.7,35.2z"
							/>
						</svg>
					</span>
				</a>
			</div>

			<div class="ds_theme_switcher">
				<a class="sun" @click="light = true">
					<span class="ds_svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
							<path
								fill="#ff972a"
								d="M40.79,1,46,10.64a.9.9,0,0,0,1.32.3l8.89-6.45a.91.91,0,0,1,1.43.69l.5,11a.9.9,0,0,0,1.06.84L70,15.05a.9.9,0,0,1,1,1.23L66.7,26.39a.91.91,0,0,0,.59,1.22l10.58,2.93a.91.91,0,0,1,.36,1.55L70,39.32a.91.91,0,0,0,0,1.36l8.27,7.23a.91.91,0,0,1-.36,1.55L67.29,52.39a.91.91,0,0,0-.59,1.22L71,63.72A.9.9,0,0,1,70,65L59.21,63a.9.9,0,0,0-1.06.84l-.5,11a.91.91,0,0,1-1.43.69l-8.89-6.45a.9.9,0,0,0-1.32.3L40.79,79a.9.9,0,0,1-1.58,0L34,69.36a.9.9,0,0,0-1.32-.3l-8.89,6.45a.91.91,0,0,1-1.43-.69l-.5-11A.9.9,0,0,0,20.79,63L10,65a.9.9,0,0,1-1-1.23L13.3,53.61a.91.91,0,0,0-.59-1.22L2.13,49.46a.91.91,0,0,1-.36-1.55L10,40.68a.91.91,0,0,0,0-1.36L1.77,32.09a.91.91,0,0,1,.36-1.55l10.58-2.93a.91.91,0,0,0,.59-1.22L9,16.28a.9.9,0,0,1,1-1.23L20.79,17a.9.9,0,0,0,1.06-.84l.5-11a.91.91,0,0,1,1.43-.69l8.89,6.45a.9.9,0,0,0,1.32-.3L39.21,1A.9.9,0,0,1,40.79,1Z"
							/>
							<circle fill="#ffb42a" cx="40" cy="40" r="23.38" />
						</svg>
					</span>
				</a>
				<a class="switch" @click="light = !light"></a>
				<a class="moon" @click="light = false">
					<span class="ds_svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
							<path
								fill="#ff972a"
								d="M51.53,11.16A31.48,31.48,0,0,0,28.73,10c.21.08.42.16.62.26a23.34,23.34,0,1,1-19,42.64l-.6-.29A31.58,31.58,0,1,0,51.53,11.16Z"
							/>
						</svg>
					</span>
				</a>
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
			unit: '',
			fixed: 2,
			inputA: '',
			inputB: '',
			inputC: '',
			light: false,
		};
	},
	computed: {
		inputD() {
			if (!(this.$data.inputA && this.$data.inputB && this.$data.inputC)) return '';

			let value = ((this.$data.inputB * this.$data.inputC) / this.$data.inputA).toFixed(
				this.$data.fixed,
			);
			return value + this.$data.unit;
		},
	},
	methods: {
		swapTwins() {
			let tmp = this.$data.inputA;
			this.$data.inputA = this.$data.inputB;
			this.$data.inputB = tmp;
		},
		changeFixed(val) {
			this.fixed += val;

			if (this.fixed < 0) this.fixed = 0;
		},
	},
};
</script>

<style lang="scss">
@import 'stylesheets/main';
</style>
