<template>
  <div class="icon-info-show">
    <div class="left">
      <img :src="iconMap[item.icon]" alt="" />
    </div>
    <div :class="['right', { 'expand': !item.noExpand }]">
      <div class="name">{{ item.name }}</div>
      <div :class="['value', { 'warning': item.error }]">
        <span v-if="item.format === 'thousands'">{{ item.value | thousands }}</span>
        <span v-else>{{ item.value }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import integratedOperation1 from '@/common/image/general-view/integrated-operation-1.png'
import integratedOperation2 from '@/common/image/general-view/integrated-operation-2.png'
import integratedOperation3 from '@/common/image/general-view/integrated-operation-3.png'
import integratedOperation4 from '@/common/image/general-view/integrated-operation-4.png'
import integratedOperation5 from '@/common/image/general-view/integrated-operation-5.png'
import integratedOperation6 from '@/common/image/general-view/integrated-operation-6.png'
import integratedOperation7 from '@/common/image/general-view/integrated-operation-7.png'
import integratedOperation8 from '@/common/image/general-view/integrated-operation-8.png'
import integratedOperation9 from '@/common/image/general-view/integrated-operation-9.png'
import integratedOperation10 from '@/common/image/general-view/integrated-operation-10.png'
import iconWuhua from '@/common/image/public-service/icon-wuhua.png'
import iconShifanjie from '@/common/image/supervision-management/icon-shifanjie.png'
import iconLianshu from '@/common/image/supervision-management/icon-lianshu.png'
import iconJieanlv from '@/common/image/supervision-management/icon-jieanlv.png'
import iconYuqishijian from '@/common/image/supervision-management/icon-yuqishijian.png'
import iconZhongdashijian from '@/common/image/supervision-management/icon-zhongdashijian.png'
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      iconMap: {
        integratedOperation1,
        integratedOperation2,
        integratedOperation3,
        integratedOperation4,
        integratedOperation5,
        integratedOperation6,
        integratedOperation7,
        integratedOperation8,
        integratedOperation9,
        integratedOperation10,
        iconWuhua,
        iconShifanjie,
        iconLianshu,
        iconJieanlv,
        iconYuqishijian,
        iconZhongdashijian
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-info-show {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left {
    width: 44px;
    height: 44px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    position: relative;
    flex: 1;
    line-height: 23px;
    margin-left: 16px;
    .name {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #3a9eff;
    }
    .value {
      font-size: 16px;
      font-family: Michroma, Michroma-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      &.warning {
        color: #ff4f5c;
      }
      .unit {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        margin-left: 5px;
      }
    }
    &.expand {
      margin-left: 22px;
    }
    &.expand::before {
      position: absolute;
      left: -10px;
      top: 8px;
      content: '';
      border: 4px solid transparent;
      border-left-color: #0dc6ff;
    }
  }
}
</style>