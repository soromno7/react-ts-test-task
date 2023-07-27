import { ChangeEvent } from "react";
import { IInputProps } from "../types/data";

const InputComponent: React.FC<IInputProps> = ({
  plcholder,
  height,
  width,
  inputHandler,
  inputData
}) => {
  return (
    <input
      type="text"
      placeholder={plcholder}
      style={{ width: `${width}`, height: `${height}` }}
      value={inputData}
      onChange={inputHandler !== undefined ? (e: ChangeEvent<HTMLInputElement>) => inputHandler(e.target.value) : () => null}
    />
  );
};

export default InputComponent;
