<template>
  <div class="container my-5 text-center">
    <h1 class="header-title">الدورات المميزة</h1>
    <div class="row rounded-2 my-5">
      <RouterLink
        class="custom-card col-lg-4 col-md-6 col-12 mb-3"
        v-for="blog in arrayBlogs"
        style="text-decoration: none"
        :key="blog.id"
        :to="{ name: 'courseDetail', params: { id: blog.id } }"
        title="المزيد من التفاصيل"
      >
        <div class="card">
          <img :src="blog.image" class="img-fluid rounded-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-primary text-center fw-bold fs-4 py-2 text-center">
              {{ blog.title }}
            </h5>
            <hr class="text-danger opacity-100" />
            <p class="card-text">
              {{ blog.description }}
            </p>
          </div>
        </div>
      </RouterLink>
    </div>
    <RouterLink @click="$toUp" :to="{ name: 'courses' }" class="btn mt-3 btn-danger py-2 px-3 fs-5"
      >المزيد من الدورات</RouterLink
    >
  </div>
</template>

<script>
import data from '../assets/data.json'

export default {
  name: 'CoursesSection',
  data() {
    return {
      blogs: null
    }
  },
  computed: {
    arrayBlogs() {
      if (this.blogs) {
        return Object.values(this.blogs.slice(0, 3))
      }
      return []
    }
  },
  mounted() {
    this.blogs = data.data
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .header-title {
    width: auto;
    text-align: center;
  }
}
</style>
