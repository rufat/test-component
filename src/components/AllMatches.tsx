import dummyMatches from '../data/dummyMatches.json';

export default function AllMatches({ children }: { children: (match: never) => React.ReactNode }) {
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