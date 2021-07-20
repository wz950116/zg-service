<template>
  <div :class="['common-list', size]">
    <h1>{{ title }}</h1>
    <div v-if="size === 'small'" class="more">更多<span>></span></div>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" class="list-item">
        <div class="content">
          <span v-if="size === 'small'" class="symbol"></span>
          <span class="name">{{ item.name }}</span>
          <span v-if="size === 'large'" class="value">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'large'
    },
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/mixin.scss';
.common-list {
  padding: 20px 0;
  .list {
    width: calc(100% - 10px);
    margin: 0 auto;
    .list-item {
      display: flex;
      width: 100%;
      color: #ffffff;
      cursor: pointer;
      .content {
        display: flex;
        width: calc(100% - 72px);
        margin: 0 auto;
      }
    }
  }
  &.large {
    width: 460px;
    height: 934px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;
    .list {
      .list-item {
        line-height: 44px;
        .content {
          border-bottom: 1px solid rgba(120, 173, 255, 0.18);
          span {
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #ffffff;
          }
          .name {
            width: 80%;
            @include textEllipsis();
          }
          .value {
            flex: 1;
            font-size: 16px;
            font-family: Michroma, Michroma-Regular;
            font-weight: 400;
            text-align: right;
          }
        }
        &:hover {
          background: url('../../common/image/public/select-row.png') no-repeat center;
          background-size: cover;
          .name {
            font-weight: 500;
            color: #0dc6ff;
          }
        }
      }
    }
  }
  &.small {
    position: relative;
    width: 460px;
    height: 462px;
    background: url('../../common/image/public/bg-border_2.png') no-repeat center;
    background-size: cover;
    .more {
      position: absolute;
      right: 24px;
      top: 33px;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #0dc6ff;
      cursor: pointer;
      span {
        display: inline-block;
        vertical-align: top;
        margin-left: 4px;
        margin-top: -2px;
      }
    }
    .list {
      .list-item {
        line-height: 42px;
        .content {
          span {
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.80);
          }
          .symbol {
            display: inline-block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: rgba(170, 176, 187, 0.50);
            vertical-align: top;
            margin-right: 12px;
            margin-top: 17px;
          }
          .name {
            width: 100%;
            @include textEllipsis();
          }
        }
      }
    }
  }
  h1 {
    margin-left: 24px;
    margin-bottom: 20px;
    background: linear-gradient(180deg, #d8f4fc 20%, #25a4ff 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-family: Fontquan, Fontquan-Regular;
    font-weight: 400;
    color: #44caff;
    line-height: 36px;
    letter-spacing: 3px;
    text-shadow: 0px 0px 20px rgba(0, 152, 255, 0.8);
  }
}
</style>