<template>
  <div class="label-value-show">
    <div class="value">
      <span v-if="format === 'thousand'" class="number">{{ value | thousands }}</span>
      <span v-else class="number">{{ value }}</span>
      <span class="unit">{{ unit }}</span>
    </div>
    <div class="name">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/mixin.scss';
.label-value-show {
  .value {
    margin-bottom: 7px;
    @include textEllipsis();
    .number {
      font-size: 16px;
      font-family: Michroma, Michroma-Regular;
      font-weight: 400;
      text-align: right;
      color: #ffffff;
      margin-right: 4px;
    }
    .unit {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
    }
  }
  .name {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #3a9eff;
    @include textEllipsis();
  }
}
</style>