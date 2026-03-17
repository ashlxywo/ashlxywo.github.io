export default function Projects() {
  return (
    <section id="projects" className="myprojects">
      <div className="projects-content">
        <h1>My Projects</h1>

        <div className="projects">
          <div className="circuits">
            {/* You can add content for circuits project here */}
          </div>

          {/* Embedded Control Project */}
          <div className="project">
            <div className="project-videos">
              <video controls className="project-video">
                <source src="./images/rc.mov" type="video/mp4" />
              </video>
              <video controls className="rc-display-video">
                <source src="./images/display.mov" type="video/mp4" />
              </video>
            </div>

            <div className="project-info">
              <h3>Microcontroller Car (Embedded Control - Fall 2025)</h3>
              <hr className="project-divider" />
              <p>
                This project has five separate mini projects, each working with this RC car for various tasks. The 
                car is a custom RPI-RSLK robot car that has a LP-MSPM0G3507 launchpad development board attached
                to it. So far, we've worked with GPIO input/output pins and timers to program two different tasks. 
                <br />
                One, as shown in the video, utilizies the bumpers to program directional instructions to be executed once
                a button on the breadboard is pressed. Each bumper represents a different direction of a specified distance:
                straight, turning left 45 or 90 degrees, turning right 45 or 90 degrees, and stopping for one second. Another
                was prorgamming a simon-says style memorization game where a random LED pattern is displayed by the development 
                board and each bumper displays a different LED color when pressed. LED were wired onto the breadboard attached 
                to the car to signal checkpoints throughout the five-round game to signal wins and losses, along with terminal 
                messages. 
                <br /> Note: This is still ongoing throughout the semester and this will be updated as more gets done so stay tuned :D 
              </p>
            </div>
          </div>

          {/* Add more projects here */}
          {/* Example:
          <div className="project">
            <div className="project-videos">
              <video controls className="project-video">
                <source src="./images/another.mov" type="video/mp4" />
              </video>
            </div>
            <div className="project-info">
              <h3>Another Project Title</h3>
              <hr className="project-divider" />
              <p>Description for this project...</p>
            </div>
          </div>
          */}
        </div>

      </div>
    </section>
  );
}