type IOddButtonProps = {
    children: React.ReactNode,
    onClick: () => void
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const style = {
    minWidth: 100,
}

export default function OddButton(props: IOddButtonProps) {
    return (
        <button {...props} style={{
            ...style,
            ...props.style
        }}>
            {props?.children}
        </button>
    )
}