const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="resetButton" onClick={handleReset}>
      Reset
    </button>
  );
};
export default Reset;
