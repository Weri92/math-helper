function drawRectangleGraph(length, width) {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    // Clear the previous drawing
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Draw rectangle
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(50, 50, length * 10, width * 10); // Scale for visibility
    // Add labels
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(Length: ${length}, 10, 30);
    ctx.fillText(Width: ${width}, 10, 60);
    ctx.fillText(Area: ${length * width}, 10, 90);
}
Length: ${length}Width: ${width}Area: ${length * width}
