import dummyMatches from '../data/dummyMatches.json';

type IAllMatchesProps = {
    children: (match: never) => React.ReactNode,
    style?: React.CSSProperties
    className?: string
}

export default function AllMatches({ children, style, className }: IAllMatchesProps) {
    return (
        <div style={style} className={className}>
            <h1>Maçlar</h1>
            {
                dummyMatches.map((match) => {
                    return children(match as never)
                })
            }
        </div>
    )
}