export default function projects({ image, title, description, deployed, github, large }) {
  return (
    <div className={large ? "mb-4 col-xl-8": "mb-4 col-md-6 col-xl-4"}>
      <div className="card h-100">

        {/* setting bckground images for the cards */}
        <div className="p-4" style={{backgroundPosition: "center top", backgroundImage: `linear-gradient(rgba(220, 220, 220, 0.9), rgba(220, 220, 220, 0.9)), url(${process.env.PUBLIC_URL}/images/${image})`, backgroundSize:"cover"}}>
          
          {/* image for the card */}
          <img src={process.env.PUBLIC_URL + "/images/" + image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="small">{description}</span>
          </p>
          <div>
            <a href={deployed} className="btn btn-outline-danger mr-2" target="_blank" rel="noreferrer" style={{position:"static" }}>Deployed site</a>
            <a href={github} className="btn btn-outline-danger ml-2" target="_blank" rel="noreferrer" style={{position:"static" }}>Github repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}







// future reference====

// import React from "react";
// // grabbing the keys to have access to the props
// function projects({ image, title, description, deployed, large }) {
//   // const classes = `${
//   //   large
//   //     ? "col-12 col-sm-12 col-md-8 col-lg-6 d-flex align-items-stretch   "
//   //     : "col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
//   // }`;

//   return (
//     <div  className=" m-4 ">
//       <div>
//         <div className="card">
//           <img src={image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               <span className="small">{description}</span>
//             </p>
//             <a
//               href={deployed}
//               className="btn btn-outline-danger"
//               target="_blank"
//             >
//               Deploy site
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default projects;


// // function Projects(props) {
// //   return (
// // <div>
// // <div class="container-fluid" id="projects">
// //     <h2 class="text-center py-4 display-4 text-danger pt-5">Projects</h2>
// //     <div class="row ">
// //      <div className= "col-sm-12 col-md-10 col-lg-8">
// //         <div class="card mb-3">
// //           <img
// //             src={props.image}
// //             class="card-img-top"
// //             alt="..."/>
// //            <div class="card-body">
// //             <h5 class="card-title">{props.title}</h5>
// //             <p class="card-text">
// //              <span class="small">{props.description}</span>
// //             </p>
// //             <a href={props.deployed} class="btn btn-outline-danger " target="_blank">Deploy site</a>
// //           </div>
// //         </div>
// //       </div>
// //        </div>
// //   </div>
// // </div>
// //   );
// // }

// // export default Projects;
