<template>
  <svg :class="svgClass" :style='size' aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    width: {
      type: String,
      required: ''
    },
    height: {
      type: String,
      required: ''
    }
  },
  data() {
    return {
      size: ''
    }
  },
  created() {
    this.size = `width:${this.width};height:${this.height || this.width}`
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.svg-icon
  width: 1em
  height: 1em
  vertical-align: -0.15em
  margin-right: 5px
  fill: currentColor
  overflow: hidden
</style>
