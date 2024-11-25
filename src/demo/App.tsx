/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import AllMatches from '../components/AllMatches'
import OddButton from '../components/OddButton'
import methods from '../methods'

const styles = {
  matchItem: {
    display: 'flex',
    alignItems: 'center',
  },
  matchTitle: {
    width: 500,
    textAlign: "start"
  },
  oddButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  }
}

function App() {
  return (
    <>
      <AllMatches>
        {
          (match: any) => {
            return (
              <div key={match.id} style={styles.matchItem}>
                <h4 style={styles.matchTitle as never}>{match.name}</h4>
                <div style={styles.oddButtonContainer as never}>
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
          }}
      </AllMatches>
      <a href="https://github.com/rufat/test-component/blob/main/src/demo/App.tsx" target="_blank">Github repo</a>
    </>
  )
}

export default App
