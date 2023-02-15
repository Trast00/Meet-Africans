import { createSlice } from "@reduxjs/toolkit";

/* Should manage global datas, like isTestAccount, infoServer etc... */
const dashboardReducer = createSlice({
  name: "meetafrica/dashboard",
  initialState: {
    currentPage: "discover"
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      return {...state, currentPage: action.payload}
    }
  }
})

export default dashboardReducer.reducer