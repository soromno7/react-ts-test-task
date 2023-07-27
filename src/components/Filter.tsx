import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChangeEvent, useEffect, useState } from "react"
import InputComponent from "./InputComponent";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import ButtonComponent from "./ButtonComponent";
import { IFilterProps } from "../types/data";

const Filter : React.FC<IFilterProps> = ({setNotes}) => {

  const [tags, loading] = useCollectionData(collection(db, "notes"));
  const [arr, setArr] = useState<string[]>([]);

  const getUniqueTags = () => {
    let set = new Set();

    tags?.forEach(el => {
      el.tags.forEach((elem: string) => set.add(elem))
    })

    return Array.from(set) as string[]
  }

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      setArr([...arr, event.target.value])
    }
    else{
      setArr([...arr].filter(el => el !== event.target.value))
    }
  }
  
  return (
    <div style={{margin: "10px 25px 0px 0px"}}>
      <InputComponent width="250px"/>
      <div
        style={{display: "flex", flexDirection: "column", }}
      >
        {getUniqueTags().map((el, index) => 
          <div key={el + `${index}`} style={{padding: "2px"}}>
            <label style={{marginLeft: "5px"}}>
            <input type="checkbox" onChange={handleCheck} value={el} />
              {el}</label>
          </div>
        )}
      </div>
      <ButtonComponent text="Filter" mode="FILTER" width="100%" dataArr={arr} setNotes={setNotes}/>
    </div>
  );
}
 
export default Filter;