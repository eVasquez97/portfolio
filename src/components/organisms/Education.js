import { Text } from "../atoms";
import { SectionTitle } from "../molecules";

const Education = ({ ed }) => {
  function renderEducation() {
    return ed.education.map((ed) => {
      return (
        <div key={ed.title} className="pb-2">
          <Text text={ed.institute} color="highlight" mode="semi-bold" isDark />
          <Text text={ed.title} />
          <Text text={ed.time} color="opaque" size="xs" isDark />
        </div>
      );
    });
  }

  return (
    <div>
      <SectionTitle text="Education" icon="TfiBook" size="16" />
      {renderEducation()}
    </div>
  );
};

export default Education;
