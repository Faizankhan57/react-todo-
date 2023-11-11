import "./input.css"

const InputTodoAdd = ({ value, onChange }) => {
  return (
    <>
      <input
      className="Input"
        label="Add Todo"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputTodoAdd;
