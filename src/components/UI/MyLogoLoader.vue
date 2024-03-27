<template>
  <div class="file-uploader">
    <div class="file-uploader__content">
      <p class="file-uploader__title">Загрузите изображение или перетащите файл сюда</p>
      <p class="file-uploader__text">Максимальный размер изображения 10 Мб.</p>
      <p class="file-uploader__text">Допустимые форматы: .jpeg .png .webp .svg</p>
      <MyButton class="file-uploader__button" variant="light-blue">
        <PlusIcon class="plus-icon"></PlusIcon>
        Загрузить</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton";
import PlusIcon from "@/assets/img/PlusIcon.vue"
export default {
    components: {MyButton,PlusIcon},
};
</script>

<style lang="scss">
  .file-uploader {
    border: 1px dashed #C8C8C8;
    padding: 16px;
    border-radius: 8px;
    text-align: center;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__title {
      color: #353535;
      line-height: 24px;
      font-size: 16px;
      margin: 0 0 2px;
    }
    &__text {
      color: #656565;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }
    &__button {
      margin-top: 16px;
    }
    .plus-icon {
      path {
        fill: #045CC4 !important;
      }
    }
  }

</style>
