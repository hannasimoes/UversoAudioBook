<template>
  <div class="base-loading">
    <div class="base-loading__card">
      <h6 class="base-loading__title">
        <slot name="title">Aguarde enquanto lhe direcionamos</slot>
      </h6>
      <img
        class="base-loading__image"
        alt="Carregando..."
        :src="require(`../../assets/images/card-loading.svg`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseLoading',
})
</script>

<style scoped>
.base-loading {
  @apply fixed left-0 top-0 z-40 h-full w-full;
  background-color: rgba(0, 0, 0, 0.4);
}

.base-loading__card {
  @apply z-50 mx-auto w-11/12 rounded-card bg-white px-4 py-12 shadow;
  margin-top: 18%;
}

.base-loading__title {
  @apply mb-8 text-center font-fieldworkDemiBold text-lg leading-5 text-black;
}

.base-loading__image {
  @apply mx-auto;
  transform: scale(0.85);
}

@media (min-width: 768px) {
  .base-loading__card {
    @apply px-10;
    height: 28.125rem;
    width: 25rem;
    margin-top: 8%;
  }
}
</style>
