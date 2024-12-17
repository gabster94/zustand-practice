import { create } from "zustand"

export const useUserStore = create((set) => ({
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ],

  // Action to add a user
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Date.now() }],
    })),

    // Action to remove a user
    removeUser: (id) =>
      set((state) => ({
        users: state.users.filter((user) => user.id !==id),
      })),
}));
