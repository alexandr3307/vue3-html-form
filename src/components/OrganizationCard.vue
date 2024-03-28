<template>
  <div class="organization-container" action="">
    <div class="organization-header">
      <h3 class="organization-header__title">Организация</h3>
      <MyButton class="organization-header__button" variant="grey">
        <EditIcon class="edit-icon"></EditIcon>
        Редактировать
      </MyButton>
    </div>
    <div class="organization-block">
      <div v-for="(item, index) in data" :key="index" class="organization-saved">
        <div class="organization-saved__title">{{ item.title }}</div>
        <div v-if="item.text" class="organization-saved__text">{{ item.text }}</div>
        <div v-else class="organization-saved__text">Не указан</div>
      </div>
      <div class="organization-img">
        <div class="organization-img__title">Логотип</div>
        <img class="organization-img__border" src="@/assets/img/imgContainer.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MyButton from "@/components/UI/MyButton.vue";
  import EditIcon from "@/assets/img/EditIcon.vue"
  import {useFormDataStore} from "@/store";
  const formDataStore = useFormDataStore();
  const data = formDataStore.getAllTextData;
  console.log(data);
</script>

<style lang="scss" scoped>
  .organization-block {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }
  .organization-saved {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 12px;
    &__title {
      font-size: 14px;
      color: #656565;
    }
    &__text {
      font-weight: 500;
      color: #353535;
    }
  }
  .organization-img {
    &__border {
      border: 1px solid #EDEDED;
      border-radius: 8px;
      margin-top: 2px;
    }
  }
</style>
