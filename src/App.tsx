import InputGroup from "./components/InputGroup";
import Container from "./components/Container";
import Filter from "./components/Filter";
import { useContext, useState } from "react";
import { IItem } from "./types/data";

const App = () => {

  const [notes, setNotes] = useState<IItem[]>([])

  return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <InputGroup />
        <div style={{ display: "flex", marginRight: "283px"}}>
          <Filter setNotes={setNotes} />
          <Container setNotes={setNotes} notes={notes} />
        </div>
      </div>
  );
};

export default App;
