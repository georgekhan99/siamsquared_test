<template>
    <main>
        <div>
            <Navbar />
            <IndexPage />
            <router-view />
          
        </div>
    </main>
</template>

<script>
import Navbar from '../Layout/NavbarComponent.vue'
export default {
    components: Navbar
}
</script>
