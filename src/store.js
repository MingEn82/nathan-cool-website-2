import { create } from "zustand";

const usePlotStore = create((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export default usePlotStore;
