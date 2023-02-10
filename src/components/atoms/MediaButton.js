import { getIcon } from "@/utils/constants";

const MediaButton = ({ icon, url }) => {
  return (
    <div className="bg-lime-400 dark:bg-red-500 max-w-max rounded-2xl p-0.5 m-1 flex border-slate-800 border-solid border-2 dark:border-neutral-200">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="dark:text-neutral-200 text-slate-800"
      >
        {getIcon(icon)}
      </a>
    </div>
  );
};

export default MediaButton;
