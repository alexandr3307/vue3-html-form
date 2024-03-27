<template>
  <input type="text" class="input" :placeholder="placeholder" />
</template>

<script>
  export default {
    name: "MyInput",
    props: {
      modelValue: [String, Number],
      placeholder: {
        default: '',
        type: String
      },
      variant: {
        default: 'default',
        type: String,
      }
    },
  };
</script>

<style scoped lang="scss">
  .default {
    width: 100%;
  }
  input {
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #C8C8C8;
    border-radius: 8px;
    padding: 8px;
  }
  input:focus {
    background-color: #ffffff;
    outline-width: 0;
  }
</style>
