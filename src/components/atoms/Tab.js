import Text from "./Text";

const Tab = ({ name, background, action }) => {
  return (
    <button
      className={`${background} cursor-pointer hover:bg-zinc-800 dark:hover:bg-black min-w-[90px] flex-wrap rounded-t-lg showXs:min-w-[64px]`}
      onClick={action}
    >
      <Text text={name} className="p-1 mx-2" />
    </button>
  );
};

export default Tab;
