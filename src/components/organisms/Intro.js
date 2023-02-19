import { Text } from "../atoms";
import { TfiUser } from "react-icons/tfi";

const Intro = ({ cover }) => {
  return (
    <div className="p-4 inline-flex items-center text-center min-w-full justify-center flex-col">
      <TfiUser className="text-white mb-8 mt-4" size={120} />
      <Text
        isDark
        text="Eduardo Bladimir Vásquez Lavaire"
        color="highlight"
        size="lg"
      />
      <div className="max-w-3xl pt-3">
        <Text text={cover} size="xs" className="pt-1 text-justify" />
      </div>
    </div>
  );
};

export default Intro;
