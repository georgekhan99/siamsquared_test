<template>
  <Navbar />
  <!-- Display Navbar Components -->
  <main class="bg-[#202023] min-h-screen">
    <div
      class="box-title w-[100%] flex flex-col justify-center text-black items-center"
    >
      <div
        class="lg:w-[70%] md:w-[70%] w-full bg-slate-300 min-h-[200px] text-[25px] flex flex-col items-center justify-center p-5 mt-5 rounded-md"
      >
        <div class="flex flex-row text-green-600 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="ml-2">สมัครสมาชิกเสร็จสิ้น</h1>
        </div>
        <p class="font-thin text-[18px] mb-2">ข้อมูลสมาชิกของคุณคือ</p>
        <div class="flex flex-col justify-start mb-2">
          <p class="text-start text-[18px] mb-2">
            REF : {{ this.$route.query.ref }}
          </p>
          <p class="text-start text-[18px] mb-2">
            EMAIL : {{ this.$route.query.email }}
          </p>
        </div>
        <button
          @click="this.$router.push('/')"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-[25px]"
        >
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../Layout/NavbarComponent.vue";
export default {
  components: { Navbar },
};
</script>
