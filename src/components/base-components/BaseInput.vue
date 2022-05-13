<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="mt-4 block w-full rounded-button border-2 border-black px-5 py-3 shadow outline-none"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
