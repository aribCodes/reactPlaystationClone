import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GameSlider />
      </div>
      <div>
        <ProductSlider />
      </div>
    </>
  )
}

export default App
