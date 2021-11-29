<template>
  <div class="hello">
    <div class="flex justify-center mb-32">
      <div class="lg:w-216 md:w-156 w-108 pb-3">
        <div class="flex justify-center items-start">
          <img class="w-24 py-8 md:w-32" src="logo.png" />
        </div>
        <h2 class="font-bold text-2.5xl tracking-tight text-center">Oops!</h2>

        <hr class="mt-8 mb-6 w-84 mx-auto border-gray-400" />
        <form action="">
          <h3 class="text-center font-bold tracking-wide mt-0">
            YOU HAVE NO SPONSOR CODE
          </h3>
          <div
            class="
              text-center
              font-bold
              mt-5
              text-red-600
              flex-col
              justify-center
              w-11/12
              md:w-4/6
              lg:w-3/6
              mx-auto
            "
          >
            <a
              href="mailto:support@chapchap.co?subject=NO SPONSOR CODE&body=I have no sponsor code&bcc=mkishea12@gmail.com"
            >
              Get sponsor code
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSimpleAlert from "vue-simple-alert";
// import axios from 'axios'
// import router from '../router'

export default {
  name: "NoCode"
};
</script>
