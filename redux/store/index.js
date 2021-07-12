import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

/* this should be handled in a different file but for the simplicity of the demo I kept it here */
export const fix = createAsyncThunk("car/fixStatus", async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 5000)
  );
});

const initialState = {
  oilLevel: 100,
  isEngineOn: false,
  error: null,
  isBeingFixed: false,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    start(state) {
      state.isEngineOn = true;
    },
    go(state, action) {
      const newOilLevel = (state.oilLevel -= action.payload);
      state.oilLevel = Math.max(newOilLevel, 0);
    },
    stop(state) {
      state.isEngineOn = false;
    },
    notifyError(state) {
      (state.isEngineOn = false),
        (state.error = "something is wrong with the oil pump");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fix.pending, (state) => {
        state.error = false;
        state.isBeingFixed = true;
      })
      .addCase(fix.fulfilled, (state) => {
        state.isBeingFixed = false;
        state.isEngineOn = true;
        state.oilLevel = 100;
      });
  },
});

const store = configureStore({
  reducer: {
    car: carSlice.reducer,
  },
});

export const carActions = carSlice.actions;

export default store;
