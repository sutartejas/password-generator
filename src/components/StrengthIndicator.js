import React from "react";

const StrengthIndicator = ({password}) => {

    const getPasswordStrength = () => {
        const passLength = password.length;
        if (passLength < 1) {
            return ""
        }
        else if (passLength < 4) {
            return "Very Weak"
        }
        if (passLength < 8) {
            return "Poor"
        }
        if (passLength < 12) {
            return "Medium"
        }
        if (passLength < 16) {
            return "Strong"
        }
        else {
            return "Very Strong"
        }
    }

    const passwordStrength = getPasswordStrength();

    if (!passwordStrength) return <React.Fragment />;

    return <div className="strength">
        Strength: <span>
            {passwordStrength}
        </span>
    </div>

}

export default StrengthIndicator;