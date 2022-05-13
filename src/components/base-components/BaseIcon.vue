<template>
  <component
    v-bind="{ ...$props, ...$attrs }"
    :is="name"
    role="img"
    class="fill-current"
  />
</template>

<script>
import IconLock from '../../assets/icons/iconLock.vue'

export default {
  name: 'BaseIcon',

  components: {
    IconLock,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
