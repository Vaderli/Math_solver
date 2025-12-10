import { createSlice, nanoid } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: { byId: {}, allIds: [] },

  reducers: {
    addResult: {
      reducer(state, action) {
        const { id, data } = action.payload;

        state.byId[id] = data;
        state.allIds.unshift(id);
      },

      prepare(score, total) {
        const id = nanoid();
        return {
          payload: {
            id,
            data: {
              id,
              score,
              total,
              date: new Date().toISOString(),
            },
          },
        };
      },
    },
  },
});

export const { addResult } = resultsSlice.actions;
export default resultsSlice.reducer;
