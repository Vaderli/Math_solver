import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

function getUserId() 
{
  return localStorage.getItem("userId");
}

const userId = getUserId();

const savedResults = localStorage.getItem(`results_${userId}`);

const initialState = savedResults
  ? JSON.parse(savedResults)
  : {
      byId: {},
      allIds: []
    };

const resultsSlice = createSlice({
  name: "results",
  initialState,

  reducers: {
    addResult: (state, action) => {
      const { score, total } = action.payload;

      const id = uuidv4();

      state.byId[id] = {
        id,
        score,
        total,
        date: new Date().toISOString(),
      };

      state.allIds.unshift(id);

      if (state.allIds.length > 4) 
      {
        const removed = state.allIds.pop();
        delete state.byId[removed];
      }

      localStorage.setItem(`results_${userId}`, JSON.stringify(state));
    }
  }
});

export const { addResult } = resultsSlice.actions;
export default resultsSlice.reducer;
