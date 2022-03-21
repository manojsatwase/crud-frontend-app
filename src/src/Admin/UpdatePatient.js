import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { updateSinglePatient, getSinglePatient } from "../../actions/Patient";
import { Button } from "@material-ui/core";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
//import DescriptionIcon from "@material-ui/icons/Description";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachPhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from '@material-ui/icons/Home';
import WcIcon from '@mui/icons-material/Wc';
import { useParams } from "react-router-dom";
import "../../Components/PatientInfo/newPatient.css";

const NewPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [contact, setContact] = useState(0);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [diagnostic, setDiagnostic] = useState("");

  const categories = [
    "MRI",
    "CT",
    "X-ray",
  ];

  const genderCategory = ["Male", "Female", "Other"];

  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();

  const { loading, error, message, patient } = useSelector(state => state.patients);



  const updatePatientSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateSinglePatient(params.id, name, age, contact, address, gender, diagnostic));
    setName("");
    setAge("");
    setContact("");
    setAddress("");
    setGender("");
    setDiagnostic("");
  };

  useEffect(() => {
    if (error) {
      if (message) {
        alert.success(message);
        dispatch({ type: "clearErrors" });
      }
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    dispatch(getSinglePatient(params.id));
  }, [dispatch, error, alert, message, params.id]);

  useEffect(() => {
    if (patient) {
      setName(patient.name);
      setAge(patient.age);
      setContact(patient.contact);
      setAddress(patient.address);
      setGender(patient.gender);
      setDiagnostic(patient.diagnostic);
    }
  }, [patient]);
  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {patient && <div className="newPatientContainer">
        <form
          className="createPatientForm"
          onSubmit={updatePatientSubmitHandler}
        >
          <h1>Update Patient Details</h1>

          <div>
            <SpellcheckIcon />
            <input
              name="name"
              type="text"
              placeholder="Patient Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <CalendarViewDay />
            <input
              name="age"
              type="number"
              value={age}
              placeholder="Age"
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <AttachPhoneIcon />
            <input
              type="number"
              name="contact"
              value={contact}
              placeholder="Contact Number"
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div>
            <HomeIcon />
            <textarea
              placeholder="Patient Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              cols="30"
              rows="1"
            ></textarea>
          </div>


          <div>
            <WcIcon />
            <select name={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Choose Gender</option>
              {genderCategory.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <AccountTreeIcon />
            <select name={diagnostic} onChange={(e) => setDiagnostic(e.target.value)}>
              <option value="">Choose Diagnostic</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          {/*
   <div>
    <DescriptionIcon />
    <textarea
     placeholder="Patient Description"
     value={description}
     name="description"
     onChange={(e) => setDescription(e.target.value)}
     cols="30"
     rows="1"
    ></textarea>
   </div>
  */}


          <Button
            id="createPatientBtn"
            type="submit"
          >
            Update
          </Button>
        </form>
      </div>
      }

    </Fragment>
  );
};

export default NewPatient;
