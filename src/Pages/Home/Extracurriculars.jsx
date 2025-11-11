export default function Extracurriculars() {
  return (
    <section id="clubs" className="extracurriculars">
      <div className="extracurriculars-content">
        <h1>Clubs and Organizations</h1>

        {/* Fencing Club */}
        <div className="club">
          <div className="club-img fencingimg">
            <img src="./images/fencing.jpg" alt="Fencing Club" />
          </div>
          <div className="club-info">
            <h3>Fencing Club</h3>
            <p>
              I started fencing when I was a freshman in high school and loved it ever since. I practice foil and
              teach others various blade techniques along with footwork. As vice president, I help the president with
              their responsibilities like organizing tournaments and overall keeping the club organized. We participate 
              in tournaments in Vermont, Vassar, and New York, as well as hosting our own tournaments. 
            </p>
          </div>
        </div>

        {/* Student Government */}
        <div className="club">
          <div className="club-img stugovimg">
            <img src="./images/stugov.jpg" alt="Student Government" />
          </div>
          <div className="club-info">
            <h3>Student Government</h3>
            <p>
              Student government is a huge part of the RPI community. We have the three main branches just like the U.S.
              government, and I am the secretary of the Student Senate. I attend meetings with both the Senate and the cabinet, which
              consists of our committee chairs. We have committees,  where most of our Senate work gets done, for every part of the student
              experience such as academic affaris, student life, residental life and dining, and facilities. 
            </p>
          </div>
        </div>

        {/* SASE */}
        <div className="club">
          <div className="club-img saseimg">
            <img src="./images/sase.jpg" alt="SASE" />
          </div>
          <div className="club-info">
            <h3>Society of Asian Scientists and Engineers (SASE)</h3>
            <p>
              As a SASE mentor, I speak with first-year students to help ease-them into RPI. I get to provide professional and academic guidance through cultural
              and interest-based discussions. We get to lay a foundation for a support system for mentees, giving them academic support like exam review sessions
              along with scheduling advice. We can also link them to professional opportunities/connections like alumni in the field, resume workshops, and even on-site
              tours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
