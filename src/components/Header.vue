<template>

	<header class="ds_header">
		<div class="ds_header_logo">
			Proportions

			<div class="ds_header_logo_claim">
				<span>but nicer.</span>
			</div>
		</div>


		<!--  -->

		<div class="ds_header_tools" v-bind:class="{ '_open': toolsOpen }">

			<button class="ds_header_tools_toggle" v-on:click="toolsOpen = true">
				<ds-octicon name="tools"></ds-octicon>
			</button>

			<div class="ds_header_tools_wr">

				<div class="ds_header_tools_wr_title">
					Tools
					<button v-on:click="toolsOpen = false">
						<ds-octicon name="x"></ds-octicon>
					</button>
				</div>

				<div class="ds_header_tools_i">
					<div class="ds_input">
						<label>Prefix</label>
						<input type="text" v-model="prefix" />
					</div>
				</div>

				<div class="ds_header_tools_i">
					<div class="ds_input">
						<label>Suffix</label>
						<input type="text" v-model="suffix" />
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
		</div>

	</header>
</template>

<script>
export default {
	name: 'DsHeader',

	data() {
		return {
			toolsOpen: false,
		}
	},

	computed: {
		prefix: {
			get() { return this.$store.state.prefix; },
			set(value) { this.$store.commit('unitUpdate', { unit: 'prefix', value }) },
		},
		suffix: {
			get() { return this.$store.state.suffix; },
			set(value) { this.$store.commit('unitUpdate', { unit: 'suffix', value }) },
		}
	},

	methods: {
		changeFixed(val) {
			this.$store.commit('fixedIncrement', val)
		},
	}
}
</script>

<style>

</style>
