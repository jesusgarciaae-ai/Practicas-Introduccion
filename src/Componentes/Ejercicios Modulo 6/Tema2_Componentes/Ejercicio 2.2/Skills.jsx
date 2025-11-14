const hardSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
  "Git",
  "Bootstrap",
];

const softSkills = [
  "Empatico",
  "Responsable",
  "Comunicación efectiva",
  "Pensamiento crítico",
  "Inteligencia emocional",
  "Creatividad",
  "Asertividad",
];

const Skills = () => {
  return (
    <>
      <p className="fs-2">Mis habilidades son</p>
      <hr />
      <div className="container text-center">
        <div className="row row-cols-3">
          {hardSkills.map((skill, i) => (
            <div className="fs-3" key={i}>
              <div className=" border border-2 border-dark card">
                <div className="card-body">
                  <div className="col">{skill}</div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
