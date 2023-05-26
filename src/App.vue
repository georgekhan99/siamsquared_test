<template>
   <RouterView />
</template>

<script>
export default {
   watch: {
    $route(to) {
         document.title = to.meta.title 
      }
  }
}
</script>