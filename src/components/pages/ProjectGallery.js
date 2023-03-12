import Projects from "../Projects";
import project from "../../project.json";
import iRecipeImg from "../images/iRecipeImg.png";
import teamGenImg from "../images/team generator.jpeg";
import passGenImg from "../images/Password_generator.png";
import planAppImg from "../images/planner.gif";
import quizImg from "../images/quiz.jpeg";
import colCardImg from "../images/active-states 3 col.jpg"

function ProjectGallery(){
    return(
        <div>
            <h2 class="text-center py-4 display-4 text-danger pt-5">Projects</h2>

            <Projects
              title= {project[0].title}
              image = {iRecipeImg}
              github= {project[0].github}
              deployed= {project[0].deployed}
              description = {project[0].description}
            />
             <Projects
              title= {project[1].title}
              image = {teamGenImg}
              github= {project[1].github}
              deployed= {project[1].deployed}
              description = {project[1].description}
            />
             <Projects
              title= {project[2].title}
              image = {passGenImg}
              github= {project[2].github}
              deployed= {project[2].deployed}
              description = {project[2].description}
            />
             <Projects
              title= {project[3].title}
              image = {planAppImg}
              github= {project[3].github}
              deployed= {project[3].deployed}
              description = {project[3].description}
            />
             <Projects
              title= {project[4].title}
              image = {quizImg}
              github= {project[4].github}
              deployed= {project[4].deployed}
              description = {project[4].description}
            />
             <Projects
              title= {project[5].title}
              image = {colCardImg}
              github= {project[5].github}
              deployed= {project[5].deployed}
              description = {project[5].description}
            />
        </div>
    );
}

export default ProjectGallery;