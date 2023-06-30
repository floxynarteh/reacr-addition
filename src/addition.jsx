import React, {useState} from "react";

export const Addition = () => {

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [total, setTotal] = useState(firstNumber + secondNumber);

    function summation (){
        setTotal(firstNumber + secondNumber)
    }
    return(
        
        <div className="input-number">
            <h1> Adding Two Numbers</h1>
            <input type="number" placeholder="Enter first number" value={firstNumber} onChange={e => setFirstNumber (+e.target.value)}/>
            <input type="number" placeholder="Enter second number" value={secondNumber} onChange={e => setSecondNumber (+e.target.value)}/>

            <button  onClick ={summation}> Click to add numbers</button>
            <h2>{total}</h2>
        </div>
    
        )
}

