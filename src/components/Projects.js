import React from "react";

function projects({ image, title, description, deployed, large }) {
  const classes = `${large ? "col-12 col-sm-12 col-md-8 col-lg-6 " : "col-12 col-sm-6 col-md-4 col-lg-3"}`;

  return (
    <div className="row mb-5">
      <div className={classes}>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <span className="small">{description}</span>
            </p>
            <a
              href={deployed}
              className="btn btn-outline-danger"
              target="_blank"
            >
              Deploy site
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default projects;





























// import React from "react";

// function Projects(props) {
//   return (
// <div>
// <div class="container-fluid" id="projects">
//     <h2 class="text-center py-4 display-4 text-danger pt-5">Projects</h2>
//     <div class="row ">
//      <div className= "col-sm-12 col-md-10 col-lg-8">
//         <div class="card mb-3">
//           <img 
//             src={props.image}
//             class="card-img-top"
//             alt="..."/>
//            <div class="card-body">
//             <h5 class="card-title">{props.title}</h5>
//             <p class="card-text">
//              <span class="small">{props.description}</span>
//             </p>
//             <a href={props.deployed} class="btn btn-outline-danger " target="_blank">Deploy site</a>  
//           </div>
//         </div>
//       </div>
//        </div>
//   </div>
// </div>
//   );
// }

// export default Projects;
