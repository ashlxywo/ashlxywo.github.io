export default function Projects() {
  return (
    <section id="projects" className="myprojects">
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="projects">

          {/* Air Pressure Monitor */}
          <div id="project-airpressure" className="project">
            <div className="project-row">
              <div className="project-slot-left">
                <img src="./images/fullcircuit.png" alt="Air pressure circuit board" className="project-image airpressure-circuit" />
              </div>
              <div className="project-slot-center">
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
            <div className="project-row">
              <div className="project-slot-center">
                <img src="./images/fullschematic.png" alt="Circuit schematic" className="project-image airpressure-schematic" />
                <p>
                  <br />
                  We originally planned to wind our own transformer, and we bought transformer cores, 
                  but we weren't able to wind the wire tight enough for it to have any inductance. Instead, we took apart a scrapped 
                  power supply we found in one of the school's tech dumps and used one with a similar voltage ratio to what we were 
                  looking through. We had planned to make our own because we needed an unusual ratio, but the one we used was close enough.
                  Components of the circuit from left to right: the transformer we ended up using, the full bridge rectifier, the voltage 
                  regulator, and the low pass filter.
                  <br />
                  <br />
                </p>
                <div className="airpressure-image-row">
                  <img src="./images/transformer.jpg" alt="transformer" className="project-image airpressure-transformer" />
                  <img src="./images/bridge.png" alt="rectifier" className="project-image airpressure-rectifier" />
                  <img src="./images/voltage regulator.png" alt="voltage-regulator" className="project-image airpressure-regulator" />
                  <img src="./images/lowpassfilter.jpg" alt="low-pass-filter" className="project-image airpressure-filter" />
                </div>
              </div>
            </div>
          </div>
          <hr className="project-divider" />
          <br></br>

          {/* Microcontroller Car */}
          <div id="project-microcontroller" className="project">
            <div className="project-row">
              <div className="project-slot-left">
                <video controls className="project-video">
                  <source src="./images/rc.mov" type="video/mp4" />
                </video>
                <video controls className="rc-display-video">
                  <source src="./images/display.mov" type="video/mp4" />
                </video>
              </div>
              <div className="project-slot-center">
                <h3>Microcontroller Car (Embedded Control - Fall 2025)</h3>
                <hr className="project-divider" />
                <p>
                  This project has five separate mini projects, each working with this RC car for various tasks. The
                  car is a custom RPI-RSLK robot car that has a LP-MSPM0G3507 launchpad development board attached
                  to it. Throughout the semester, we've worked with it's input and output pins, timers, analog-to-digital 
                  converter, and inter-integrated circuit. We programmed the car in C utilizing a combination of the microcontroller's 
                  registers and the TI DriverLib Library.
                  <br /><br />
                  One, as shown in the video, utilizies the bumpers to program directional instructions to be executed once
                  a button on the breadboard is pressed. Each bumper represents a different direction of a specified distance:
                  straight, turning left 45 or 90 degrees, turning right 45 or 90 degrees, and stopping for one second. Another
                  was programming a simon-says style memorization game where a random LED pattern is displayed by the development
                  board and each bumper displays a different LED color when pressed. LED were wired onto the breadboard attached
                  to the car to signal checkpoints throughout the five-round game to signal wins and losses, along with terminal
                  messages.
                  <br /><br />
                  The third lab involved programming the car to reach a target location and stop while following a predetermined route.
                  The car had to trace out the letter "R", "P", and "I", using motor encoders to determine how far it drives before
                  stopping. We implemented timers, interrupts, and encoder values to ensure the car was going at the desired angles and 
                  distances. 
                </p>
              </div>
            </div>
            <div className="project-row">
              <div className="project-slot-center">
                <p> 
                  The fourth lab was to use potentiometers to make a "remote"-controlled car. Two potentiometers were used, one each 
                  controlling speed and direction. The potentiometers were connected to the microcontroller's ADC inpus which allowed
                  the car to continuously get inputs and adjust the speed and direction accordingly. Wheel encoders were used to measure
                  the motor speeds so the feedback system was accurate. We implemented an integral feedback controller that compared the 
                  desired wheel speed to the measured encoder values and corrected the motor outputs using PWM signals. 
                  <br /><br />
                  The fifth lab involved replacing the potentiometer "remote" with a CMPS12 electronic compass and an ultrasonic sensor 
                  to turn the "remote"-controlled car into a gesture-based control system. The compass was attached to a handheld breadboard
                  and connected to the car through I2C interface, which allowed for the gesture controls. Multiple feedback control systems
                  were integrated to ensure smooth and consistent motions during driving. The wheel speed controller from the fourth lab was
                  reused to maintain motor speeds utilizing the same encoder and PWM measurements. We implemented a proportional heading 
                  controller that compared the desired heading from the compass to the car’s estimated heading calculated from encoder data, 
                  automatically generating differential wheel speeds for turning. Additional logic was developed to wrap heading errors across 
                  a 0°–360° boundary, detect acceleration-based on/off gestures, and limit speed and turning values to ensure stable and 
                  responsive control. 
                </p>
              </div>
              <div className="project-slot-right">
                <img src="./images/rc.jpg" alt="rc" className="rc-car" />
                <img src="./images/remoterc.png" alt="remote" className="car-remote" />
              </div>
            </div>
          </div>
          <hr className="project-divider" />
          <br></br>

          {/*IED Project*/}
          <div id="project-dormlight" className="project">
            <div className="project-row">
              <div className="project-slot-left">
                <img src="./images/unlitIED.jpg" alt="unlit IED light" className="project-image" />
              </div>
              <div className="project-slot-center">
                <h3>DormLight (Intro to Engineering Design - Spring 2026)</h3>
                <hr className="project-divider" />
                <p>
                  The class was divided into six-person multidisciplinary teams, with each member representing a different engineering major. 
                  Throughout the semester, teams followed the Engineering Design Process to identify an engineering problem and develop a 
                  functional prototype. Our team addressed inadequate lighting in university dormitories by designing a modular lighting 
                  system that provided both ambient and task lighting while allowing users to customize brightness and color temperature.
                  <br></br>
                </p>
              </div>
            </div>
            <div className="project-row">
              <div className="project-slot-center">
                <p> 
                  The project consisted of six milestones covering problem exploration, individual subsystem research, technical 
                  documentation, subsystem design and testing, prototype integration, and final evaluation. We identified user needs 
                  and design specifications through research and surveys, then developed and benchmarked potential solutions. Our final 
                  system consisted of four subsystems: lighting, mounting, controller, and website interface.
                  <br></br><br></br>
                  The lighting subsystem used modular circular light panels designed for adjustable brightness and color temperature. The two LEDs 
                  allowed users to adjust the light to their desired temperature and desired brightness. Through our surveys it was determined that 
                  a lot of the on-campus lighting systems caused eye strain and fatigue, so this new LED system allows for an affordable alternative
                  to more expensive systems. 
                  <br></br> 
                  The mounting system incorporated screw-in attachments and integrated cable-management features. This screw-on feature allows for easy
                  installation. An STM32-based controller communicated with a user's device (laptop or phone) through Bluetooth, providing an interface 
                  to independently adjust each light panel's brightness and color temperature. This way, students would be able to place the light on
                  either their ceiling or their way and they could receive either task or ambient lighting for their desk or room. Each subsystem was 
                  modeled, tested, and supported with engineering calculations before being integrated into the final prototype. 
                  The final milestone documented the complete design, including subsystem interactions, block diagrams, calculations, 
                  proof-of-concept testing, and the integration of the individual components into a functional lighting system.
                </p>
              </div>
              <div className="project-slot-right">
                <img src="./images/litIED.jpg" alt="lit IED light" className="project-image" />
                <img src="./images/wirenest.png" alt="wire nest" className="project-image" />
                <img src="./images/iedmount.png" alt="ied mount" className="project-image" />
              </div>
            </div>
          </div>
          <hr className="project-divider" />
          <br></br>

          {/*RASPBOT Project*/}
          <div id="project-drawingbot" className="project">
            <div className="project-row">
              <div className="project-slot-left">
                <img src="./images/raspbot.jpg" alt="raspbot" className="project-image" />
              </div>
              <div className="project-slot-center">
                <h3>Drawing Long-Exposure Images (Robot Programming (Spring 2026)</h3>
                <hr className="project-divider" />
                <p>
                  This is in progress.....
                </p>
              </div>
            </div>
            <div className="project-row">
              <div className="project-slot-center">
                <p> 

                </p>
              </div>
              <div className="project-slot-right">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}