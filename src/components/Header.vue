<template>
	<header class="ds_header">
		<div class="ds_header_logo">
			Proportions

			<div class="ds_header_logo_claim">
				<span>but nicer.</span>
			</div>
		</div>

		<!--  -->

		<div class="ds_header_tools">

			<div class="ds_header_tools_i ds_unit_append">
				<div class="ds_input">
					<label>Unit</label>
					<input type="text" v-model="unit" />
				</div>
			</div>

			<div class="ds_header_tools_i ds_fixed_changer">
				<a class="ds_fixed_changer_i" v-bind:class="{ _disabled: $store.state.fixed == 0 }" @click="changeFixed(-1)">
					<ds-octicon name="dash"/>
				</a>
				<div class="ds_input">
					<label>Fixed</label>
					<div class="input">{{ $store.state.fixed }}</div>
				</div>
				<a class="ds_fixed_changer_i" @click="changeFixed(1)">
					<ds-octicon name="plus"/>
				</a>
			</div>

			<div class="ds_header_tools_i ds_theme_switcher">
				<a class="ds_theme_switcher_icon" @click="$store.commit('themeUpdate', 'light')"><ds-octicon name="sun"/></a>
				<a class="ds_theme_switcher_switch" @click="$store.commit('themeUpdate')"></a>
				<a class="ds_theme_switcher_icon" @click="$store.commit('themeUpdate', 'dark')"><ds-octicon name="moon"/></a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'DsHeader',
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
		changeFixed(val) {
			this.$store.commit('fixedIncrement', val)
		},
	},
}
</script>

<style>

</style>
