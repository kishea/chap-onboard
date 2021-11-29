<template>
  <div class="hello">
    <div class="py-4 px-3 rounded-r-full fixed bg-red-600">
      <span class="text-white text-xs">UGX</span>
      <span
        v-text="signup_fee"
        class="
          font-bold
          text-2.5xl
          tracking-tight
          text-center
          float-right
          text-white
        "
      ></span>
    </div>

    <div class="flex justify-center mb-32">
      <div class="lg:w-216 md:w-156 w-108 pb-3">
        <div class="flex justify-center items-start">
          <img class="w-24 py-8 md:w-32" src="logo.png" />
        </div>
        <h2 class="font-bold text-2.5xl tracking-tight text-center">
          Join ChapChap now
        </h2>
        <div class="w-full flex justify-center">
          <div
            href="#"
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
              focus:bg-red-100
              focus:text-opacity-75
              focus:bg-opacity-100
            "
          >
            SPONSOR CODE: <span v-text="sponsor_code"></span>
          </div>
        </div>

        <hr class="mt-8 mb-6 w-84 mx-auto border-gray-400" />

        <h3 class="text-center font-bold tracking-wide mt-0">
          Sign up with your phone number
        </h3>
        <div class="flex-col justify-center w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
          <div class="flex-grow mt-4">
            <label
              for="email"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >What's your phone number?</label
            ><br />

            <div class="col-span-2">
              <vue-phone-number-input
                default-country-code="UG"
                class="
                  w-full
                  py-4
                  px-2
                  border border-gray-500
                  placeholder-gray-600
                  rounded
                  text-xs
                  focus:outline-none focus:border-gray-900
                "
                type="tel"
                required
                placeholder="Enter your phone number. (AIRTEL or MTN)"
                v-model="phone_number"
              />
            </div>

            <!-- <input
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              v-model="phone_number"
              mode="international"
            /> -->
          </div>

          <div class="flex-grow mt-4">
            <label
              for="email"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >What's your email?</label
            ><br />
            <input
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              type="email"
              required
              placeholder="Enter your email."
              v-model="email"
            />
          </div>

          <div class="flex-grow mt-4">
            <label
              for="email_confirmation"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >Confirm your email</label
            ><br />
            <input
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              type="email"
              required
              placeholder="Enter your email again."
              v-model="email_again"
            />
          </div>

          <div class="flex-grow mt-4">
            <label
              for="email_confirmation"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >ID Number</label
            ><br />
            <input
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              type="text"
              required
              placeholder="Your id number, and id type"
              v-model="nin"
            />
          </div>

          <div class="flex-grow mt-4">
            <label
              for="password"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >Create a password </label
            ><br />
            <input
              required
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              type="password"
              v-model="password"
              placeholder="Create a password."
            />
          </div>

          <div class="flex-grow mt-4">
            <label
              for="profile_name"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >What should we call you?</label
            ><br />
            <input
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              type="text"
              required
              placeholder="Enter a full name or business name"
              v-model="user_name"
            />
          </div>

          <span class="block mt-2 text-xs font-semibold tracking-wide"
            >This appears on your agent account.</span
          >
          <div class="flex-grow mt-4">
            <label
              for="password"
              class="inline-block font-extrabold text-xs my-2 tracking-wider"
              >Business location </label
            ><br />
            <input
              required
              class="
                w-full
                py-4
                px-2
                border border-gray-500
                placeholder-gray-600
                rounded
                text-xs
                focus:outline-none focus:border-gray-900
              "
              v-model="location"
              type="text"
              placeholder="Business location"
            />
          </div>
          <div class="flex-grow mt-4">
            <span
              class="
                inline-block
                font-extrabold
                text-xs
                mt-2
                mb-1
                tracking-wider
              "
              >What's your date of birth?</span
            >
            <div class="grid grid-cols-4 gap-4 text-xs font-semibold">
              <div class="px-2">
                <label class="block tracking-wide" for="day">Day</label>
                <input
                  v-model="date_of_birth_d"
                  class="
                    w-full
                    py-4
                    px-2
                    border border-gray-500
                    placeholder-gray-600
                    rounded
                    text-xs
                    focus:outline-none focus:border-gray-900
                  "
                  type="number"
                  placeholder="DD"
                  minlength="2"
                  maxlength="2"
                  max="31"
                />
              </div>
              <div class="col-span-2">
                <label class="block" for="month">Month</label>
                <div
                  class="
                    flex
                    items-start
                    border border-gray-500
                    focus:outline-none focus:border-gray-900
                    rounded
                  "
                >
                  <select
                    v-model="date_of_birth_m"
                    placeholder="Month"
                    id=""
                    class="
                      rounded
                      py-4
                      px-2
                      pr-10
                      block
                      tracking-wide
                      w-full
                      h-full
                      place-self-auto
                      outline-none
                      border-none
                      bg-white
                      appearance-none
                    "
                  >
                    <option disabled value>Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <img src="down-arrow.svg" class="w-4 mx-auto my-auto pr-1" />
                </div>
              </div>
              <div class="">
                <label class="block tracking-wide" for="year">Year</label>
                <input
                  v-model="date_of_birth_y"
                  class="
                    w-full
                    py-4
                    px-2
                    border border-gray-500
                    placeholder-gray-600
                    rounded
                    text-xs
                    focus:outline-none focus:border-gray-900
                  "
                  type="number"
                  placeholder="YYYY"
                  minlength="4"
                  maxlength="4"
                  :max="max_year"
                />
              </div>
            </div>
          </div>
          <div class="flex-col mt-4">
            <span class="block font-extrabold text-xs my-2 tracking-wider"
              >What's your gender?</span
            >
            <div class="flex">
              <label for="gender" class="flex">
                <input
                  type="radio"
                  v-model="gender"
                  value="male"
                  class="my-auto hover:color-red-700"
                />
                <span
                  class="
                    text-xs
                    my-auto
                    ml-3
                    mr-8
                    text-center
                    font-semibold
                    tracking-wide
                  "
                  >Male</span
                >
              </label>
              <label for="gender" class="flex">
                <input
                  type="radio"
                  v-model="gender"
                  value="female"
                  class="my-auto border-solid border-red-900"
                />
                <span
                  class="
                    text-xs
                    my-auto
                    ml-3
                    mr-8
                    text-center
                    font-semibold
                    tracking-wide
                  "
                  >Female</span
                >
              </label>
              <label for="gender-non-binary" class="flex">
                <input
                  type="radio"
                  v-model="gender"
                  value="none"
                  class="my-auto"
                />
                <span
                  class="
                    text-xs
                    my-auto
                    ml-3
                    mr-8
                    text-center
                    font-semibold
                    tracking-wide
                  "
                  >Non-binary</span
                >
              </label>
            </div>
            <div class="flex mt-6">
              <label
                for="consent-for-advertisement"
                class="flex my-auto mx-auto"
              >
                <input
                  type="checkbox"
                  class="mt-3"
                  v-model="share_registration_date"
                />
                <span
                  class="
                    text-xs
                    mt-2
                    ml-3
                    mr-8
                    font-medium
                    leading-relaxed
                    tracking-wide
                  "
                >
                  Share my registration data with Chap Chap Africa's content
                  providers for marketing purposes.</span
                >
              </label>
            </div>
            <div class="text-xs tracking-wide font-medium">
              <span class="inline-block text-center mb-3"
                >By clicking on Sign up, you agree to Chap Chap Africa's
                <a href="" class="text-red-500 underline">
                  Terms and Conditions of Use.</a
                ></span
              >
              <span class="inline-block mx-2 text-center mb-3"
                >To learn more about how Chap Chap Africa collects, uses, shares
                and protects your personal data please read Chap Chap Africa's
                <a href="#" class="text-red-500 underline">
                  Privacy Policy.</a
                ></span
              >
              <button
                class="
                  w-full
                  p-3
                  uppercase
                  text-sm
                  font-bold
                  text-white
                  bg-red-600
                  rounded-full
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
                SIGN UP
              </button>
              <div class="text-center text-sm my-6">
                Have an account?
                <a href="#" class="text-red-500 underline">Login</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleAlert from "vue-simple-alert";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";
