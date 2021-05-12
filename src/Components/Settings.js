const Settings = (props) => {
  return (
    <div>
      <button
        value="setting"
        className="text-2xl my-4"
        onClick={(e)=>props.setAction(e)}
      >
        Settings
      </button>
    </div>
  );
};

export default Settings;
