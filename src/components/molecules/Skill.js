import Image from "next/image";
import { Text } from "../atoms";

const Skill = ({ text, subText, url, className, hover }) => {
  return (
    <div
      className={`${className} cursor-pointer showXs:basis-2/6 min-w-[120px] p-1 rounded-lg items-center justify-center text-center flex flex-col hover:bg-slate-700 pb-4 basis-1/6 group`}
    >
      <Image
        alt={text}
        src={url}
        width="44"
        height="44"
        className="pb-2 self-center"
      />
      <Text text={text} color="highlight" mode="semi-bold" isDark />
      <Text text={subText} size="xs" className="showXs:text-[10px]" />
      <Text text={hover} isDark className="opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default Skill;
