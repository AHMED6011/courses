<template>
  <header class="content pt-md-2 pt-0">
    <nav class="navbar w-100 nav-img border-bottom navbar-expand-lg">
      <div class="container">
        <button
          class="navbar-toggler border-0 custom-toggler"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <i class="fa-solid fa-bars text-danger fa-xl"></i>
        </button>

        <div class="signin me-5 me-lg-0">
          <button class="btn d-md-flex d-none bg-danger rounded-1 py-2 px-4 me-5 me-lg-0">
            <RouterLink class="nav-link text-light text-first fw-bold" :to="{ name: 'signin' }">
              حسابي
              <i class="far fa-user-circle"></i>
            </RouterLink>
          </button>
          <button class="btn-signin d-md-none bg-secondary me-4 me-md-0">
            <RouterLink class="nav-link text-light" :to="{ name: 'signin' }">
              <i class="far fa-user-circle"></i>
            </RouterLink>
          </button>
        </div>

        <div class="logo d-lg-none d-flex">
          <RouterLink class="navbar-brand fs-2" :to="{ name: 'home' }">
            <span class="text-danger">AHMED</span>
            <span class="text-light">_A_A_A</span>
          </RouterLink>
        </div>

        <div
          class="collapse navbar-collapse justify-content-around d-none d-lg-flex"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav text-center text-lg-end p-0 ps-md-5">
            <li class="nav-item position-relative">
              <button
                class="btn btn-transparent text-white nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الدورات
              </button>
              <ul class="dropdown-menu text-center">
                <li>
                  <RouterLink class="dropdown-item fs-5" to="/courses"
                    >دبلوم تسويق الكتروني</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item fs-5" to="/courses"
                    >كورس جرافيك ديزاين</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item fs-5" to="/courses">دورات المحاسبه</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item fs-5" to="/courses"
                    >كورس مونتاج Adobe Premiere</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item fs-5" to="/courses"
                    >دورة كتابة المحتوى الاحترافي</RouterLink
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link text-white" :to="{ name: 'courses' }">المدونة</RouterLink>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="#about-us">من نحن</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#singup-section">اتصلوا بنا</a>
            </li>
          </ul>
          <div class="logo d-none d-md-flex">
            <RouterLink class="navbar-brand fs-2" :to="{ name: 'home' }">
              <span class="text-danger">AHMED</span>
              <span class="text-light">_A_A_A</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <div class="mobel-size d-flex d-lg-none">
      <div
        class="offcanvas offcanvas-end bg-dark"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header me-4 mt-4">
          <button
            type="button"
            class="btn-close bg-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <div class="logo">
            <RouterLink class="navbar-brand fs-2" :to="{ name: 'home' }">
              <span class="text-danger">AHMED</span>
              <span class="text-light">_A_A_A</span>
            </RouterLink>
          </div>
        </div>
        <div class="offcanvas-body">
          <div class="dropdown mt-3">
            <ul class="navbar-nav gap-4 text-lg-end p-0 ps-md-5">
              <li class="nav-item">
                <RouterLink class="nav-link text-white" :to="{ name: 'courses' }"
                  >المدونة</RouterLink
                >
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="#about-us">من نحن</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#singup-section">اتصلوا بنا</a>
              </li>
              <li class="nav-item position-relative">
                <button
                  class="btn btn-transparent text-white nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الدورات
                </button>
                <ul
                  class="custom-dropdown-menu dropdown-menu gap-2 bg-transparent border-0 text-end"
                >
                  <li>
                    <RouterLink class="dropdown-item fs-5" to="/courses"
                      >دبلوم تسويق الكتروني</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item fs-5" to="/courses"
                      >كورس جرافيك ديزاين</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item fs-5" to="/courses">دورات المحاسبه</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item fs-5" to="/courses"
                      >كورس مونتاج Adobe Premiere</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item fs-5" to="/courses"
                      >دورة كتابة المحتوى الاحترافي</RouterLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'NavBar',
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
nav {
  background: linear-gradient(119deg, #370578 60%, #7f248b 100%);
  border-radius: 20px 20px 0 0;

  .btn-signin {
    border: 0;
    padding: 8px;
    border-radius: 50%;
    font-size: 20px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.custom-toggler {
  &:focus {
    box-shadow: none;
  }
}

.navbar-nav li {
  padding: 0 10px;
  margin: 0 10px;
  font-size: 17px;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  transition: 0.3s;

  &:hover {
    border-bottom: 3px solid #dc3545;
    color: #3e001f;
  }

  & .router-link-exact-active {
    color: #3e001f;
  }
}

.custom-dropdown-menu .dropdown-item {
  color: white;
  &:hover {
    background-color: transparent;
  }
}

@media (max-width: 767px) {
  nav {
    background: linear-gradient(177deg, #370578 41%, #7f248b 100%);
    border-radius: 0;
  }
}

@media (max-width: 567px) {
  .offcanvas {
    width: 85%;
  }
}
</style>
