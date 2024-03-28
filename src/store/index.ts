import { defineStore } from 'pinia';

export const useFormDataStore = defineStore({
  id: 'formData',
  state: () => ({
    organizationName: '',
    organizationDescription: '',
    organizationType: '',
  }),
  actions: {
    setOrganizationName(text: string) {
      this.organizationName = text;
    },
    setOrganizationDescription(text: string) {
      this.organizationDescription = text;
    },
    setOrganizationType(text: string) {
      this.organizationType = text;
    }
  },
  getters: {
    getAllTextData(state) {
      return [
        {title: 'Тип', text: state.organizationType},
        {title: 'Название организации', text: state.organizationName},
        {title: 'Описание', text: state.organizationDescription},
      ];
    }
  }
});
