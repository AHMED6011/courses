<template>
  <main>
    <div
      class="signup mb-5 rounded d-flex align-items-lg-end align-items-start justify-content-center justify-content-lg-start"
    >
      <div class="title justify-content-center justify-content-lg-end text-center text-lg-end">
        <p>لنبقى على تواصل</p>
        <h4 class="text-danger">اتصلوا بنا</h4>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-12 d-flex d-lg-none">
          <div class="parent-form">
            <form class="form-part">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="الاسم الأول" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="الاسم الثاني" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="البريد الالكتروني" />
              </div>
              <div class="mb-3">
                <input
                  type="phone"
                  dir="ltr"
                  class="form-control text-end"
                  placeholder="0555 555 55 55"
                />
              </div>
              <div class="mb-3">
                <textarea placeholder="الرسالة"></textarea>
              </div>
              <button class="btn btn-danger fs-5">ارسل</button>
            </form>
          </div>
        </div>
        <div class="col-lg-5 col-12">
          <div class="text-part p-3 rounded">
            <div class="item">
              <div class="item-text">
                <p>البريد الالكتروني</p>
                <p>info@example.com</p>
              </div>
              <div class="bg-danger primary_bg">
                <i class="fa-solid fa-envelope primary_bg"></i>
              </div>
            </div>
            <div class="item">
              <div class="item-text">
                <p>اتصال هاتفي</p>
                <p>0555 555 55 55</p>
              </div>
              <div class="bg-danger primary_bg">
                <i class="fa-solid fa-phone primary_bg"></i>
              </div>
            </div>
            <div class="item">
              <div class="item-text">
                <p>واتس أب</p>
                <p>+90 555 555 55 55</p>
              </div>
              <div class="bg-danger primary_bg">
                <i class="fa-brands fa-whatsapp primary_bg"></i>
              </div>
            </div>
            <div class="item">
              <div class="item-text">
                <p>العنوان</p>
                <p>سفير بارك, اسينيورت, اسطنبول</p>
              </div>
              <div class="bg-danger primary_bg">
                <i class="fa-solid fa-location-dot primary_bg"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 d-none d-lg-flex">
          <div class="parent-form">
            <form method="post" class="form-part">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="الاسم الأول" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="الاسم الثاني" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="البريد الالكتروني" />
              </div>
              <div class="mb-3">
                <input
                  type="phone"
                  dir="ltr"
                  class="form-control text-end"
                  placeholder="0555 555 55 55"
                />
              </div>
              <div class="mb-3">
                <textarea placeholder="الرسالة"></textarea>
              </div>
              <button class="btn btn-danger fs-5">
                <a
                  class="link-offset-2 link-underline link-underline-opacity-0 text-light"
                  href="mailto:your@email.com?subject=Contact%20Form%20Submission&body=Email:%20"
                  >ارسل</a
                >
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.signup {
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

.text-part {
  box-shadow: 0 0 10px 2px #ccc;

  .item {
    display: flex;
    justify-content: start;
    flex-direction: row-reverse;
    padding: 10px;
    .item-text {
      margin: 0 30px;
      p {
        margin: 0;
      }
      p:first-of-type {
        font-weight: bold;
      }
    }
    .primary_bg {
      width: 60px;
      height: 60px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      font-size: 30px;
    }
  }
}

.parent-form {
  transform: translateY(-150px);
  background-color: #f9f9f9;
  width: 100%;
  border-radius: 15px;
  border: 10px solid white;
  padding: 50px;

  & .form-part {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & input,
    textarea {
      width: 100%;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      font-size: 20px;
      border-color: #ccc;
    }
    button {
      border: none;
      padding: 10px;
      width: 100px;
      border-radius: 5px;
    }
  }
}
@media (max-width: 992px) {
  .title {
    padding-right: 0 !important;
    padding-top: 5px;

    & p {
      font-size: 25px !important;
    }

    & h4 {
      font-size: 55px !important;
    }
  }

  .text-part {
    transform: translateY(-100px);
  }
}

@media (max-width: 767px) {
  .title {
    padding-right: 0 !important;
    padding-top: 30px;

    & p {
      font-size: 17px !important;
    }

    & h4 {
      font-size: 35px !important;
    }
  }
}
</style>
