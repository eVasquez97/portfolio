import { SectionTitle, Skill } from "../molecules";

const Experience = ({ exp }) => {
  function renderTechs() {
    return exp.techStacks.map((tech) => {
      return (
        <Skill
          text={tech.name}
          subText={tech.description}
          key={tech.description}
          url={tech.logo}
          hover={tech.experience}
        />
      );
    });
  }

  return (
    <div className="inline-flex flex-col w-full">
      <SectionTitle text="Tech stacks" icon="TfiSettings" size="16" />
      <div className="flex flex-wrap min-w-full ">{renderTechs()}</div>
    </div>
  );
};

export default Experience;