import router from "../router";

let max_year = new Date().getFullYear() - 18;

let signup_fee = 22000;
let sponsor_code = "";
let email = "";
let email_again = "";
let password = "";
let password_again = "";
let date_of_birth_y = max_year;
let date_of_birth_m = "01";
let date_of_birth_d = "01";
let gender = "";
let location = "";
let nin = "";
let phone_number = "";
let user_name = "";
let share_registration_date = false;

export default {
  name: "Signup",
  components: {
    VuePhoneNumberInput,
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    var sp = params.get("sp");
    console.log(sp);
    if (sp) {
      axios
        .get("https://apis.chapchap.co:8090/api/v1/check-sponsor?code=" + sp)
        .then((response) => {
          if (response.data.ok) {
            console.log("SPONSOR CODE " + sp);
            this.sponsor_code = sp;
          } else {
            VueSimpleAlert.alert(
              "Seems, you do not have a valid sponsor code",
              "",
              "error"
            );
          }
        });
    } else {
      router.push("/no-code");
    }
  },
  data() {
    return {
      max_year,
      sponsor_code,
      email,
      email_again,
      password,
      password_again,
      date_of_birth_y,
      date_of_birth_m,
      date_of_birth_d,
      gender,
      location,
      nin,
      signup_fee,
      phone_number,
      user_name,
      share_registration_date,
    };
  },
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    countries_enabled() {
      return ["UG"];
    },
    async submit() {
      // (optional) Wait until recaptcha has been loaded.
      // await this.$recaptchaLoaded();
      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");
      // Do stuff with the received token.
      console.log("=================");
      console.log(token);
      console.log("=================");

      //   console.log(this.email == this.email_again);
      console.log("AGE > 18");
      var age = new Date().getFullYear() - date_of_birth_y;
      console.log(age);
      if (!age > 18) {
        VueSimpleAlert.alert("You must be above 18 Years", "", "warning");
        return;
      } else {
        VueSimpleAlert.confirm(
          "Hello, Are you sure the details are correct?",
          "",
          "warning"
        ).then((ok) => {
          console.log(ok);
          console.log("CREATING ACCOUNT ENTER PIN TO PROCEED..");
          try {
            const requestOptions = {
              sponsor_code: localStorage.getItem("SP"),
              email: this.email,
              email_again: this.email_again,
              password: this.password,
              password_again: this.password,
              date_of_birth_y: this.date_of_birth_y,
              date_of_birth_m: this.date_of_birth_m,
              date_of_birth_d: this.date_of_birth_d,
              gender: this.gender,
              location: this.location,
              nin: this.nin,
              signup_fee: this.signup_fee,
              phone_number: this.phone_number,
              user_name: this.user_name,
              share_registration_date: this.share_registration_date,
              recap_token: token,
            };
            axios
              .post(
                "https://apis.chapchap.co:8090/api/v1/start-signup",
                requestOptions
              )
              .then((response) => {
                // console.log(response);
                var data = response.data;
                console.log("\n================================\n");
                console.log("Success:", response);
                console.log("\n================================\n");
                // const data2 = response.then((dd) => dd.json());
                if (data.ok) {
                  localStorage.setItem("OTP", data.OTP);
                  VueSimpleAlert.confirm(
                    "Hello " +
                      this.user_name +
                      ", Chap Chap sent a one time password to the phone " +
                      this.phone_number +
                      ". Yes, I have received it",
                    "",
                    "success"
                  ).then((ok) => {
                    console.log(ok);
                    router.push("/one-time-pin");
                  });
                } else {
                  VueSimpleAlert.alert(data.message, "", "error");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            // window.location.href = "/one-time-pin?sp=" + localStorage.getItem("SP");
          } catch (error) {
            console.log(error);
            // window.location.href = "/one-time-pin";
          }
        });
      }
    },
  },
};
</script>
