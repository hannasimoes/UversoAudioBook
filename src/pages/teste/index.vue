<template>
  <div class="bg-gray-700 h-screen">
    <div class="flex" style="height: 88vh">
      <!-- side nav-->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6 px-6 flex justify-center">
          <img
            src="../../assets/icons/logo-certo.svg"
            class="h-24"
            style="filter: brightness(0) invert(1)"
          />
        </div>
        <div class="mx-3">
          <button
            class="w-full rounded px-3 py-2 flex items-center justify-start"
          ></button>
        </div>
      </div>
      <!-- main content -->
      <div class="w-full h-full relative">
        <!-- header -->
        <div class="w-full stick top-0 p-2"></div>
      </div>
    </div>
    <!-- play bar-->
    <div class="w-full bg-gray-600" style="height: 12vh"></div>
  </div>
</template>
<script>
export default {
  name: 'TestPage',

  data: function () {
    return {
      pages: [
        { id: 'home', name: 'home', icon: 'gome' },
        { id: 'search', name: 'search', icon: 'search' },
        { id: 'library', name: 'library', icon: 'library' },
      ],
    }
  },
  methods: {},
}
</script>
<style></style>
