import axios from "axios";

export const createPatient = (name, age, contact, address, gender, diagnostic) => async (dispatch) => {
 try {
  dispatch({
   type: "createPatientRequest",
  });

  const { data } = await axios.post(
   '/api/v1/patient',
   {
    name, age, contact, address, gender, diagnostic
   },
   {
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
  dispatch({
   type: "createPatientSuccess",
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: "createPatientFailure",
   payload: error.response.data.message,
  });
 }
};

// get all Patient

export const getAllPatients = () => async (dispatch) => {
 try {
  dispatch({
   type: "getPatientRequest",
  });

  const { data } = await axios.get('/api/v1/patient');
  dispatch({
   type: "getPatientSuccess",
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: "getPatientFailure",
   payload: error.response.data.message,
  });
 }
};
export const getSinglePatient = (id) => async (dispatch) => {
 try {
  dispatch({
   type: "getSinglePatientRequest",
  });

  const { data } = await axios.get(`/api/v1/patient/${id}`);
  dispatch({
   type: "getSinglePatientSuccess",
   payload: data.patient,
  });
 } catch (error) {
  dispatch({
   type: "getSinglePatientFailure",
   payload: error.response.data.message,
  });
 }
};


export const updateSinglePatient = (id, name, age, contact, address, gender, diagnostic) => async (dispatch) => {
 try {
  dispatch({
   type: "updatePatientRequest",
  });

  const { data } = await axios.put(
   `/api/v1/patient/${id}`,
   {
    name, age, contact, address, gender, diagnostic
   },
   {
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
  dispatch({
   type: "updatePatientSuccess",
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: "updatePatientFailure",
   payload: error.response.data.message,
  });
 }
};

// Delete Single Patient
export const deleteSinglePatient = (id) => async (dispatch) => {
 try {
  dispatch({
   type: "deletePatientRequest",
  });

  const { data } = await axios.delete(`/api/v1/patient/${id}`);
  dispatch({
   type: "deletePatientSuccess",
   payload: data.message,
  });
 } catch (error) {
  dispatch({
   type: "deletePatientFailure",
   payload: error.response.data.message,
  });
 }
};
