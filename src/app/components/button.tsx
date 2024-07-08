type ButtonProps = {
    onclick: () => void
    label: string,
}

export default function Button({ onclick, label, ...rest }: ButtonProps) {
    return (
        <button onClick={onclick} {...rest} >
            {label}
        </button>
    )
}