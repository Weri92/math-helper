document.getElementById('solveBtn').addEventListener('click', function() {
    const input = document.getElementById('mathInput').value;
    const solutionDiv = document.getElementById('solution');
    const problemType = document.getElementById('problemType').value;
    const graphCanvas = document.getElementById('graphCanvas');
    // Clear previous results
    solutionDiv.innerHTML = "";
    graphCanvas.style.display = "none";
    // Check for empty input
    if (!input) {
        solutionDiv.innerHTML = "Please enter a math problem!";
        return;
    }
    try {
        let result, explanation;
        if (problemType === "arithmetic") {
            result = eval(input);
            explanation = The result of ${input} is ${result}.;
        } else if (problemType === "geometry") {
            // For simplicity, let's compute the area of a rectangle (length * width)
            let dimensions = input.split(",");
            if (dimensions.length === 2) {
                let length = parseFloat(dimensions[0]);
                let width = parseFloat(dimensions[1]);
                result = length * width;
                explanation = The area of a rectangle with length ${length} and width ${width} is ${result}.;
            } else {
                explanation = "Please enter dimensions in the format 'length,width'.";
            }
        } else if (problemType === "fractions") {
            // Simple fraction addition example (e.g., "1/2 + 1/3")
            let fraction = input.split('+').map(f => eval(f.trim()));
            result = fraction.reduce((a,b) => a + b, 0);
            explanation = The sum of fractions ${input} is ${result}.;
        } else if (problemType === "decimals") {
            result = eval(input);
            explanation = The result of ${input} (with decimals) is ${result}.;
        }
        // Display the result and explanation
        solutionDiv.innerHTML = 
            <h2>Solution:</h2>
            <p>${explanation}</p>
        ;
        // Create a graph if it's a geometric solution
        if (problemType === "geometry") {
            graphCanvas.style.display = "block";
            drawRectangleGraph(length, width);
        }
    } catch (err) {
        solutionDiv.innerHTML = "There was an error solving your problem. Please check your input.";
    }
});
The result of ${input} is ${result}.The area of a rectangle with length ${length} and width ${width} is ${result}.The sum of fractions ${input} is ${result}.The result of ${input} (with decimals) is ${result}.
            <h2>Solution:</h2>
            <p>${explanation}</p>
        
