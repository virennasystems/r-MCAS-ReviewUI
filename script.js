
function updateRangeLabel(rangeInput, outputId) {
    const output = document.getElementById(outputId);
    if (output) {
        output.textContent = rangeInput.value;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const sliders = [
        { id: 'plausibility', output: 'plausibilityVal' },
        { id: 'relevance', output: 'relevanceVal' },
        { id: 'clarity', output: 'clarityVal' },
        { id: 'tolerance', output: 'toleranceVal' }
    ];
    sliders.forEach(slider => {
        const input = document.getElementById(slider.id);
        const output = document.getElementById(slider.output);
        if (input && output) {
            output.textContent = input.value;
        }
    });
});
