import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const patientReducer = createReducer(initialState, {
 createPatientRequest: (state) => {
  state.loading = true;
 },
 createPatientSuccess: (state, action) => {
  state.loading = false;
  state.patients = action.payload.patients;
  state.message = action.payload.message;
 },
 createPatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },

 LoadPatientRequest: (state) => {
  state.loading = true;
 },
 LoadPatientSuccess: (state, action) => {
  state.loading = false;
  state.patients = action.payload;
 },
 LoadPatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },

 getPatientRequest: (state) => {
  state.loading = true;
 },
 getPatientSuccess: (state, action) => {
  state.loading = false;
  state.patients = action.payload.patients;
  state.message = action.payload.message;
 },
 getPatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },

 getSinglePatientRequest: (state) => {
  state.loading = true;
 },
 getSinglePatientSuccess: (state, action) => {
  state.loading = false;
  state.patient = action.payload;
 },
 getSinglePatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },

 updatePatientRequest: (state) => {
  state.loading = true;
 },
 updatePatientSuccess: (state, action) => {
  state.loading = false;
  state.patients = action.payload.patient;
  state.message = action.payload.message;
 },
 updatePatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },


 deletePatientRequest: (state) => {
  state.loading = true;
 },
 deletePatientSuccess: (state, action) => {
  state.loading = false;
  state.message = action.payload;
 },
 deletePatientFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
 },

 clearErrors: (state) => {
  state.error = null;
 },

});


