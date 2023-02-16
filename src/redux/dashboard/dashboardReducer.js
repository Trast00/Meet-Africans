import { createSlice } from "@reduxjs/toolkit";

/* Should manage global datas, like isTestAccount, infoServer etc... */
const dashboardReducer = createSlice({
  name: "meetafrica/dashboard",
  initialState: {
    currentUser: {
      /* empty data is required for initial state */
      data: {},
    },
    loading: true,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      return {...state, loading:false, currentUser: action.payload}
    }
  }
})

export const {updateCurrentUser} = dashboardReducer.actions
export default dashboardReducer.reducer