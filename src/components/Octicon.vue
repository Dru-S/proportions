<template>
	<i class="ds_octicon">
  	<svg version="1.1" role="img" v-bind:viewBox="box" v-html="path"></svg>
	</i>
</template>

<script>
import octicons from '@primer/octicons';

export default {
  name: 'DsOcticon',
  props: {
    name: {
      type: String,
      validator (val) {
        if (val) return val in octicons
        return null
      }
    },
		size: {
			type: Number,
			default: 16,
			validator (val) {
				if (val) return val == 16 || val == 24;
				return null
			}
		}
  },
  data () {
		return {}
  },
  computed: {
    icon () {
      if (this.name) return octicons[this.name]
      return null
    },
    box () {
      return this.icon.heights[this.size].options.viewBox
    },
    width () {
      return this.icon && this.icon.width || 0
    },
    height () {
      return this.icon && this.icon.height || 0
    },
		path () {
			return this.icon.heights[this.size].path
		}
  },
  mounted () {
    if (this.icon) {
      return
    }
  },
  register (data) {
    for (let name in data) {
      octicons[name] = data[name]
    }
  },
  octicons
}
</script>
