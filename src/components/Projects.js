import React from "react";

function Projects(props) {
  return (
<div>
<div class="container-fluid" id="projects">
    <h2 class="text-center py-4 display-4 text-danger pt-5">Projects</h2>
    <div class="row ">

        
      <div id="project1" class="col-12 col-sm-12 col-md-8 col-lg-6 d-flex align-items-stretch">
        <div class="card mb-3">
          <img 
            src={props.image}
            class="card-img-top"
            alt="..."/>
                        
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
             <span class="small">{props.description}</span>
            </p>
            <a href={props.deployed} target="_blank">Deploy site</a>
              
          </div>
        </div>
      </div>
   
  
  
 
    </div>
  </div>
</div>
  );
}

export default Projects;
