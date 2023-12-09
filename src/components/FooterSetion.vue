<template>
  <div class="footer bg-white p-3">
    <div class="row">
      <div class="col-md-6 social-media">
        <a href="#https://www.facebook.com/AHMED_A_A_Amedia" target="_blank" class="facebook"
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a href="https://www.instagram.com/AHMED_A_A_Amedia/" target="_blank" class="instagram"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://wa.me/05343303111" target="_blank" class="whatsapp"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>
      </div>
      <div class="col-md-6">
        <p>مورلاينز أكاديمي© كل الحقوق محفوظة لمجموعة دوبلاس المحدودة</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style lang="scss" scoped>
.footer {
  & .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    & a {
      color: black;
      border: 1px solid black;
      padding: 5px 10px;
      font-size: 22px;
    }
  }

  & p {
    font-size: 20px;
  }
}

@media (max-width: 767px) {
  .social-media {
    margin-bottom: 30px;

    & a {
      font-size: 20px;
    }
  }

  p {
    text-align: center;
    font-size: 17px;
  }
}
</style>
