<template>
  <button class="button" :class="btnStyle">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    name: {
      type: String,
      required: true,
    },
    btnStyle: {
      type: String,
      default: 'button--black',
    },
  },
}
</script>
<style scoped>
@import '../../assets/css/buttons.css';
</style>
