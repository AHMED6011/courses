<template>
  <main>
    <div class="content">
      <div class="bg-img">
        <div class="text-content">
          <h1>دورات تعليمية متنوعة</h1>
          <h2>فرصة للتعلم والنمو.</h2>
          <RouterLink :to="{ name: 'home' }" class="btn btn-danger py-2 px-4 fs-5"
            >انضم إلينا</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row rounded-2">
        <RouterLink
          v-for="(blog, index) in blogs"
          :key="index"
          class="custom-card col-lg-4 col-md-6 col-12 my-4"
          style="text-decoration: none"
          :to="{ name: 'courseDetail', params: { id: blog.id } }"
          title="المزيد من التفاصيل"
          @click="$toUp"
        >
          <div class="card">
            <img :src="blog.image" class="img-fluid rounded-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-primary text-center fw-bold py-2 text-center">
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
    </div>
  </main>
</template>

<script>
import data from '../assets/data.json'

export default {
  name: 'CoursesSection',
  data() {
    return {
      blogs: null,
      heroHeader: 'دورات تعليمية متنوعة',
      heroFirstP: 'فرصة للتعلم والنمو.',
      heroButtonP: 'انضم إلينا',
      content: '',
      img: '',
      heroLastP: ''
    }
  },
  mounted() {
    this.blogs = data.data
  }
}
</script>

<style lang="scss" scoped>
.bg-img {
  background-image: url('../assets/images/hero.jpg');
  background-position: 100% 100%;
  background-size: cover;
  min-height: 77vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & .text-content {
    text-align: center;
    & h1,
    & h2 {
      color: white;
      text-shadow: 10px 10px 5px black;
    }

    & h1 {
      padding-bottom: 35px;
      font-size: 60px;
      font-weight: bold;
    }

    & h2 {
      padding: 20px 0 40px;
      font-weight: bold;
    }

    & a:hover {
      box-shadow: 0px 10px 20px #661522;
    }
  }
}
</style>
