<template>
  <div class="content">
    <div class="container">
      <div class="text-center">
        <h1 class="m-0 text-danger" v-if="visibility">
          <CountUp :startVal="0" class="m-0 text-danger" :end-val="num" :duration="4"></CountUp>
        </h1>
        <h1 class="m-0 text-danger" v-else>0</h1>
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3'
export default {
  components: { CountUp },
  name: 'StatisticsBlock',
  props: {
    num: Number,
    title: String
  },
  data() {
    return {
      visibility: false
    }
  },
  methods: {
    Scroll() {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 2300) {
          this.visibility = true
        }
      })
    }
  },
  created() {
    this.Scroll()
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  & h1 {
    font-size: 80px;
    font-weight: bold;
  }

  & p {
    font-size: 22px;
    padding-top: 15px;
    font-weight: bold;
  }
}

@media (max-width: 767px) {
  .text-center {
    & h1 {
      font-size: 45px !important;
      font-weight: bold !important;
    }

    & p {
      font-size: 17px !important;
      padding-top: 10px !important;
      font-weight: bold !important;
    }
  }
}
</style>
