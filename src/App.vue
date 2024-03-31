<template>
  <OrganizationForm v-if="!isSaved" @save="handleSave" />
  <OrganizationCard v-else />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import OrganizationForm from "@/components/OrganizationForm.vue";
  import OrganizationCard from "@/components/OrganizationCard.vue";
  export default defineComponent({
    name: 'App',
    components: {OrganizationCard, OrganizationForm},
    data() {
      return {
        isSaved: null,
      };
    },
    methods: {
      handleSave(value: any) {
        this.isSaved = value;
      },
    }
  });
</script>

<style lang="scss">
  @import "assets/css/normalize.css";
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  body {
    background-color: #e1e1e1;
    font-family: Roboto, serif;
  }
  .organization-container {
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid #EDEDED;
    box-shadow: 0px 8px 16px 0px #00000014;
    padding: 24px;
    margin: auto;
    max-width: 720px;
  }
  .organization-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      margin: 0;
    }
  }
</style>
