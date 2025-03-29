import style from './Form.module.css';

function Form({ height, setHeight, weight, setWeight, calcBmi, resetAll }) {
    return (
        <div>
            <h2 className={style.slogan}>Calculate your BMI</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label> Height (cm): </label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label> Weight (kg): </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.buttonCalculate} onClick={calcBmi}> Calculate BMI </button>
                    <button className={style.buttonReset} onClick={resetAll}> Reset</button>
                </div>
            </form>
        </div>

    )
}

export default Form;

