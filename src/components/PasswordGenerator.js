import React, { useState } from 'react';
import usePasswordGenerator from '../hooks/use-password-generator';
import StrengthIndicator from './StrengthIndicator';
import '../style.css';

const PasswordGenerator = () => {
    const [copied, setCopied] = useState(false);

    const [length, setLength] = useState(4);

    const { password, error, generatePassword } = usePasswordGenerator();

    const [checkBoxData, setCheckBoxData] = useState([
        { title: "Include Uppercase Letters", state: false },
        { title: "Include Lowercase Letters", state: false },
        { title: "Include Numbers", state: false },
        { title: "Include Symbols", state: false }
    ]);


    const handleCheckbox = (index) => {
        const updateCheckBoxData = [...checkBoxData];
        updateCheckBoxData[index].state = !updateCheckBoxData[index].state;
        setCheckBoxData(updateCheckBoxData)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    return (
        <div className="password-generator">
            <span className="password_title">Password Generator</span><br/>
            {password && <div className="copy-content">
                <span className="title">{password}</span>
                <button className="copybtn" onClick={() => handleCopy()}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
            }
            <div className="characterLength">
                <span><label>Character Length</label>: <label>{length}</label>
                </span>
            </div>
            <div className="slider">
                <input type="range" min={4} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div className='checkBox'>
                {checkBoxData.map((data, index) => {
                    return <div key={index}>
                        <input type="checkbox" checked={data.state} onChange={() => handleCheckbox(index)} />
                        <label>{data.title}</label>
                    </div>
                })
                }
            </div>
            {error && <span className="error">{error}</span>}
            {<StrengthIndicator password={password} />}
            <button className="generateBtn" onClick={() => generatePassword(checkBoxData, length)}>Generate Password</button>
        </div>
    )
}

export default PasswordGenerator
