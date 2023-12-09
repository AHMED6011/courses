<template>
  <div class="about">
    <div
      class="about-us mb-5 rounded d-flex align-items-lg-end align-items-start justify-content-center justify-content-lg-start"
    >
      <div class="title justify-content-center justify-content-lg-end text-center text-lg-end">
        <p>أهدافنا و رؤيتنا</p>
        <h4 class="text-danger">من نحن؟</h4>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-12 d-flex d-lg-none">
          <div class="img-part">
            <img class="img-fluid rounded" src="../assets/images/about.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-5 col-12">
          <div class="text-part p-5 rounded">
            <h3>
              بعد العمل لسنوات طويلة مع المنظمات الغير ربحية، قررنا أن نضع مهارات فريقنا في قطاع
              التعليم عن بعد
            </h3>
            <p>
              بعد وصولنا إلى اليقين الكامل بأن الإنترنت بات الآن يحتوي على أكبر قاعدة بيانات
              للمعلومات التي تم إنشاؤها على الإطلاق خلال العقدين الماضيين والطريقة الأكثر سهولة
              للتواصل بين البشر، قررنا بأن نصل بالعلم و المعرفة لكل إنسان لديه الطموح بالتميز و رؤية
              المستقبل لكي يحجز لنفسه و لمجتمعه كرسي في عالم لا يعترف إلا بالعلم، لذلك كانت لدوراتنا
              طابعها التخصصي و العملي الذي يساعد الشباب في فتح الطريق أمامهم لآفاق العمل و لأصحاب
              العمل آفاق التميز و رفع سوية أعمالهم من الصغيرة و المتوسطة إلى الكبيرة و العالمية
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-12 d-none d-lg-flex">
          <div class="img-part">
            <img class="img-fluid rounded" src="../assets/images/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  & .about-us {
    background-image: url('../assets/images/hero.jpg');
    background-position: 100% 100%;
    background-size: cover;
    min-height: 35vh;

    & .title {
      padding-right: 50px;

      & p {
        color: #f0f8ff;
        font-size: 25px;
      }

      & h4 {
        font-size: 65px;
        font-weight: bold;
      }
    }
  }

  & .text-part {
    box-shadow: 0 0 10px 2px #ccc;

    & h3 {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .img-part {
    transform: translateY(-150px);

    & img {
      border: 5px solid white;
    }
  }
}

@media (max-width: 992px) {
  .about {
    & .title {
      padding-right: 0 !important;
      padding-top: 5px;

      & p {
        font-size: 25px !important;
      }

      & h4 {
        font-size: 55px !important;
      }
    }

    & .text-part {
      transform: translateY(-100px);
    }

    & .img-part {
      width: 100%;

      & img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 767px) {
  .about {
    & .title {
      padding-right: 0 !important;
      padding-top: 30px;

      & p {
        font-size: 17px !important;
      }

      & h4 {
        font-size: 35px !important;
      }
    }

    & .text-part {
      text-align: center;

      & h3 {
        font-size: 25px;
      }
    }
  }
}
</style>
