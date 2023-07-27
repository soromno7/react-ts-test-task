import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { IContainerProps, IItem } from "../types/data";
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";

const Container : React.FC<IContainerProps> = ({notes, setNotes}) => {

  const [messages, loading] = useCollectionData(collection(db, "notes"));

  // const [notes, setNotes] = useState<IItem[]>([])

  const getNotes = async (mode?: string, dataArr?: string[]) => {
    const res: IItem[] = []

    // if(mode === "GET_ALL"){
      const doc_refs = await getDocs(collection(db, 'notes'))

      doc_refs.forEach(note => {
          res.push({
              id: note.id,
              text: note.data().text,
              tags: note.data().tags
          })
      })
    // }
    // else if(mode === "GET_FILTERED"){
      // const docs = await getDocs(query(collection(db, 'notes'), where('tags', 'array-contains-any', dataArr)));
      // docs.forEach(note => {
      //   res.push({
      //       id: note.id,
      //       text: note.data().text,
      //       tags: note.data().tags
      //   })
      // })
    // }

    setNotes(res)
  }


  useEffect(() => {
    getNotes('GET_ALL')
  }, [messages])

  if (loading) return <div>Loading...</div>;

  return (
    <div>
    {notes.map((el) => (
      <ItemComponent text={el.text} id={el.id} tags={el.tags} key={el.id}/>
    ))}
    {notes.length === 0 ? <span>There are no notes yet</span> : ""}
    </div>
  );
};

export default Container;
