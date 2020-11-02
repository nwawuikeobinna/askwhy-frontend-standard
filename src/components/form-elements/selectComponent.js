// import React from "react";
// import { useState } from "react";

// const SelectComponent = () => {
//   const [state, setState] = useState({
//     status: "[Status]",
//   });

//   const onChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const { status } = state;

//   const style = {
//     padding: "10px",
//     width: "18em",
//     marginBottom: "14px",
//   };

//   return (
//     <div className="selectComponent">
//       <div>
//         <select style={style} onChange={onChange}>
//           <option>{status}</option>
//           <option>Software Application Developer.</option>
//           <option>Web Developer.</option>
//           <option>Computer Systems Engineer.</option>
//           <option>Intern</option>
//           <option>Others</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SelectComponent;
