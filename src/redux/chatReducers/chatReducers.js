import { createSlice } from '@reduxjs/toolkit';
import { listFriendsTest, listMessageTest } from '../../_test_/testConstants';

const chatReducer = createSlice({
  name: 'meetafrica/dashboard/chat',
  initialState: {
    currentFriend: {},
    friends: {
      loading: false,
      listFriends: [...listFriendsTest],
    },
    messages: {
      loading: false,
      listMessages: { ...listMessageTest },
    },
  },
  reducers: {
    updateCurrentFriend: (state, action) => ({
      ...state, currentFriend: action.payload,
    }),
    addNewFriend: (state, action) => ({
      ...state,
      friends: { listFriends: [...state.friends.listFriends, action.payload] },
      messages: { listMessages: { ...state.messages.listMessages, [action.payload.idChat]: [] } },
    }),
    addNewMessage: (state, action) => ({
      ...state,
      /* Add message */
      messages: {
        ...state.messages,
        listMessages: {
          ...state.messages.listMessages,
          [action.payload.idChat]: [
            ...state.messages.listMessages[action.payload.idChat],
            action.payload,
          ],
        },
      },
      /* Update last message of friend */
      friends: {
        ...state.friends,
        listFriends: state.friends.listFriends.map((friend) => {
          if (friend.idChat === action.payload.idChat) {
            return { ...friend, lastMessage: action.payload.message };
          }
          return friend;
        }),
      },
    }),
  },
});

export const { addNewFriend, updateCurrentFriend, addNewMessage } = chatReducer.actions;
export default chatReducer.reducer;
