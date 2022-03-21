import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../actions/Patient";

const Home = () => {
 const dispatch = useDispatch();
 const { loading, patients } = useSelector(state => state.patients);

 useEffect(() => {
  dispatch(getAllPatients());
 }, [dispatch]);


 return (
  <React.Fragment>
   {loading && <p style={{ background: "white", zIndex: "-9999" }}>Loading...</p>}
   {patients && patients.length > 0 ?
    (
     <div>
      <table className="table table-bordered mt-5 table-hover">
       <thead className="table table-dark">
        <tr>
         <th scope="col">_id</th>
         <th scope="col">Name</th>
         <th scope="col">Age</th>
         <th scope="col">Contact</th>
         <th scope="col">Address</th>
         <th scope="col">Gender</th>
         <th scope="col">Diagnostic</th>
        </tr>
       </thead>
       <tbody>

        {
         patients.map(p => (
          <tr key={p._id}>
           <td>{p._id}</td>
           <td>{p.name}</td>
           <td>{p.age}</td>
           <td>{p.contact}</td>
           <td>{p.address}</td>
           <td>{p.gender}</td>
           <td>{p.diagnostic}</td>
          </tr>
         ))
        }

       </tbody>
      </table>
     </div>
    ) : <p>No Patient</p>
   }
  </React.Fragment>
 );
};

export default Home;
