<template>
  <Navbar />
  <main class="bg-[#202023] min-h-screen">
    <div class="w-full mx-auto py-8 p-4">
      <h2 class="text-2xl mt-5 font-bold text-center text-white">ลงทะเบียน</h2>
      <form @submit.prevent="submitForm" class="lg:max-w-md lg:mx-auto">
        <div class="mb-4">
          <label for="firstName" class="block mb-2 font-medium text-white"
            >ชื่อ:</label
          >
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="lastName" class="block mb-2 font-medium text-white"
            >นามสกุล:</label
          >
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="phoneNumber" class="block mb-2 font-medium text-white"
            >เบอร์โทรศัพท์:</label
          >
          <input
            type="tel"
            id="phoneNumber"
            v-model="phoneNumber"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 font-medium text-white"
            >อีเมล:</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="ref" class="block mb-2 font-medium text-white"
            >Ref:</label
          >
          <input
            type="text"
            id="ref"
            v-model="ref"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          ลงทะเบียน
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import Navbar from "../Layout/NavbarComponent.vue";
export default {
  components: { Navbar },
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      ref: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Submit form:", {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        ref: this.ref,
      });

      const queryParams = {
        ref: this.ref,
        email: this.email,
      };
      this.$router.push({ path: "/confirmation", query: queryParams });
    },
  },
};
</script>
