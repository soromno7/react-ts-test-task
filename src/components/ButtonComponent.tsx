import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { IButtonProps, IItem } from "../types/data";
import { db } from "../firebase";

const ButtonComponent: React.FC<IButtonProps> = ({
  text,
  width,
  height,
  bgColor,
  data,
  setHandler,
  mode,
  itemID,
  dataArr,
  setNotes
}) => {

  const checkTags = (str: string | undefined) => {
    let tagsArr: string[] = [];

    if(str !== undefined){
      let splitted = str.split(" ")
      splitted.forEach(el => {
        if(el.includes("#") && el.length > 1 && !tagsArr.includes(el)) tagsArr.push(el)
      })
    }

    return tagsArr;
  }

  const handleClick = async () => {

    if(mode === 'ADD'){
      let str = data
      if(data === '') return
      if(setHandler !== undefined) setHandler('')

      await addDoc(collection(db, "notes"), {
        text: str,
        tags: checkTags(str)
      })
    }
    else if(mode === "DELETE" && itemID !== undefined){
      await deleteDoc(doc(db, "notes", itemID));
    }
    else if(mode === "FILTER" && dataArr && dataArr[0] !== '' && setNotes !== undefined){
      const resArr: IItem[] = []

      const docs = await getDocs(query(collection(db, 'notes'), where('tags', 'array-contains-any', dataArr)));
      docs.forEach(note => {
        resArr.push({
            id: note.id,
            text: note.data().text,
            tags: note.data().tags
        })
      })

      setNotes(resArr)
    }
  }

  return (
    <button
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${bgColor}`,
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
