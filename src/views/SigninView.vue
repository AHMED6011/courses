<template>
  <div class="content">
    <div class="bg-img">
      <div class="row m-0 pe-lg-5 pe-0">
        <div class="col-lg-6 text-lg-end text-center mb-lg-0 mb-5 text-content">
          <h4 class="text-danger">أهلاً و سهلاً بك</h4>
          <h1>سجل الدخول إلى حسابك</h1>
          <p>
            في حال كنت تملك حساب لدينا، قم بإدخال بريدك الالكتروني و كلمة المرور الخاصة بك، و إن كنت
            مستخدم جديد أضغط على حساب جديد و املأ نموذج تسجل الدخول لأول مرة
          </p>
        </div>
        <div class="col-lg-6 login-inputs">
          <div class="register rounded">
            <form class="bg-light p-3 rounded">
              <div v-if="cookies.get('myCookie')" class="parent-input">
                <i class="fa-solid fa-user main_text"></i>
                <input
                  type="email"
                  :placeholder="userInfo.username ? userInfo.username : 'أسم المستخدم'"
                  v-model="username"
                />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-envelope main_text"></i>
                <input
                  type="email"
                  :placeholder="userInfo.email ? userInfo.email : 'البريد الالكتروني'"
                  v-model="email"
                />
              </div>
              <div class="parent-input">
                <i class="fa-solid fa-eye main_text"></i>
                <input type="password" placeholder="كلمه السر" v-model="password" />
              </div>
              <button
                v-if="!cookies.get('myCookie')"
                class="btn btn-danger w-100"
                @click.prevent="signIn()"
                @click="$toUp"
              >
                تسجيل الدخول
              </button>
              <button
                v-else
                class="btn btn-danger ms-lg-4 ms-0 w-25"
                @click.prevent="updateUserInfo()"
              >
                تعديل
              </button>
              <button
                v-if="cookies.get('myCookie')"
                class="btn btn-danger w-50 me-5"
                @click="logOut()"
              >
                تسجيل خروج
              </button>
            </form>
            <div class="change">
              <RouterLink class="main_text" :to="{ name: 'signup' }">حساب جديد</RouterLink>
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
      email: '',
      password: '',
      username: '',
      userInfo: [],
      cookies: useCookies().cookies
    }
  },
  methods: {
    async signIn() {
      const credentials = {
        identifier: this.email,
        password: this.password
      }
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BASE_URL}/api/auth/local`,
          credentials,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        console.log(response)
        if (response.status === 200 && response.data.jwt) {
          this.cookies.set('myCookie', response.data.jwt, { expires: new Date(0) })
          swal('Great!', 'You Have Registered Successfully', 'success')
          this.$router.push('/')
        }
      } catch (error) {
        swal('Something Went Wrong', 'Please try again later', 'error')
      }
    },
    async getUserInfo() {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${this.cookies.get('myCookie')}`
        }
      })
      this.userInfo = response.data
      console.log(this.userInfo)
    },
    async updateUserInfo() {
      const userData = {}
      if (this.username) {
        userData.username = this.username
      }
      if (this.email) {
        userData.email = this.email
      }
      if (this.password) {
        userData.password = this.password
      }
      const response = await axios.put(
        `${import.meta.env.VITE_APP_BASE_URL}/api/users/${this.userInfo.id}`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status) {
        swal('Successfully', 'Your Info Have Updated', 'success')
        location.reload()
      } else {
        swal('Error', 'Something Went Wrong', 'error')
      }
    },
    async logOut() {
      this.cookies.set('myCookie', '')
      this.$router.push('/signup')
    }
  },
  created() {
    if (this.cookies.get('myCookie')) {
      this.getUserInfo()
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
