<template>
  <div class="select-dropdown">
    <div ref="toggle" class="toggle">
      <input
        class="search-dropdown"
        type="text"
        :placeholder=placeholder
      />
      <component :is="icon"></component>
    </div>
  </div>
</template>

<script>
import DownIcon from "@/assets/img/DownIcon.vue"
export default {
  name: "MySelectDropdown",
  components: {
    DownIcon
  },
  props: {
    placeholder: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
  .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #C8C8C8;
    border-radius: 8px;
    padding: 8px;
  }
  input {
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    border: none;
  }
  input:focus {
    background-color: #ffffff;
    outline-width: 0;
  }
</style>
