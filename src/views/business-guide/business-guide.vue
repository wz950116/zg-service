<template>
  <div class="business-guide">
    <div class="left-content">
      <common-list title="分类" :list="sortData"></common-list>
    </div>
    <div class="right-content">
      <common-list title="法规" :list="lawData" size="small"></common-list>
      <common-list title="行政法规" :list="lawData" size="small"></common-list>
      <common-list title="住房和城乡建设部规章" :list="lawData" size="small"></common-list>
      <common-list title="住房和城乡建设部政策文件" :list="lawData" size="small"></common-list>
      <common-list title="地方性法规" :list="lawData" size="small"></common-list>
      <common-list title="标准规范" :list="lawData" size="small"></common-list>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'common-list': () => import('./common-list.vue')
  },
  data() {
    return {
      sortData: [{
        name: '法规',
        value: 13
      }, {
        name: '行政法规',
        value: 9
      }, {
        name: '住房和城乡建设部规章',
        value: 7
      }, {
        name: '住房和城乡建设部政策文件',
        value: 7
      }, {
        name: '地方性法规',
        value: 13
      }, {
        name: '标准规范',
        value: 6
      }, {
        name: '政府规章',
        value: 1
      }],
      lawData: [{
        name: '中华人民共和国建筑法(2019修正)'
      }, {
        name: '中华人民共和国城乡规划法(2019修正)'
      }, {
        name: '中华人民共和国食品安全法(2019修正)'
      }, {
        name: '中华人民共和国广告法(2019修正)'
      }, {
        name: '中华人民共和国大气污染防治法(2019修正)'
      }, {
        name: '中华人民共和国宪法(2019修正)'
      }, {
        name: '中华人民共和国政复议法(2019修正)'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.business-guide {
  display: flex;
  justify-content: space-between;
  padding: 0 30px 46px;
  margin-top: 107px;
  .left-content {
    width: 465px;
  }
  .right-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>