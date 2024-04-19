<template>
  <div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
