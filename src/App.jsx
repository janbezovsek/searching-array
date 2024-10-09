import { } from 'react'
import './App.css'
import SearchComponent from './SearchComponent'

function App() {
  
  const data = ['Omega', 'Rolex', 'AP', 'Longines', 'Tissot', 'Mido', 'Certina', 'Tudor', 'Casio', 'Breitling', 'Cartier', 'Bulova', 'Doxa']

  return (
    <div className="App">
      <h1>Search Example</h1>
      <SearchComponent data={data} />
    </div>
  )
}

export default App
