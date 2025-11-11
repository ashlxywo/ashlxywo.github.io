import React, { useEffect, useRef, useState } from "react";

function TimelineItem({ title, role, location, date, points, link }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`timeline-item ${visible ? "show" : ""}`}>
      <span className="timeline-dot" />
      <span className="timeline-connector" />
      <div className="timeline-card">
        <h2>{title}</h2>
        <p className="timeline-sub">
          {role} | {location} | {date}
        </p>
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        {link && (
          <p>
            View the open-source project my work was added to{" "}
            <a href={link}>here</a>.
          </p>
        )}
      </div>
    </div>
  );
}

export default function MySkills() {
  const experiences = [
    {
      title: "GO Tutor Corps",
      role: "Algebra 1 & English Tutor",
      location: "Virtual",
      date: "September 2025 - Present",
      points: [
        "Review foundational algebraic practices and concepts with a small group of 2-4 students",
        "Assess their understanding through Do-Nows, independent work, and exit tickets",
        "Completing feedback surveys for teachers regarding the students' academic progress",
        "Provide company feedback to improve overall tutoring methods for other tutors"
      ],
    },
    {
      title: "Electrical, Computer, and Systems Engineering Department at RPI",
      role: "MercerX Lab Staff",
      location: "Troy, NY",
      date: "August 2025 - Present",
      points: [
        "Supervise the lab room and maintain lab equipment such as soldering stations and oscilloscopes",
        "Learn from modules created about topics in ECSE such as PCB design, power systems, and software use",
        "Work and research to create a module for future staff members about test equipment use and control with programming"
      ],
    },
    {
      title: "Student Success Center at RPI",
      role: "Calculus Tutor",
      location: "Troy, NY",
      date: "September 2024 - Present",
      points: [
        "Provide one-on-one and group tutoring sessions for freshmen students in foundational calculus concepts, including limits, derivatives, and integrals",
        "Collaborate with a team of tutors to develop effective teaching strategies for mathematical skills",
        "Guide students through various problems and share study strategies to help students feel confident in the subject"
      ],
    },
    {
      title: "Lavner Education",
      role: "STEM Instructor/Intern",
      location: "New York University",
      date: "June 2025 - August 2025",
      points: [
        "Taught fundamental and advanced programming concepts to students, such as Python",
        "Developed and delivering a variety of lessons tailored to all skill levels, coordinating with camp leadership to improve the curriculum",
        "Encouraged teamwork and collaboration through challenges and group exercises",
        "Collaborated alongside other interns to develop lessons and activities to engage students in various STEM fields"
      ],
    },
    {
      title: "Electrical, Computer, and Systems Engineering Department at RPI",
      role: "Undergraduate Researcher",
      location: "Troy, NY",
      date: "Janurary 2025 - May 2025",
      points: [
        "Learned about the design and functionality of a cutting edge new tool for engineering education",
        "Collaborated alongside other researchers to build custom-designed boards, practicing various solder techniques",
        "Researched finances to determine the most cost efficient way to construct the boards",
        "Aided in early research of the SCB being launched in RPI's curriculum to improve student experience in implementing circuits"
      ],
    },
    {
      title: "New York Edge",
      role: "STEM Specialist",
      location: "Glen Oaks, NY",
      date: "July 2024 - August 2024",
      points: [
        "Taught students about various areas of STEM field through experiments and presentations",
        "Motivated students to pursue interests in STEM fields by promoting participation in class activities",
      ],
    },
    {
      title: "New York Hall of Science",
      role: "Explainer",
      location: "Corona, NY",
      date: "June 2022 - August 2023",
      points: [
        "Facilitated design-based activities for visitors and encouraging experiential learning",
        "Undergone extensive training and practice to learn and perform science-based demonstrations, bringing the excitement of STEM to diverse audiences",
        "Participated in frequent professional development and peer-based training sessions",
        "Engaged in reflective practices, such as performance assessment reviews, surveys, and focus groups"
      ],
    },
    {
      title: "Francis Lewis High School",
      role: "Robotics Mentor",
      location: "Fresh Meadows, NY",
      date: "June 2022 - August 2023",
      points: [
        "Lead 3-D modeling and design workshops to prepare underclassmen for seasonal competitions",
        "Helped lead the all-girls team of 20 people through design and implementation of manufactured robot to compete in seasonal challenges",
      ],
    },
  
  ];
  const education = [
    {
      title: "Rensselaer Polytechnic Institute",
      role: "Bachelor's of Science in Computer and Systems Engineering ",
      location: "Troy, NY",
      date: "August 2023 - May 2027",
      points: [
        "Relevant Coursework: Robotics I, Embedded Control, Engineering Processes, Intro to Circuits, Multivariable Calculus and Matric Algebra, Intro to Algorithms, Data Structures, Engineer Communications, Intro to Electrical Computer and Systems Engieering, Differential Equations",
      ],
      /*link: "#" */
    },
    {
      title: "Francis Lewis High School",
      role: "High School Diploma with Mastery in Math and Science",
      location: "Fresh Meadows, NY",
      date: "September 2019 - June 2023",
      points: [
        "Major: Graphic Design and Engineering/Robotics",
        "Clubs/Extracurriculars: National Honors Society, Varsity fencing team, Robotics Team, Key Club"
      ],
      /*link: "#" */
    },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-container">
        <h1 className="timeline-title">My Experiences</h1>
        <div className="timeline-wrapper">
          {/* vertical line */}
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>

        <h1 className = "timeline-title"> Education</h1>
        <div className="timeline-wrapper">
          {/* vertical line */}
          <div className="timeline-line" />
          {education.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
