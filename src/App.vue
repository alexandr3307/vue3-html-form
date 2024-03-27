<template>
  <OrganizationForm />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import OrganizationForm from "@/components/OrganizationForm.vue";

    export default defineComponent({
        name: 'App',
        components: {OrganizationForm},
    });
</script>

<style>
  @import "assets/css/normalize.css";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body {
    background-color: #e1e1e1;
    font-family: Roboto, serif;
  }
</style>
