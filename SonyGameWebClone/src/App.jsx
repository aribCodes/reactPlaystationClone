import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';
import GameSlider from './components/sliders/gamesSlider/GameSlider';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GameSlider />
      </div>
    </>
  )
}

export default App
