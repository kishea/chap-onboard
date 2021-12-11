<template>
  <div class="hello">
    <div class="flex justify-center mb-32">
      <div class="lg:w-216 md:w-156 w-108 pb-3">
        <div class="flex justify-center items-start">
          <img class="w-24 py-8 md:w-32" src="logo.png" />
        </div>
        <h2 class="font-bold text-2.5xl tracking-tight text-center">
          Welcome to Chap Chap
        </h2>

        <hr class="mt-8 mb-6 w-84 mx-auto border-gray-400" />

        <ul class="space-y-4">
          <li class="flex items-center">
            <svg
              class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            <p class="ml-4">Approve the payment, and Go Pro with Chap Chap!</p>
          </li>

          <li class="flex items-center">
            <svg
              class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            <p class="ml-4">Download app</p>
          </li>
        </ul>
        <div class="flex-col justify-center w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
          <a href="https://play.google.com/store/apps/details?id=com.chapchap.merchant&hl=en&gl=US">
            <img class="w-24 py-8 md:w-32" src="google-play.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>
