<template>
    <nav
      class="p-5 bg-[#121212] min-h-[4.5rem] text-white flex flex-col justify-center items-center "
    >
    <h1 class="font-bold text-[30px]"> 
    STOCK INFOMATION TEST 
    </h1>
    <div class="w-100 text-white flex">
        <h3 class="hover:text-[#174f9c] transition-all ml-2 cursor-pointer"> 
            <router-link to="/"> หน้าแรก</router-link>
        </h3>
        <h3 class="hover:text-[#174f9c] transition-all ml-2 cursor-pointer"> 
            <router-link to="/register">สมัครสมาชิก</router-link>   
        </h3>
    </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    },


}
</script>