export default function AboutMe() {
  return (
    <section id="aboutMe" className="aboutMe">
      <div className="aboutMe-content">
        <h1>About Me</h1>
      </div>

      <div className="aboutMe-body">
        <div className="aboutMe-desc">
          <p>
            I'm a current junior at Rensselaer Polytechnic Institute pursuing an
            undergraduate degree in computer and systems engineering with a
            concentration in robotics. After graduation, I plan to either go to
            graduate school or work in the industry. <br></br>
            Currently, I work for the RPI Electrical, Computer, and Systems
            Engineering Department as a MercerX Lab Staff Member. I also do calculus
            tutoring for both RPI's Student Success Center and a virtual Algebra
            1/ELA tutor for a private school. Before working as MercerX staff, 
            I was an undergraduate researcher on Doug Mercer's Software
            Configured Breadboarding project. <br></br>
            Outside of academics, I am part of RPI's Fencing Club and Student
            Government. I am also currently learning guitar and how to use
            Blender. <br/> <br/>
            Skills: Python, C, C++, HTML, CSS, JavaScript, MATLAB, LTSpice and circuit design, Microsoft Suite, Adobe Photoshop, 
            embedded systems, communication, teaching
            
          </p>
        </div>
        <div className="aboutMe-img">
          <img src="./images/about_me.jpg" alt="aboutMe" />
        </div>
      </div>
    </section>
  );
}
