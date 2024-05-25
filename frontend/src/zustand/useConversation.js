import { create } from "zustand";
// Creating a custom hook called 'useConversation' using the 'create' function
const useConversation = create((set) => ({
  // Initializing the 'selectedConversation' state variable with a value of null
  selectedConversation: null,
  // Defining a function called 'setSelectedConversation' that takes a parameter 'selectedConversation'
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  // Initializing the 'messages' state variable as an empty array
  messages: [],
  // Defining a function called 'setMessages' that takes a parameter 'messages' and updates the 'messages' state variable with the provided value
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
