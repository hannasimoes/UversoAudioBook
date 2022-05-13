<template>
  <div class="flex justify-center">
    <div
      class="container mb-6 items-center py-4 w-4/12 h-full px-4 shadow-default"
    >
      <button
        class="text-black items-center bg-transparent border-button border-gray-300 rounded-button w-64 pl-4 pr-8 py-1 ml-20 my-6"
      >
        Hanna
      </button>
      <button
        class="text-black items-center bg-transparent border-button border-gray-300 rounded-button w-64 pl-4 pr-8 py-1 ml-20 my-6"
      >
        Hanna
      </button>
      <button
        class="text-black items-center bg-transparent border-button border-gray-300 rounded-button w-64 pl-4 pr-8 py-1 ml-20 my-6"
      >
        Hanna
      </button>
      <button
        class="text-black items-center bg-transparent border-button border-gray-300 rounded-button w-64 pl-4 pr-8 py-1 ml-20 my-6"
      >
        Hanna
      </button>

      <BaseButtonLink
        name="Finalizar"
        to="/"
        btn-style="button--stay"
        class="my-4 w-48 text-sm ml-24"
      ></BaseButtonLink>

      <BaseButtonLink
        name="Continuar"
        to="/"
        btn-style="button--stay"
        class="my-4 w-48 text-sm ml-24"
      ></BaseButtonLink>
    </div>
  </div>
</template>

<script>
import logoAdicionar from '../../assets/icons/adicionar.svg'
import BaseButtonLink from '../../components/base-components/BaseButtonLink.vue'

export default {
  name: 'CheckoutPage',
  components: {
    BaseButtonLink,
  },
  //   props: {
  //     book: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      logoAdicionar,
    }
  },
}
</script>

<style scoped>
button {
  background: url('../../assets/icons/adicionar.svg') no-repeat;
  background-size: 25px;
  background-position: 3%;
}
</style>
