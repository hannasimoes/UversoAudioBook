<template>
    
    <button class="button" :class="btnStyle">
        {{ name }}
    </button>

</template>

<script>
export default {
    name:'BaseButton',

props: {
    name: {
      type: String,
      required: true,
    },
    btnStyle: {
      type: String,
      default: 'button--white',
    },
  },
}
</script>
<style scoped>
.button {
    @apply inline-block py-3 px-3 text-center font-fieldworkBold text-sm rounded-button focus:outline-none shadow uppercase md:text-base;
}

.button-search {

display: block;
  background: url() no-repeat;
  width: 22px;
  height: 42px;
  position: absolute;
  right: 17px;
  top: 23px;
  transform: scale(0.55) rotate(90deg);
  pointer-events: none;
}


</style>