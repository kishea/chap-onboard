<template>
  <div class="hello">
    <a class="py-5 px-4 rounded-r-full fixed bg-red-600" href="/">
      <!-- <span class="text-white text-xs">UGX</span> -->
      <span class="font-bold text-2xl tracking-tight text-center text-white"
        >BACK</span
      >
    </a>
    <div class="flex justify-center mb-32">
      <div class="lg:w-216 md:w-156 w-108 pb-3">
        <div class="flex justify-center items-start">
          <img class="w-24 py-8 md:w-32" src="logo.png" />
        </div>
        <h2 class="font-bold text-2.5xl tracking-tight text-center">
          Join <span class="text-red-700">Chap Chap</span> today <br /><span
            class="text-5xl"
            >&#128512;</span
          >
        </h2>
        <div class="w-full flex justify-center">
          <!-- <input
            type="text"
            maxlength="6"
            minlength="6"
            v-model="check_otp"
            class="
              md:w-108
              lg:w-108
              px-16
              py-3
              border
              mt-6
              bg-red-800
              text-center text-white text-lg
              font-bold
              tracking-widest
              hover:bg-opacity-75
              transform
              hover:scale-105
              focus:scale-100
              focus:bg-red-900
              focus:text-opacity-75
              focus:bg-opacity-100
            "
          /> -->
        </div>

        <hr class="mt-8 mb-6 w-84 mx-auto border-gray-400" />

        <div class="flex-col justify-center w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
          <div class="flex-grow mt-4">
            <label
              for="email"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >What's the OTP sent to your phone number?</label
            ><br />
            <input
              class="
                w-full
                py-1
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-2xl
                focus:outline-none focus:border-gray-900
              "
              type="tel"
              required
              placeholder="Enter OTP"
              v-model="otp"
              :change="check_otp"
              maxlength="6"
              minlength="6"
            />
          </div>

          <button
            class="
              mt-4
              w-full
              p-3
              uppercase
              text-sm
              font-bold
              text-white
              bg-red-600
              rounded
              tracking-widest
              hover:bg-red-500
              transform
              hover:scale-105
              focus:scale-100
              focus:bg-red-800
              focus:text-opacity-75
              focus:bg-opacity-100
              outline-none
            "
            @click="submit"
            type="submit"
          >
            OKAY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleAlert from "vue-simple-alert";
import axios from "axios";

var otp = "";
var valid_otp = false;

export default {
  name: "Otp",
  data() {
    return {
      valid_otp,
      otp,
    };
  },
  methods: {
    check_otp() {
      if (localStorage.getItem("OTP") == this.otp) {
        valid_otp = true;
        this.submit();
      }
    },
    async submit() {
      if (this.otp.length == 6) {
        VueSimpleAlert.alert("Checking OTP ..", "", "error");
        this.submiting();
      }
    },
    async submiting() {
      try {
        const requestOptions = {
          phone_number: localStorage.getItem("phone_number"),
          otp: localStorage.getItem("OTP"),
        };
        if (valid_otp) {
          axios
            .post(
              "https://apis.chapchap.co:8090/api/v1/complete-signup",
              requestOptions
            )
            .then((response) => {
              // console.debug(response);
              var data = response.data.data;
              if (data.ok) {
                VueSimpleAlert.confirm(
                  "OTP VERIFIED, PLEASE CONFIRM PAYMENT TO CREATE YOUR ACCOUNT",
                  "",
                  "info"
                ).then((resp) => {
                  console.log(resp);
                  this.$router.push("/welcome");
                });
              } else {
                VueSimpleAlert.alert(data.message, "", "error");
              }
            });
          // this.$router.push("/welcome");
        }
      } catch (error) {
        console.log(error);
        this.$router.push("/");
      }
    },
  },
};
</script>
