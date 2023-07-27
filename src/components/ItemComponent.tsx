import { IItem } from "../types/data";
import ButtonComponent from "./ButtonComponent";

const ItemComponent: React.FC<IItem> = ({id, text, tags}) => {
  return (
    <div
    style={{
      width: "363px",
      border: "1px solid black",
      borderRadius: "7px",
      display: "flex",
      flexDirection: "column",
      padding: "5px",
      marginTop: "10px",
    }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{text}</span>
        <ButtonComponent
          text="Delete"
          width="50px"
          height="30px"
          itemID={id}
          mode="DELETE"
        />
      </div>
      <div style={{display:"flex", flexWrap: "wrap", width: "315px"}}>
        {tags?.map((el: string) => (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              width: "fit-content",
              padding: "2px 10px 2px 10px",
              margin: "7px 7px 0px 0px"
            }}
            key={id + el}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default ItemComponent;