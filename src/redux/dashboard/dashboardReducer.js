import { createSlice } from "@reduxjs/toolkit";

/* Should manage global datas, like isTestAccount, infoServer etc... */
const dashboardReducer = createSlice({
  name: "meetafrica/dashboard",
  initialState: {
    currentUser: {},
    loading: false,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      return {...state, currentUser: action.payload}
    }
  }
})

export const {updateCurrentUser} = dashboardReducer.actions
export default dashboardReducer.reducer