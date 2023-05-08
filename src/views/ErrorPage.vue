<template>
  <div class="d-flex flex-column justify-center align-center my-8">
    <h2 class="body-text text-white">Oops! Page does not exist.</h2>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup>


</script>

<style scoped>

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #4E6C50;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
