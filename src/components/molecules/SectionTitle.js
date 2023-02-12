import { getIcon } from "@/utils/constants";
import { Text } from "../atoms";

const SectionTitle = ({ text, icon, size }) => {
  return (
    <div className="inline-flex flex-row text-neutral-200 items-center content-center mb-4 mt-4">
      {getIcon(icon, size)}
      <Text text={text} mode="semi-bold" className="ml-2" />
    </div>
  );
};

export default SectionTitle;
