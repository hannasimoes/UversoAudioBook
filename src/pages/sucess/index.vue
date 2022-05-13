<template>
  <div class="background-home flex justify-center">
    <div
      class="container mb-6 mt-4 items-center py-4 w-4/12 h-96 px-4 shadow-default border-gray-600 border-2 bg-white"
    ></div>
  </div>
</template>

<script>
import Background from '../../assets/gif/word.gif'
export default {
  name: 'SucessPage',

  data() {
    return {
      Background,
    }
  },
}
</script>

<style scoped>
.background-home {
  background-image: url('../../assets/gif/word.gif');
  background-size: contain;
}
</style>
