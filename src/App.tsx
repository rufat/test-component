/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import AllMatches from './components/AllMatches'
import OddButton from './components/OddButton'
import methods from './methods'

function App() {
  return (
    <>
      <AllMatches>
        {
          (match: any) => {
            return (
              <div key={match.id} style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <h4 style={{
                  width: 500,
                  textAlign: "start"
                }}>{match.name}</h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                }}>
                  {
                    match.odds.map((odd: any) => {
                      return (
                        <OddButton key={odd.id} onClick={() => methods.selectOdd(odd.odds)}>
                          {odd.odds}
                        </OddButton>
                      )
                    })
                  }
                </div>
              </div>
            )
          }
        }
      </AllMatches>
    </>
  )
}

export default App
