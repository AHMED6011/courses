<template>
  <div class="container p-sm-3 p-0 my-5 border-bottom border-secondary">
    <div class="boxes">
      <StatisticsBlock :num="Numbers[0]" :title="title[0]" />

      <StatisticsBlock :num="Numbers[1]" :title="title[1]" class="box-2 px-5 py-3" />

      <StatisticsBlock :num="Numbers[2]" :title="title[2]" />
    </div>
  </div>
</template>

<script>
import StatisticsBlock from './StatisticsBlock.vue'

export default {
  name: 'StatisticsPart',
  components: {
    StatisticsBlock
  },
  data() {
    return {
      Numbers: [10, 15, 246],
      title: ['الدورات المنجزة', 'المدرسين الخبراء', 'الطلاب المسجلين']
    }
  }
}
</script>

<style lang="scss" scoped>
.boxes {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & .box-2 {
    border-right: 1px solid #333;
    border-left: 1px solid #333;
    margin: 10px 0;
  }
}

@media (max-width: 767px) {
  .boxes {
    flex-direction: column;

    & .box-2 {
      border-right: 0px solid #333;
      border-left: 0px solid #333;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
    }
  }
}
</style>
