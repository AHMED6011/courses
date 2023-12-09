<template>
  <main class="content">
    <div class="bg-img">
      <div class="container">
        <div class="row overflow-hidden">
          <div class="col-lg-6 d-none d-lg-flex">
            <div v-show="bool" class="img-parent d-flex align-items-end">
              <img
                src="https://www.duplusacademy.com/wp-content/uploads/2020/11/christian-buehner-DItYlc26zVI-unsplash-1.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-lg-6 d-flex text-center justify-content-center">
            <div class="custom-content">
              <p class="text-danger fw-bold pt-5 fs-5">كورسات أونلاين مباشرة و جلسات مسجلة</p>
              <h1 class="text-light hero-h1">تعلم من أصحاب الخبرة</h1>
              <p class="text-light fw-bold">
                هل تعلم أن التعليم في المدارس يمكن أن يجلب لك وظيفة، أما التعليم الذاتي يمكن أن يجلب
                لك عقلاً. التعلم عبارة عن جواز سفر لزيارة المستقبل، لأن الغد مشرق لأولئك الذين
                يستعدون له اليوم
              </p>
              <div class="btn bg-danger w-50 mt-4 px-1 py-2 mx-auto">
                <a class="nav-link text-light text-first fw-bold fs-5" href="#ClassOfCourses"
                  >تصنيف الدورات</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="info-section mt-5">
      <div class="container-lg">
        <div class="row bg-white mt-5">
          <div class="col-md-4">
            <div class="card">
              <div class="row g-0 custom-child-card">
                <div class="col-md-2">
                  <img
                    src="../assets/images/infinity.png"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="fw-bold">دخول غير محدود</h5>
                    <p>
                      حساب مضمون مدى الحياة لمشاهدة و تحميل الدروس المسجلة و المواد الخاصة بالدورة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="row g-0 custom-child-card">
                <div class="col-md-2">
                  <img
                    src="../assets/images/student.png"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="fw-bold">مدرسين خبراء</h5>
                    <p>مدرسين مختصين ذوي تجارب و خبرات علمية و عملية كبيرة كلٍ حسب مجاله</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="row g-0 custom-child-card">
                <div class="col-md-2">
                  <img src="../assets/images/video.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="fw-bold">دورات اونلاين</h5>
                    <p>
                      كورسات بث مباشر و تفاعلية بين المدرسين و المتدربين لتصل المعلومة من دون أن
                      يحدها مكان ثابت
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mx-5 mb-5" />
      </div>
    </section>
    <CoursesSection />
    <ClassOfCourses id="ClassOfCourses" />
    <StatisticsSection />
    <AboutSection id="about-us" />
    <section class="singup-section" id="singup-section">
      <hr />
      <div class="login pt-5">
        <h3 class="p-0 px-md-5">ابدأوا في اكتساب معرفة و خبرة! جديدة معنا</h3>
        <p>
          إن ملء طلب التسجل مجاني، هو فقط يقربك خطوة من التعرف علينا و يمدنا بفرصة أن نقدم لك خدمة
          معرفية مميزة تبقى و تستمر
        </p>
        <RouterLink class="btn my-5 btn-danger fs-4" :to="{ name: 'signup' }"
          >طلب التسجيل الالكتروني</RouterLink
        >
      </div>
    </section>
    <SignupSection />
  </main>
</template>

<script>
import ClassOfCourses from '../components/ClassOfCourses.vue'
import CoursesSection from '../components/CoursesSection.vue'
import StatisticsSection from '../components/Statistics/StatisticsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SignupSection from '../components/SignupSection.vue'

export default {
  components: { CoursesSection, ClassOfCourses, StatisticsSection, AboutSection, SignupSection },
  data() {
    return {
      blogs: null,
      heroHeader: 'دورات تعليمية متنوعة',
      heroFirstP: 'فرصة للتعلم والنمو.',
      heroButtonP: 'انضم إلينا',
      content: '',
      heroLastP: '',
      img: '',
      bool: true
    }
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
}
.custom-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  & h1 {
    font-size: 85px;
    font-weight: 700;
    line-height: 1.5em;
  }
}

.info-section {
  .card {
    border: 0;

    & .custom-child-card {
      display: flex;
      justify-content: center;
      align-items: center;

      & .card-body {
        font-size: 14px;
        padding-bottom: 0;
      }
    }
  }
}

.login {
  text-align: center;

  & h3 {
    font-size: 70px;
    font-weight: bold;
    line-height: 1.7;
    color: #040037;
  }

  & p {
    font-size: 23px;
    width: 50%;
    margin: auto;
  }
}

@media (max-width: 767px) {
  .bg-img {
    border-radius: 0;
    .hero-h1 {
      font-size: 45px !important;
    }
  }

  .bg-white > div {
    background-color: #eeeeee;
  }

  .card {
    margin: 10px;
    border-bottom: 1px solid #3b3b3b !important;
    .custom-child-card {
      & > div {
        text-align: center;
      }
    }
  }

  .login {
    & h3 {
      font-size: 40px;
      font-weight: bold;
      line-height: 1.4;
    }

    & p {
      font-size: 20px;
      width: 100%;
    }
  }
}
</style>
