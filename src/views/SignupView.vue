<!-- <template>
  <div class="content">
    <div class="bg-img">
      <div class="row m-0 pe-lg-5 pe-0">
        <div class="col-lg-6 text-lg-end text-center mb-lg-0 mb-5 text-content">
          <h4 class="text-danger">أهلاً و سهلاً بك</h4>
          <h1>انشأ حساب جديد</h1>
          <p>
            لانشاء حساب جديد لأول مرة، قم بإدخال الاسم و بريدك الالكتروني و كلمة مرور خاصة بك، و في
            حال كنت تملك حساب لدينا، أضغط على زر الدخول
          </p>
        </div>
        <div class="col-lg-6 login-inputs">
          <div class="register">
            <form class="bg-light p-3 rounded" method="POST">
              <div class="parent-input">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="الاسم" v-model="userData.name" />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-envelope main_text"></i>
                <input type="email" placeholder="البريد الالكتروني" v-model="userData.email" />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-eye main_text"></i>
                <input type="password" placeholder="كلمه السر" v-model="userData.password" />
              </div>
              <button class="btn btn-danger w-100" @click.prevent="signUp" @click="$toUp">
                تسجيل الدخول
              </button>
            </form>
            <div class="change">
              <RouterLink class="main_text" :to="{ name: 'signin' }">هل لديك حساب</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../api'
import swal from 'sweetalert'

export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signUp() {
      try {
        const response = await api.signup(this.userData)
        this.name = response.data.name
        this.email = response.data.email
        this.password = response.data.password
        swal('Great!', 'You logged in Successfully', 'success')
        this.$router.push('/')
      } catch (error) {
        swal('Sometihng went Wrong', 'Verify Your Email Or Password', 'error')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-img {
  background-image: url('../assets/images/hero.jpg');
  background-position: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .text-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    & h1 {
      font-weight: bold;
      padding: 30px 0;
      color: #040037;
    }

    & p {
      color: #f8f9fa;
    }
  }

  & .login-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    & .register {
      width: 75%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 70px 30px 50px;
      background-color: #ffffff6e;
      & .parent-input {
        border: 1px solid #333;
        background-color: #f8f9fa;
        margin: 30px 0;
        border-radius: 6px;

        & input {
          background-color: transparent;
          border: 0;
          padding: 10px 0;
          padding-right: 15px;
          width: calc(100% - 30px);

          &:focus-visible {
            outline: 0 !important;
          }
        }

        & i {
          padding-right: 10px;
        }
      }

      .change {
        display: flex;
        align-content: center;
        font-size: 1rem;
        justify-content: center;
        padding: 40px;
        .main_text {
          cursor: pointer;
          text-decoration: none;
          color: #040037;
          margin: 0 10px;
          font-size: 18px;
          font-weight: bold;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .register {
    margin-bottom: 20px;
    width: 100% !important;
  }
}
</style> -->

<template>
  <div class="content">
    <div class="bg-img">
      <div class="row m-0 pe-lg-5 pe-0">
        <div class="col-lg-6 text-lg-end text-center mb-lg-0 mb-5 text-content">
          <h4 class="text-danger">أهلاً و سهلاً بك</h4>
          <h1>انشأ حساب جديد</h1>
          <p>
            لانشاء حساب جديد لأول مرة، قم بإدخال الاسم و بريدك الالكتروني و كلمة مرور خاصة بك، و في
            حال كنت تملك حساب لدينا، أضغط على زر الدخول
          </p>
        </div>
        <div class="col-lg-6 login-inputs">
          <div class="register rounded">
            <form class="bg-light p-3 rounded" method="POST">
              <div class="parent-input">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="الاسم" v-model="name" />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-envelope main_text"></i>
                <input type="email" placeholder="البريد الالكتروني" v-model="email" />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-eye main_text"></i>
                <input type="password" placeholder="كلمه السر" v-model="password" />
              </div>
              <button class="btn btn-danger w-100" @click.prevent="signUp()" @click="$toUp">
                تسجيل الدخول
              </button>
            </form>
            <div class="change">
              <RouterLink class="main_text" :to="{ name: 'signin' }">هل لديك حساب</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import { useCookies } from 'vue3-cookies'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      cookies: useCookies().cookies
    }
  },
  methods: {
    async signUp() {
      const userData = {
        email: this.email.trim(),
        password: this.password.trim(),
        username: this.name.trim()
      }
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BASE_URL}/api/auth/local/register`,
          userData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        if (response.status === 200 && response.data.jwt) {
          this.cookies.set('myCookie', response.data.jwt, { expires: new Date(0) })

          swal('Great!', 'You Have Registered Successfully', 'success')
          this.$router.push('/')
        }
      } catch (error) {
        swal('Sometihng went Wrong', 'Verify Your Email Or Password', 'error')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-img {
  background-image: url('../assets/images/hero.jpg');
  background-position: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .text-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    & h1 {
      font-weight: bold;
      padding: 30px 0;
      color: #040037;
    }

    & p {
      color: #f8f9fa;
    }
  }

  & .login-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    & .register {
      width: 75%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 70px 30px 50px;
      background-color: #ffffff6e;
      & .parent-input {
        border: 1px solid #333;
        background-color: #f8f9fa;
        margin: 30px 0;
        border-radius: 6px;

        & input {
          background-color: transparent;
          border: 0;
          padding: 10px 0;
          padding-right: 15px;
          width: calc(100% - 30px);

          &:focus-visible {
            outline: 0 !important;
          }
        }

        & i {
          padding-right: 10px;
        }
      }

      .change {
        display: flex;
        align-content: center;
        font-size: 1rem;
        justify-content: center;
        padding: 40px;
        .main_text {
          cursor: pointer;
          text-decoration: none;
          color: #040037;
          margin: 0 10px;
          font-size: 18px;
          font-weight: bold;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .register {
    margin-bottom: 20px;
    width: 100% !important;
  }
}
</style>
