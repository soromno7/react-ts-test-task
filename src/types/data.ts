import { Dispatch, SetStateAction } from "react"

interface IButtonProps {
    text: string
    width?: string
    height?: string
    bgColor?: string
    data?: string
    setHandler?: Dispatch<SetStateAction<string>> | void 
    setNotes?: Dispatch<SetStateAction<IItem[]>> 
    mode: string
    itemID?: string
    dataArr?: string[]
}

interface IFilterProps {
    setNotes: Dispatch<SetStateAction<IItem[]>>
}

interface IInputProps {
    plcholder?: string
    width?: string
    height?: string
    inputHandler?: Dispatch<SetStateAction<string>>
    inputData?: string
}

interface IItem {
    id: string
    text: string
    tags: string[]
}

interface IContainerProps {
    mode?: string
    dataArr?: IItem[]
    setNotes: Dispatch<SetStateAction<IItem[]>>
    notes: IItem[]
}

export type {
    IButtonProps,
    IInputProps,
    IItem,
    IContainerProps,
    IFilterProps,
}