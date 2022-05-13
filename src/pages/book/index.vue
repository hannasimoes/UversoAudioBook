<template>
  <div class="justify-end md:flex">
    <div class="flex w-full md:w-12/12">
      <BaseCard />
      <CardBooks />
    </div>
  </div>
</template>

<script>
import CardBooks from '../../components/card/CardBooks.vue'
import BaseCard from '../../components/base-components/BaseCard.vue'

export default {
  name: 'BookPage',

  components: {
    CardBooks,
    BaseCard,
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
