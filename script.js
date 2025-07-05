
function updateRangeLabel(rangeInput, outputId) {
    const output = document.getElementById(outputId);
    if (output) {
        output.textContent = rangeInput.value;
    }
}

// Range slider values on load
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

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Step control
    showStep(1);
});

function toggleTheme() {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'light') {
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Progressive disclosure
let currentStep = 1;

function showStep(step) {
    for (let i = 1; i <= 3; i++) {
        const section = document.getElementById(`step${i}`);
        if (section) {
            section.style.display = (i === step) ? 'block' : 'none';
        }
    }
    currentStep = step;
}

function nextStep() {
    if (currentStep < 3) showStep(currentStep + 1);
}

function prevStep() {
    if (currentStep > 1) showStep(currentStep - 1);
}
