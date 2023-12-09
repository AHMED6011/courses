<template>
  <div class="content">
    <div class="bg-img d-flex justify-content-center">
      <div class="card mb-3 bg-transparent border-0">
        <div class="row w-100 px-3 align-items-center justify-content-center">
          <div class="col-md-5 col-12 custom-img">
            <img :src="blogs.image" class="img-fluid" alt="" />
          </div>
          <div class="col-md-7 col-10 text-center text-md-end">
            <div class="card-body">
              <h1 class="card-title">{{ blogs.title }}</h1>
              <p class="card-text">
                {{ blogs.heroLastP }}
              </p>
              <RouterLink class="px-4 py-2 btn btn-danger fs-5" to="/signin">
                انضم إلينا
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="bg-white rounded my-4 p-4 lh-lg" v-html="blogs.content"></p>
  </div>
</template>

<script>
import data from '../assets/data.json'
export default {
  props: ['id'],
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.blogs = data.data.find((blogs) => blogs.id == this.id)
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

  & .card {
    display: flex;
    justify-content: center;
    align-items: center;

    & .card-body {
      color: white;

      & h1 {
        font-size: 55px;
      }

      & p {
        font-size: 20px;
        padding: 30px 0;
      }
    }
  }

  & .custom-img {
    padding: 0 !important;
    img {
      border: 10px solid white;
      border-radius: 20px;
    }
  }
}

@media (max-width: 767px) {
  .card-body {
    h1 {
      font-size: 35px !important;
    }

    & p {
      font-size: 18px !important;
      line-height: 1.8;
    }
  }
  .custom-img {
    padding: 0 !important;
    img {
      border: 0 !important;
      border-radius: 0 !important;
    }
  }
}
</style>
