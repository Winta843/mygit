// Define a simple function
function f(x) {
    // An example function: f(x) = x^2 + 3x + 2
    return x * x + 3 * x + 2;
}

// Define derivative of the function
function df(x) {
    // Derivative of f(x) = 2x +3
    return 2 * x + 3;
}

// The Gradient descent algorithm 
function gradientDescent(initialGuess, learningRate, tolerance) {
    let x = initialGuess; // Start from initial guess
    let prevX = x; // Store the previous value of x

    // Until the change in x is small enough keep looping
    do {
        prevX = x; // Save the cuurent x 
        // By using a formula that helps find the minimum of a function update x
        x = x - learningRate * df(x);
    } while (Math.abs(prevX - x) > tolerance); // keep going until x doesn't change much

    return x; // Return value of x that gives theminimum of the function 
}

// Set initial parameters
const initialGuess = 0; // Begin from x = 0
const learningRate = 0.1; // How big of a step to be taken in each iteration 
const tolerance = 0.0001; // How close we want to get to the minimum

// Use gradient descent to find the minimum of the function 
const optimum = gradientDescent(initialGuess, learningRate, tolerance);

// Display the result 
console.log("Optimal value of x:", optimum);
console.log("Minimum value of f(x):", f(optimum));