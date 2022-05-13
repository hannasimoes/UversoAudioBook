<template>
  <div class="flex justify-center">
    <div
      class="container mb-6 items-center py-4 w-4/12 h-full px-4 shadow-default"
    >
      <BaseButtonLink
        name="Pix"
        to="/"
        btn-style="button--black"
        class="my-7 w-48 text-sm ml-32"
      ></BaseButtonLink>
      <BaseButtonLink
        name="Boleto"
        to="/"
        btn-style="button--black"
        class="my-7 w-48 text-sm ml-32"
      ></BaseButtonLink>
      <BaseButtonLink
        name="Cartão"
        to="/"
        btn-style="button--black"
        class="my-7 w-48 text-sm ml-32"
      ></BaseButtonLink>

      <BaseButtonLink
        name="Finalizar"
        to="/"
        btn-style="button--stay"
        class="my-14 w-64 text-sm ml-24"
      ></BaseButtonLink>
    </div>
  </div>
</template>

<script>
import BaseButtonLink from '../../components/base-components/BaseButtonLink.vue'

export default {
  name: 'PaymentPage',
  components: {
    BaseButtonLink,
  },
}
</script>

<style scoped></style>
