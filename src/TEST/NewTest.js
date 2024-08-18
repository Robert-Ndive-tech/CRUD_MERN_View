import { useEffect } from 'react';

function disableScrollOnNumberInput(inputElement) {
    // Listen for the 'wheel' event on the input element
    inputElement.addEventListener('wheel', function (event) {
        // Prevent the default scroll behavior
        event.preventDefault();
    });

    // Optionally, disable arrow keys as well (Up/Down arrows)
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
        }
    });
}

const MyComponent = () => {
    useEffect(() => {
        // Select all number input fields after the component mounts
        const numberInputs = document.querySelectorAll('input[type="number"]');
        numberInputs.forEach(input => disableScrollOnNumberInput(input));

        // Cleanup function to remove event listeners if needed
        return () => {
            numberInputs.forEach(input => {
                input.removeEventListener('wheel', event => event.preventDefault());
                input.removeEventListener('keydown', event => {
                    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                        event.preventDefault();
                    }
                });
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <label htmlFor="numberInput">Enter a number:</label>
            <input type="number" id="numberInput" />
        </div>
    );
};

export default MyComponent;
