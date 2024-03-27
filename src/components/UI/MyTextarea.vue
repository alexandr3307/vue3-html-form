<template>
  <textarea class="textarea" :placeholder="placeholder" />
</template>

<script>
export default {
    name: "MyTextarea",
    props: {
      placeholder: {
        default: '',
        type: String
      },
    },
};
</script>

<style scoped lang="scss">
  .default {
    width: 100%;
  }
  textarea {
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
    height: 62px;
  }
</style>
