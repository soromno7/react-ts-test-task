import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

const InputGroup: React.FC = () => {

  const [inputData, setInputData] = useState('');

  return (
    <div style={{
      width: "375px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <InputComponent plcholder="Enter string to create a note" width="300px" inputData={inputData} inputHandler={setInputData}/>
      <ButtonComponent text="Add" width="60px" height="25px" data={inputData} setHandler={setInputData} mode="ADD"/>
    </div>
  );
};

export default InputGroup;
