import { createSlice } from "@reduxjs/toolkit";

const chatReducer = createSlice({
  name: "meetafrica/dashboard/chat",
  initialState : {
    friends: {
      loading: false,
      listFriends: [],
    },
    messages: {
      loading: false,
      listMessages : {},
    },
  },
  reducers: {
    addNewFriend: (state, action) => ({...state, 
      friends: {listFriends: [...state.friends.listFriends, action.payload]},
      messages: {listMessages: { ...state.messages.listMessages, [action.payload.idChat]: [] }}
    }),
    addNewMessage: (state, action) => ({...state, 
      messages: {...state.messages, 
        listMessages: {...state.messages.listMessages, 
          [action.payload.idChat]: [...state.messages.listMessages[action.payload.idChat], action.payload]
        },
      },
    })
  }
})

export const {addNewFriend, addNewMessage} = chatReducer.actions
export default chatReducer.reducer