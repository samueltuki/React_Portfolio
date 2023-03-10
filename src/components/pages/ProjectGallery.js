import Projects from "../Projects";
import project from "../../project.json";
import iRecipeImg from "../../components/images/iRecipeImg.png";
import teamGenImg from "../../components/images/team generator.jpeg";
import passGenImg from "../../components/images/Password_generator copy.png";
import planAppImg from "../../components/images/planner.gif";
import quizImg from "../../components/images/quiz.jpeg";
import colCardImg from "../../components/images/active-states 3 col copy.jpg"

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