export default function Projects() {
  return (
    <section id="projects" className="myprojects">
      <div className="projects-content">
        <h1>My Projects</h1>

        <div className="projects">
          <div className="video-container">
            <video controls className="project-video">
              <source src="./images/rc.mov" type="video/mp4" />
            </video>
            <video controls className="rc-display-video">
              <source src="./images/display.mov" type="video/mp4" />
            </video>
          </div>

          <div className="rc-info">
            <h3>Microcontroller Car (Embedded Control - Fall 2025)</h3>
            <p>
              This project has five separate mini projects, each working with this RC car for various tasks. The 
              car is a custom RPI-RSLK robot car that has a LP-MSPM0G3507 launchpad development board attached
              to it. So far, we've worked with GPIO input/output pins and timers to program two different tasks. 
              <br></br>
              One, as shown in the video, utilizies the bumpers to program directional instructions to be executed once
              a button on the breadboard is pressed. Each bumper represents a different direction of a specified distance:
              straight, turning left 45 or 90 degrees, turning right 45 or 90 degrees, and stopping for one second. Another
              was prorgamming a simon-says style memorization game where a random LED pattern is displayed by the development 
              board and each bumper displays a different LED color when pressed. LED were wired onto the breadboard attached 
              to the car to signal checkpoints throughout the five-round game to signal wins and losses, along with terminal 
              messages. 
              <br></br> Note: This is still ongoing throughout the semester and this will be updated as more gets done so stay tuned :D 
            </p>
          </div>
          <hr className = "small-divider" />
        </div>

      </div>
    </section>
  );
}
