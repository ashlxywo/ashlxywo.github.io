import {Link} from "react-router-dom"
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Extracurriculars from "./Extracurriculars";
import Projects from "./Projects";

export default function HomePage() {
	return(
		<>
		<section id = "homePage" className = "homePage">
			<div className = "homePagecontentBox">
				<div className = "homePagecontent">
					<h1 className = "homePagetitle">
						<span className = "homePagebio">Hey, I am Ashley!</span>{" "}
					</h1>
					<p className = "homePagedescription"> 
						 </p>
				</div>
				{/* <button className = "btn btn-primary">Get In Touch</button>*/}

				 <div className = "socials">
          <a
            href = "https://www.linkedin.com/in/ashleywo/" className = "linkedin">
						<img src = "./images/linkedin.png" alt = "linkedin-icon" className = "social-icon" />
          </a>
          <a
            href = "https://github.com/ashlxywo" className = "github" >
					<img src = "./images/github.png" alt = "github-icon" className = "social-icon"/>
          </a>
					</div>
			</div>

			<div className = "homePageimg">
				<img src = "./images/image.jpg" alt = "HomePage" />
			</div>
			
		</section>

		<AboutMe />
		<hr className = "section-divider" />
		<MySkills />
		<Extracurriculars />
		<hr className = "section-divider" />
		<Projects />
		</>

		);
}

