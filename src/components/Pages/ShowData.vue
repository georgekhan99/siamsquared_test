<template>
  <div>
    <!-- Display Navbar Components -->
    <Navbar />
    <main class="bg-[#202023] min-h-screen">
      <div class="box-title w-[100%] flex flex-col justify-center items-center">
        <div
          class="w-full lg:w-[70%] md:w-[70%] bg-[#174f9c] min-h-[70px]  text-white text-[25px] flex items-center justify-start p-5 mt-3 rounded-md"
        >
          <div class="w-full ml-2 flex justify-center items-center lg:items-baseline md:items-baseline  flex-col sm:flex-row">
            <p class="text-[18.5px] mb-2 ml-3">กรุณาเลือกรายชื่อบริษัท</p>
            <!-- DropDown Menu To Select Company to Show -->
            <div class=" ml-2 relative text-sm min-w-[300px]">
      <button
        class="text-black flex items-center justify-between px-3 py-2 bg-white w-full border border-gray-500 rounded-lg"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span>{{ selectedOption.N_COMPANY_T }}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
          :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-y-auto h-[500px]"
        >
          <li
            v-for="(option, index) in response_data"
            :key="index"
            class="px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-200 cursor-pointer"
            @mousedown.prevent="setOption(option)"
          >
            {{ option.N_COMPANY_T }}
          </li>
        </ul>
      </transition>
    </div>
          </div>
        </div>
          <!--! END of DropDown Menu To Select Company to Show -->
        <div v-if="selectedOption"
          class="info_box lg:w-[60%] bg-slate-300 mt-[25px] min-h-[400px] rounded-md border-cyan-300"
        >
          <div class="w-full text-[20px] p-3 flex-col">
            <p class="text-[25px] font-bold flex justify-center">
              {{ this.selectedOption.N_COMPANY_T }}
            </p>
            <p class="text-[18px] font-thin flex justify-center">
              {{ this.selectedOption.N_COMPANY_E }}
            </p>
            <div class="w-[100%] h-[1px] mt-2 mb-2 bg-black" />
            <div
              class="bg-slate-100 w-[100%] rounded-lg flex flex-col justify-center items-center mt-4"
            >
              <p class="flex justify-start font-bold">ประเภทกิจการ</p>
              <p class="text-sm font-thin p-2 indent-3">
                {{ this.selectedOption.N_BUSINESS_TYPE_T }}
              </p>
              <div class="w-full flex flex-col justify-center items-center">
                    <div class="w-full flex flex-col justify-start py-3 px-3">
                        <p class="font-bold"> ข้อมูลสำคัญบริษัท </p>
                        <p class="mt-4 font-thin text-sm"> ชื่อย่อ :  {{ this.selectedOption.N_name }}  </p>
                        <p class="mt-4 font-thin text-sm"> ชื่อย่อไทย :  {{ this.selectedOption.N_shortname }}  </p>
                        <p class="mt-4 font-thin text-sm"> marketcap :  {{ this.selectedOption.marketcap?.toLocaleString() ?? null }}  </p>
                        <p class="mt-4 font-thin text-sm"> เว็บไซต์บริษัท :  {{ this.selectedOption.N_URL != '' && this.selectedOption.N_URL == null  ?  "ไม่พบข้อมูล" :this.selectedOption.N_URL }}  </p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
//IMPORT Package
import Navbar from '../Layout/NavbarComponent.vue'
import axios from 'axios';

export default {
  components: {Navbar},
  name: "indexPage",
  data() {
    return {
    isOptionsExpanded: false,
      selectedOption: [],
      language: "thai",
      isDropdownOpen: false,
      response_data: [],
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
    getData(){
        axios.get('https://stockradars.co/assignment/data.php').then((response) => {
            // console.log(response)
            this.response_data = response.data
        }).catch((e) => {
            console.log(e)
        })
    }
  },
  mounted() {
    this.getData();
  },
  beforeUnmount() {},
};
</script>
