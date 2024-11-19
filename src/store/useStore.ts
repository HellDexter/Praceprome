import { create } from 'zustand';

interface UserState {
  isPro: boolean;
  setIsPro: (isPro: boolean) => void;
  savedJobs: string[];
  addSavedJob: (jobId: string) => void;
  removeSavedJob: (jobId: string) => void;
}

export const useStore = create<UserState>((set) => ({
  isPro: false,
  setIsPro: (isPro) => set({ isPro }),
  savedJobs: [],
  addSavedJob: (jobId) =>
    set((state) => ({ savedJobs: [...state.savedJobs, jobId] })),
  removeSavedJob: (jobId) =>
    set((state) => ({
      savedJobs: state.savedJobs.filter((id) => id !== jobId),
    })),
}));