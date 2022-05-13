<template>
  <div class="background-home flex justify-center w-screen h-screen bg-black">
    <div class="justify-center">HANNA CUZONA</div>
    <section class="w-full flex fixed-bottom justify-center bottom-0 bg-black">
      <BaseButtonLink name="start" to="/introduction" class="mb-8 my-4 w-60" />
    </section>
  </div>
</template>

<script>
import Background from '../../assets/gif/word.gif'
import BaseButtonLink from '../../components/base-components/BaseButtonLink.vue'

export default {
  name: 'HomePage',

  components: {
    BaseButtonLink,
  },
  data() {
    return {
      Background,
    }
  },
}
</script>

<style>
.background-home {
  background-image: url('../../assets/gif/word.gif');
  background-size: contain;
}
</style>
