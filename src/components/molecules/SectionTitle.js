import { getIcon } from "@/utils/constants";

const SectionTitle = ({ text, icon, size }) => {
  return (
    <div className="inline-flex flex-row text-neutral-200 items-center content-center mb-4 mt-4">
      {getIcon(icon, size)}
      <p className="font-firaCode ml-2 font-semibold">{text}</p>
    </div>
  );
};

export default SectionTitle;
