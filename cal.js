
document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');

    
    // number function
    function appendNumber(number) {
        //Function to append numbers to the display
        display.value += number
    }
    // operator function 
    function appendOperator(digit_index) {

        //Function to append digit_index to the display
        display.value += digit_index
    }
    // decimal function
    function appendDecimal(dot) {
        // Function to append decimal to the display
        display.value += dot;
    }
    // clear function
    function appendClear(delect) {
        // Function to clear the display
        display.value = " "
    }
    // backspace function
    function deleteLastCharacter() {
        display.value = display.value.slice(0, -1);
    }
    // results function
    function appendOperators(results) {
       // Function to perform operations
    //    display.value = eval(display.value) 
    //    display.value = displayConstantLeft(display.value) 
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    } 
    
    
    // Function to handle keyboard input
    //  function handleKeyPress(event) {
    //     const key = event.key;
    //     if (!isNaN(key)) {
    //         appendNumber(key);
    //     } else if (key === '.') {
    //         appendDecimal(key);
    //     } else if (['+', '-', '*', '/'].includes(key)) {
    //         appendOperator(key);
    //     } else if (key === 'Enter') {
    //         appendOperators();
    //     } else if (key === 'Backspace') {
    //         deleteLastCharacter();
    //     } else if (key === 'Escape') {
    //         appendClear();
    //     }
    // }

    // Add event listener for keypress input
    // document.addEventListener('keypress', handleKeyPress);

    window.deleteLastCharacter = deleteLastCharacter;
    window.appendOperators = appendOperators;
    window.appendClear = appendClear;
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.appendDecimal = appendDecimal;

    // Keydown event listener
    document.addEventListener('keydown', function(e) {
        // The keydown event is now used instead of `keypress`. The `keydown` event captures more keys, including the Backspace key.
        const key = e.key;

        if (key >= '0' && key <= '9') {
            appendNumber(key);
        } else if (key === '.') {
            appendDecimal(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            appendOperator(key);
        } else if (key === 'Enter') {
            appendOperators();
        }   else if (key === 'Backspace') {
            deleteLastCharacter();
        } else if (key === 'c' || key === 'C') {
            appendClear();
        }
    });
});
