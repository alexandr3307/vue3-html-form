<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="selected-option">
      {{ selectedOption || placeholder }}
      <DownIcon class="arrow-icon" :class="{ rotated: isDropdownOpen }" />
    </div>
    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option" @click="selectOption(option)">{{ option }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DownIcon from '@/assets/img/DownIcon.vue'
  export default defineComponent({
    components: {
      DownIcon
    },
    props: {
      placeholder: {
        type: String,
        required: true,
      },
      options: {
        type: Array as () => string[],
        required: true,
      },
      icon: {
        type: String,
        default: '⮟',
      },
    },
    data() {
      return {
        isDropdownOpen: false,
        selectedOption: '',
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectOption(option: string) {
        this.selectedOption = option;
        this.isDropdownOpen = false;
        this.toggleDropdown();
        this.$emit('optionChanged', option);
      },
    },
  });
</script>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #C8C8C8;
    border-radius: 8px;
    padding: 8px;
  }
  .arrow-icon {
    position: absolute;
    right: 0.5rem;
    transition: transform 0.3s;
  }
  .rotated {
    transform: rotate(180deg);
  }
  .dropdown-menu {
    list-style: none;
    padding-left: 0;
    border: 1px solid #ccc;
    border-top: none;
    width: fit-content;
    position: absolute;
    box-shadow: 0px 8px 16px 0px #00000014;
    border-radius: 8px;
    z-index: 1;
    background-color: #ffffff;
  }
  .dropdown-menu li {
    padding: 0.5rem;
    cursor: pointer;
  }
</style>
