import React, { useEffect, useRef, useState } from 'react';
import './input.css';

const operators = {
    'Kyivstar': [67, 68, 96, 97, 98],
    'Vodafone': [50, 66, 95, 99],
    'Lifecell': [63, 73, 93],
    '3mob': [91],
    'People.net': [92],
    'intertelecom': [89, 94],
};

export default function Input() {
    const operatorRef = useRef();
    const phoneRef = useRef();

    const [operatorValue, setOperatorValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [operatorName, setOperatorName] = useState('');
    const [checkIcon, setCheckIcon] = useState(' - ');

    useEffect(() => {
        operatorRef.current.focus();
    }, []);

    const operatorChangeHandler = (e) => {
        const naturalNumberRegex = /^\d*$/;
        const newValue = e.target.value;

        if (naturalNumberRegex.test(newValue) || e.nativeEvent.inputType === 'deleteContentBackward') {
            setOperatorValue(newValue);

            if (newValue.length === 2) {
                phoneRef.current.focus();

                for (let operator of Object.keys(operators)) {
                    if (operators[operator].includes(Number(newValue))) {
                        setOperatorName(operator);
                        break;
                    } else {
                        setOperatorName('Unknown');
                    }
                }

            } else {
                setOperatorName('');
            }

        } else {
            e.preventDefault();
        }
    }

    const phoneChangeHandler = (e) => {
        const naturalNumberRegex = /^\d*$/;
        const newValue = e.target.value;

        if (naturalNumberRegex.test(newValue) || e.nativeEvent.inputType === 'deleteContentBackward') {
            setPhoneValue(newValue);
            if (operatorValue.length === 2 && newValue.length === 7) {
                setCheckIcon(' ✔️ ');
                console.log(operatorValue.length);
                console.log(newValue.length);
            } else {
                setCheckIcon(' - ');
                console.log(operatorValue.length);
                console.log(newValue.length);
            }
        } else {
            e.preventDefault();
        }
    }

    return <div>
        <span className='operator-name' data-testid="operator-name">{operatorName}</span>
        <span>+38 0</span>
        <input
            type="text"
            data-testid="operator-input"
            className='operator-input'
            maxLength='2'
            ref={operatorRef}
            value={operatorValue}
            onInput={operatorChangeHandler}
        />
        <span data-testid="check-icon" className='check-icon'>{checkIcon}</span>
        <input
            type="text"
            data-testid="phone-input"
            className='phone-input'
            maxLength='7'
            ref={phoneRef}
            value={phoneValue}
            onInput={phoneChangeHandler}
        />
    </div>;
}
