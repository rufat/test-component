import dummyMatches from '../data/dummyMatches.json';

type IAllMatchesProps = {
    children: (match: never) => React.ReactNode,
    style?: React.CSSProperties
    className?: string
}

export default function AllMatches(props: IAllMatchesProps) {
    return (
        <div {...props} style={props?.style} className={props?.className}>
            <h1>Maçlar</h1>
            {
                dummyMatches.map((match) => {
                    return props?.children(match as never)
                })
            }
        </div>
    )
}