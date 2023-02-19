import { Text } from "../atoms";
import { SectionTitle, Skill } from "../molecules";

const SkillsSection = ({ skills }) => {
  function renderLanguage() {
    return skills.programmingLanguages.map((lang) => {
      return (
        <Skill
          text={lang.name}
          subText={lang.experience}
          key={lang.name}
          url={lang.logo}
        />
      );
    });
  }

  function renderCourses() {
    return skills.courses.map((cr) => {
      return (
        <div key={cr.name}>
          <Text text={cr.name} color="highlight" mode="semi-bold" isDark />
          <Text text={cr.time} size="xs" mode="extra-light" />
        </div>
      );
    });
  }

  return (
    <>
      <div className="inline-flex flex-col w-full">
        <SectionTitle text="Skills" icon="TfiAngleDoubleRight" size="16" />
        <div className="flex flex-wrap min-w-full">{renderLanguage()}</div>
      </div>
      <div>
        <SectionTitle text="Courses" icon="TfiBookmark" size="16" />
        {renderCourses()}
      </div>
    </>
  );
};

export default SkillsSection;
