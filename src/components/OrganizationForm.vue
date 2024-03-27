<template>
  <form class="organization-form" action="">
    <div class="organization-header">
      <h3 class="organization-header__title">Организация</h3>
      <MyButton class="organization-header__button" variant="grey">
        <PlusIcon class="close-icon"></PlusIcon>
        Отменить
      </MyButton>
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        <span class="organization-item__star">*</span>
        <span>Тип</span>
      </h5>
      <MySelectDropdown class="organization-item__field" placeholder="Санаторий" icon="DownIcon" />
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        <span class="organization-item__star">*</span>
        <span>Название организации</span>
      </h5>
      <MyInput placeholder='Санаторий "Огонёк"'></MyInput>
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        Описание
      </h5>
      <MyTextarea placeholder='Санаторий "Огонёк"' />
      <p class="organization-item__description">Описание в модуле на сайте не показывается</p>
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        <span class="organization-item__star">*</span>
        <span>Логотип</span>
      </h5>
      <LogoLoader></LogoLoader>
    </div>
    <div class="organization-item">
      <MyButton size="lg" variant="blue">Сохранить</MyButton>
    </div>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import MySelectDropdown from "@/components/UI/MySelectDropdown";
import MyTextarea from "@/components/UI/MyTextarea";
import LogoLoader from "@/components/UI/MyLogoLoader";
import PlusIcon from "@/assets/img/PlusIcon.vue"
export default {
    name: "OrganizationForm",
    components: {LogoLoader, MyTextarea, MySelectDropdown, MyInput, MyButton, PlusIcon}
}
</script>

<style scoped lang="scss">
  .organization-form {
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid #EDEDED;
    box-shadow: 0px 8px 16px 0px #00000014;
    padding: 24px;

  }
  .organization-form {
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
  .close-icon {
    transform: rotate(45deg);
  }
  .organization-item {
    text-align: left;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    &__title {
      margin: 0;
      align-items: center;
      display: flex;
      gap: 2px;
      font-size: 14px;
    }
    &__star {
      color: #D91D0B;
    }
    &__field {
      font-size: 16px;
      font-weight: 400;
      color: #656565;
    }
    &__description {
      margin: 0;
      font-size: 14px;
      color: #656565;
    }
  }

</style>
