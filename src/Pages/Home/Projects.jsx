export default function Projects() {
  return (
    <section id="projects" className="myprojects">
      <div className="projects-content">
        <h1>My Projects</h1>

        <div className="projects">
          <div id="project-airpressure" className="project">
            <div className="airpressure-top">
              <img src="./images/fullcircuit.png" alt="Air pressure circuit board" className="project-image airpressure-circuit" />
              
              <div className="project-info">
                <h3>Air Pressure Monitor (Electric Circuits - Spring 2025)</h3>
                <hr className="project-divider"/>
                <p>Electric Circuits was structured to have one big group project spanning throughout the semester, 
                  and ours was a circuit that monitored atmospheric air pressure. It used the input from 
                  a pressure sensor that unfortunately broke the night before we presented the first part of the project. 
                  The final version contained an astable and monostable multivibrator, multiple amplifiers and comparators, 
                  a step down transformer, a full bridge rectifier, a low pass filter, and a differentiator. The image below shows
                  the full schematic of the circuit.</p>
              </div>
            </div>  
            <br></br>
            <div className="airpressure-bottom">
              <img src="./images/fullschematic.png" alt="Circuit schematic" className="project-image airpressure-schematic" />
              <p className="airpressure-extra">We originally planned to wind our own transformer, and we bought transformer cores, 
                but we weren't able to wind the wire tight enough for it to have any inductance. Instead, we took apart a scrapped 
                power supply we found in one of the school's tech dumps and used one with a similar voltage ratio to what we were 
                looking through. We had planned to make our own because we needed an unusual ratio, but the one we used was close enough.
                Components of the circuit from left to right: the transformer we ended up using, the full bridge rectifier, the voltage 
                regulator, and the low pass filter</p>
              <div className="airpressure-image-row">
                <img src="./images/transformer.jpg" alt="transformer" className="project-image airpressure-transformer" />
                <img src="./images/bridge.png" alt="rectifier" className="project-image airpressure-rectifier" />
                <img src="./images/voltage regulator.png" alt="voltage-regulator" className="project-image airpressure-regulator" />
                <img src="./images/lowpassfilter.jpg" alt="low-pass-filter" className="project-image airpressure-filter" />
              </div>
              <br></br>
            </div>
          </div>

        <hr className="project-divider" />
        <br></br>

        <div id="project-microcontroller" className="project">

          {/* Top row: videos left, description right */}
          <div className="microcontroller-top">
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

          <div className="microcontroller-bottom">
            <div className="microcontroller-extra-wrapper">
              <p className="microcontroller-extra">OIFAHKJSDSJSDHFJDSHFDSLKNFLKDSNFKDSNLKFNDSLKFNDSLKFNDSKFNLKDSNFLKD SNFLKDSNFLKNDSFLKD
                FOILKSHFDSLKJGHKJSKJFDHGKJDGHFDSJGKNNFDGMNFD,MVNV,MCXBLJGSIJGSIJIJIJIJIJIJIJIJIJIJIJIJIJJIIJIJIIJIJ
              </p>
            </div>
            <div className="microcontroller-image-row">
              <img src="./images/rc.jpg" alt="rc" className="rc-car" />
              <img src="./images/remoterc.png" alt="remote" className="car-remote" />
            </div>
          </div>

        </div>

          {/* Add future projects below — give each one a unique id="project-xxx" */}

        </div>
      </div>
    </section>
  );
}