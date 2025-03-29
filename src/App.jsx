import { useState } from 'react'

import Form from './components/form/Form'
import Result from './components/result/Result'

import styles from './components/form/Form.module.css'

function App() {
  const [height, setHeight] = useState(''); { console.log(height) }
  const [weight, setWeight] = useState(''); { console.log(weight) }
  const [bmi, setBmi] = useState(null)

  const calcBmi = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    if (!isNaN(heightInMeters) && !isNaN(weightInKg)) {
      const result = weightInKg / (heightInMeters * heightInMeters);
      setBmi(result.toFixed(2));
      console.log(result.toFixed(2));
    } else {
      console.log('Invalid input');
    }
  };

  const resetAll = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    console.log('reset');
  }

  return (
    <div className='container'>
      <div className='card'>
        <header>
          <h1 className={styles.title}>BMI Calculator</h1>
        </header>
        <Form height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} calcBmi={calcBmi} resetAll={resetAll}></Form>
        <Result bmi={bmi} />
      </div>
    </div>
  )
}

export default App

