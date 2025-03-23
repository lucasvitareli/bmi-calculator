import style from './Form.module.css';

function Form({ height, setHeight, weight, setWeight, calcBmi }) {
    return (
        <div>
            <h2 className={style.slogan}>Calculate your BMI</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label> Height (cm): </label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div>
                    <label> Weight (kg): </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <button onClick={calcBmi}> Calculate BMI </button>
            </form>
        </div>
    )
}

export default Form;