<template>
    <nav
      class="navbar-fixed-top p-5 bg-[#121212] min-h-[4.5rem] text-white flex flex-col justify-center items-center "
    >

    <div class="w-full flex flex-col justify-center items-center">
            <h1 class="text-[22px]"> siamsquared Stock Finder </h1>
    <div class="w-[50%] font-thin mzz-5 mt-5 flex justify-center">
        <router-link to="/" class="mr-5 hover:text-blue-400" :class="{ 'text-blue-400': $route.path === '/' }">หน้าหลัก</router-link>
        <router-link to="/register" class="mr-5 hover:text-blue-400" :class="{ 'text-blue-400': $route.path === '/register' }">สมัครสมาชิก</router-link>
    </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>