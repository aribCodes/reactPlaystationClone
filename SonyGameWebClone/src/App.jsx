import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';
import ProductSlider from './components/sliders/productSlider/ProductSlider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <div>
        <ProductSlider />
      </div>
    </>
  )
}

export default App
