import { create } from 'zustand';
import * as DocumentPicker from 'react-native-document-picker';

const useExpenseStore = create((set) => ({
  expenses: [],
  uploadedFile: null,

  addExpense: (expense) => set((state) => ({
    expenses: [...state.expenses, expense],
  })),

  handleFileUpload: async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      set({ uploadedFile: result[0] });
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('File selection was canceled');
      } else {
        console.error('File selection error:', error);
      }
    }
  },
}));

export default useExpenseStore;