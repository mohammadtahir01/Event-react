export default function Form() {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const size = inputValue.length; // Get the size of the string number
        console.log("Size of input:", size);
    };

    return (
        <>
            <input type="number" onChange={handleInputChange} />
        </>
    );
}