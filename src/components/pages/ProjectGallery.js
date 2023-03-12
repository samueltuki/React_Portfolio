import Projects from "../Projects";
import project from "../../project.json";

function ProjectGallery(){
    return(
        <div>
            <Projects
              title= {project[0].title}
              image = {project1}
              github= {project[0].github}
              deployed= {project[0].deployed}
              description = {project[0].description}
            />
             <Projects
              title= {project[1].title}
              image = {project1}
              github= {project[1].github}
              deployed= {project[1].deployed}
              description = {project[1].description}
            />
             <Projects
              title= {project[2].title}
              image = {project1}
              github= {project[2].github}
              deployed= {project[2].deployed}
              description = {project[2].description}
            />
             <Projects
              title= {project[3].title}
              image = {project1}
              github= {project[3].github}
              deployed= {project[3].deployed}
              description = {project[3].description}
            />
             <Projects
              title= {project[4].title}
              image = {project1}
              github= {project[4].github}
              deployed= {project[4].deployed}
              description = {project[4].description}
            />
             <Projects
              title= {project[5].title}
              image = {project1}
              github= {project[5].github}
              deployed= {project[5].deployed}
              description = {project[5].description}
            />
        </div>
    );
}

export default ProjectGallery;