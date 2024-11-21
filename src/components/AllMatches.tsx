import dummyMatches from '../data/dummyMatches.json';

type IAllMatchesProps = {
    children: (match: never) => React.ReactNode
}

export default function AllMatches({ children }: IAllMatchesProps) {
    return (
        <div>
            <h1>Maçlar</h1>
            {
                dummyMatches.map((match) => {
                    return children(match as never)
                })
            }
        </div>
    )
}