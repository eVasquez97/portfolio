import Text from "./Text";

const Tab = ({ name, background, action }) => {
  return (
    <button
      className={`${background} cursor-pointer hover:bg-gray-300 dark:hover:bg-black min-w-[90px] flex-wrap 
      showXs:min-w-[64px] mt-[1px]`}
      onClick={action}
    >
      <Text
        text={name}
        className="p-1 mx-1"
        color={background === "" ? "inactive" : "alt"}
      />
    </button>
  );
};

export default Tab;
