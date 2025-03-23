import style from './Result.module.css';

function Result ({bmi}) {
    const getClassification = (bmi) => {
        if (bmi <18.5) return 'Underweight' ; 
        if (bmi < 24.9) return 'Normal weight' ;
        if (bmi < 29.9) return 'Overweight' ;
        if (bmi < 34.9) return 'Obesity (Class 1)' ;
        if (bmi < 39.9) return 'Obesity (Class 2)' ;
        return 'Obesity (Class 3)' ;
    };

    const getColor = (bmi) => {
        if (bmi == null) return style.defaultBackground ;
        if (bmi <18.5) return style.underweight ; 
        if (bmi < 24.9) return style.normal ;
        if (bmi < 29.9) return style.overweight ;
        if (bmi < 34.9) return style.obesity1 ;
        if (bmi < 39.9) return style.obesity2 ;
        return style.obesity3 ;
    }
    
    return (
        <div className='result'>
            <h2 className={style.bmiResult}>Your BMI is: {bmi}</h2>
            <p className={`${style.clasification} ${getColor(bmi)}`}>
                Classification: {getClassification(bmi)}
            </p>
        </div>
    );
}


export default Result;