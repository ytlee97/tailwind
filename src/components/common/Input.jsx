function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder } = props;
  return (
    <input
      className={"w-full bg-[#3C3C3C]"}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
