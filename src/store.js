import { configureStore } from "@reduxjs/toolkit";
import { patientReducer } from "./reducers/Patient";
const store = configureStore({
 reducer: {
  patients: patientReducer,
 }
});

export default store;
