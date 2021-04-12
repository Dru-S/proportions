<template>
	<i class="ds_sprite">
		<svg role="img" v-bind:viewBox="viewBox"><use v-bind:xlink:href="`/icons.svg#${id}`"/></svg>
	</i>
</template>

<script>
export default {
	name: 'DsSprite',
	props: {
		id: String,
		viewBox: { default: '0 0 80 80', type: String },
	}
}
</script>
