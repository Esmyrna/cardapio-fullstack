import { InputText, Label } from "./style"


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

export const Input: React.FC<InputProps> = ({label, value, updateValue}: InputProps) => {
    return(
        <>
        <Label>{label}</Label>
        <InputText value={value} onChange={e => updateValue(e.target.value)}></InputText>
        </>
    )
}