// Helper function to bind inputs to live outputs
function bindInput(inputId, outputId, defaultValue) {
  const inputEl = document.getElementById(inputId);
  const outputEl = document.getElementById(outputId);

  inputEl.addEventListener('input', () => {
    outputEl.textContent = inputEl.value.trim() !== '' ? inputEl.value : defaultValue;
  });
}

// Simple Text Bindings
bindInput('in-name', 'out-name', 'Anagha T L');
bindInput('in-tagline', 'out-tagline', 'Engineering Student | Software Developer');
bindInput('in-about', 'out-about', 'Passionate developer focused on building functional software solutions.');
bindInput('in-project-title', 'out-project-title', 'MedVision AI');
bindInput('in-project-desc', 'out-project-desc', 'A healthcare platform using AI to assist in medical imaging analysis.');
bindInput('in-email', 'out-email', 'anagha@example.com');

// Dynamic Skills Tag Generator
const skillsInput = document.getElementById('in-skills');
const skillsOutput = document.getElementById('out-skills');

skillsInput.addEventListener('input', () => {
  const skillsArray = skillsInput.value.split(',').filter(s => s.trim() !== '');
  
  if (skillsArray.length === 0) {
    skillsOutput.innerHTML = `
      <span class="tag">C++</span>
      <span class="tag">HTML/CSS</span>
      <span class="tag">JavaScript</span>
    `;
    return;
  }

  skillsOutput.innerHTML = skillsArray
    .map(skill => `<span class="tag">${skill.trim()}</span>`)
    .join('');
});
