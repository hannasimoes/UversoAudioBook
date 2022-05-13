<template>
  <router-link class="button" :class="btnStyle" :to="to">
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: 'BaseButtonLink',

  props: {
    name: {
      type: String,
      required: true,
    },
    btnStyle: {
      type: String,
      default: 'button--black',
    },
    to: {
      type: String,
      required: true,
      default: '/',
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/buttons.css';
</style>
