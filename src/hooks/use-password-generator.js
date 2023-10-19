import { useState } from "react"

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const generatePassword = (checkBoxData, length) => {
debugger;
        let charset ="";
        let generatedPassword = "";
        setError("")
        const selectedOptions = checkBoxData.filter(c => c.state);
        if (selectedOptions.length === 0) {
            setError('Select atleast one option.')
            setPassword("")
            return;
        }

        selectedOptions.forEach(option => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset = charset + "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset = charset + "0123456789";
                    break;
                case "Include Symbols":
                    charset = charset + "!@#$%^&*()";
                    break;
                default:
                    break;

            }
        });

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
        setError("");

    }

    return { password, error, generatePassword }

}

export default usePasswordGenerator;