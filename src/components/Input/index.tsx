import * as C from './styles'

type InputProps = {
    text: string
}

export const Input = ({ text }: InputProps) => {
    return (
        <C.ContainerInput>
            <C.Input>{text}</C.Input>
        </C.ContainerInput>
    )
}