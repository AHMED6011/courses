<template>
  <div class="container my-5 text-center">
    <h1 class="header-title rounded">تصنيف الدورات</h1>
    <div class="row">
      <div
        v-for="blog in arrayBlogs"
        :key="blog.id"
        class="col-12 custom-card col-md-6 col-lg-4 mb-3"
      >
        <div class="card">
          <img :src="blog.image" class="img-fluid rounded-top" alt="" />
          <div class="card-body">
            <h5 class="card-title fs-4">{{ blog.title }}</h5>
          </div>
        </div>
      </div>
      <div class="row p-0 justify-content-center">
        <div class="col-md-4"></div>
        <div class="col-md-4 p-0 my-5">
          <button @click="clicked" class="btn btn-danger py-2 px-4 fs-5">
            {{ check ? showLess : showAHMEDe }}
          </button>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'

export default {
  name: 'ClassOfCourses',
  data() {
    return {
      blogs: [],
      less: 6,
      AHMEDe: 9,
      check: false,
      showAHMEDe: 'عرض المزيد',
      showLess: 'عرض أقل'
    }
  },
  methods: {
    clicked() {
      this.check = !this.check

      if (this.ckeck) {
        this.AHMEDe = 6
      } else {
        this.AHMEDe = 9
      }
    }
  },
  computed: {
    arrayBlogs() {
      return Object.values(this.blogs.slice(0, this.check ? this.AHMEDe : this.less))
    }
  },
  mounted() {
    this.blogs = data.data
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 5px 10px 5px 0px #c5c1c1;

  .card-body {
    height: auto;
  }
}
</style>
