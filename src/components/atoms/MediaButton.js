import { generateMediaIcon, getIcon } from "@/utils/constants";

const MediaButton = ({ icon, url }) => {
  const style = generateMediaIcon(icon);
  return (
    <div
      className={`${style} rounded-2xl p-1 m-1 flex shadow-sm shadow-slate-700 dark:shadow-neutral-400`}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-neutral-200"
      >
        {getIcon(icon)}
      </a>
    </div>
  );
};

export default MediaButton;
