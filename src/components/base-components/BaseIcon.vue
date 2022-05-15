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
import IconSearch from '../../assets/icons/iconSearch.vue'
import IconLibrary from '../../assets/icons/iconLibrary.vue'
import IconHome from '../../assets/icons/iconHome.vue'

export default {
  name: 'BaseIcon',

  components: {
    IconLock,
    IconSearch,
    IconLibrary,
    IconHome,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
