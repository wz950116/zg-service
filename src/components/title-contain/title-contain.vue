<template>
  <div class="title-contain">
    <div class="title-name">{{ titleName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titleName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='stylus' scoped>
.title-contain
  width: 436px;
  height: 32px;
  line-height: 32px;
  margin: 16px 0 7px;
  text-indent: 32px;
  font-size: 16px;
  font-family: PingFangSC, PingFangSC-Medium;
  font-weight: 500;
  color: #ffffff;
</style>