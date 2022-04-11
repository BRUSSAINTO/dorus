function CustomButton(props) {
  const handlerChangeClassName = () =>
    props.color === "primary"
      ? `customButton customButton_${props.color} ${props.className} `
      : `customButton ${props.className}`;

  return (
    <button {...props} className={handlerChangeClassName()}>
      {props.children}
    </button>
  );
}

export default CustomButton;
