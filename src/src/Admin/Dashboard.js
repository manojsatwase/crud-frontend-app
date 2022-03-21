import React, { useEffect } from 'react';
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients, deleteSinglePatient } from "../../actions/Patient";
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";
const Dashboard = () => {

 const dispatch = useDispatch();
 const alert = useAlert();

 const { loading, error, patients } = useSelector(state => state.patients);
 useEffect(() => {

  if (error) {
   alert.error(error);
   dispatch({ type: "clearErrors" });
  }
  dispatch(getAllPatients);

 }, [loading, error, alert, dispatch]);

 const deletePatient = id => {
  dispatch(deleteSinglePatient(id));
 };




 return (
  <React.Fragment>
   {
    loading && <p>Loading...</p>
   }

   {
    patients.length > 0 ? (
     <div>
      <table className="table table-bordered mt-5">
       <thead className="table">
        <tr>
         <th scope="col">_id</th>
         <th scope="col">Name</th>
         <th scope="col">Age</th>
         <th scope="col">Contact</th>
         <th scope="col">Address</th>
         <th scope="col">Gender</th>
         <th scope="col">Diagnostic</th>
         <th scope="col">EDIT</th>
         <th scope="col">DELETE</th>
        </tr>
       </thead>
       <tbody>

        {
         patients && (
          patients.map(p => (
           <tr key={p._id}>
            <td>{p._id}</td>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.contact}</td>
            <td>{p.address}</td>
            <td>{p.gender}</td>
            <td>{p.diagnostic}</td>
            <td>
             <Link className="btn btn_success" to={`/dashboard/${p._id}`} >Edit</Link>
            </td>
            <td> <button onClick={() => deletePatient(p._id)} className="btn btn_danger" type="button">Delete</button></td>
           </tr>
          ))
         )
        }

       </tbody>
      </table>
     </div>
    ) : <p>No Patient</p>
   }
  </React.Fragment>
 );
};

export default Dashboard;