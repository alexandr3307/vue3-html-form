<template>
  <form class="organization-container" onsubmit="return false;">
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
      <MySelectDropdown class="organization-item__field" placeholder="Санаторий" icon="DownIcon" :options="optionsDropdownMenu" @optionChanged="onOptionChanged" />
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        <span class="organization-item__star">*</span>
        <span>Название организации</span>
      </h5>
      <MyInput v-model="inputText" placeholder='Санаторий "Огонёк"'></MyInput>
    </div>
    <div class="organization-item">
      <h5 class="organization-item__title">
        Описание
      </h5>
      <MyTextarea v-model="textareaText" placeholder='Санаторий "Огонёк"' />
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
      <MyButton @click="saveData" size="lg" variant="blue">Сохранить</MyButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useFormDataStore } from '@/store';
  import MyButton from '@/components/UI/MyButton.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  import MySelectDropdown from '@/components/UI/MySelectDropdown.vue';
  import MyTextarea from '@/components/UI/MyTextarea.vue';
  import LogoLoader from '@/components/UI/MyLogoLoader.vue';
  import PlusIcon from '@/assets/img/PlusIcon.vue';
  const inputText = ref('');
  const textareaText = ref('');
  const optionsDropdownMenu = ref(['Санаторий', 'Диспансер']);
  const selectedDropdownOption = ref(optionsDropdownMenu.value[0]);

  //хз мой Eslint считает своим долгом ругаться на defineEmits. Не удалось найти решение в доке typescript-eslint, считаю не особо важным, поэтому просто пропустил здесь
  // eslint-disable-next-line
  const emit = defineEmits<{
    (e: 'save', value: boolean): void
  }>()
  function onOptionChanged(option: string) {
    selectedDropdownOption.value = option;
  }
  function saveData() {
    const formDataStore = useFormDataStore();
    formDataStore.setOrganizationName(inputText.value);
    formDataStore.setOrganizationDescription(textareaText.value);
    formDataStore.setOrganizationType(selectedDropdownOption.value);
    emit('save', true);
  }
</script>

<style scoped lang="scss">
  .close-icon {
    transform: rotate(45deg);
  }
  .organization-item {
    text-align: left;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    &:last-child {
      margin-top: 32px;
    }
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
