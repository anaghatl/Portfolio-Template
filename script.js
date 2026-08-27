// Helper function to bind inputs to live outputs
function bindInput(inputId, outputId, defaultValue) {
  const inputEl = document.getElementById(inputId);
  const outputEl = document.getElementById(outputId);

  inputEl.addEventListener('input', () => {
    outputEl.textContent = inputEl.value.trim() !== '' ? inputEl.value : defaultValue;
  });
}

// Neutral Fallback Values
bindInput('in-name', 'out-name', 'Alex Morgan');
bindInput('in-tagline', 'out-tagline', 'Full-Stack Developer | Computer Science Student');
bindInput('in-about', 'out-about', 'Passionate software developer dedicated to building clean, scalable web applications and solving complex algorithmic challenges.');
bindInput('in-project-title', 'out-project-title', 'Smart Task Manager');
bindInput('in-project-desc', 'out-project-desc', 'A responsive web application designed to track personal goals, manage daily workflows, and optimize daily productivity.');
bindInput('in-email', 'out-email', 'alex.morgan@example.com');

// Dynamic Skills Tag Generator
const skillsInput = document.getElementById('in-skills');
const skillsOutput = document.getElementById('out-skills');

skillsInput.addEventListener('input', () => {
  const skillsArray = skillsInput.value.split(',').filter(s => s.trim() !== '');
  
  if (skillsArray.length === 0) {
    skillsOutput.innerHTML = `
      <span class="tag">JavaScript</span>
      <span class="tag">Python</span>
      <span class="tag">React</span>
      <span class="tag">Git</span>
    `;
    return;
  }

  skillsOutput.innerHTML = skillsArray
    .map(skill => `<span class="tag">${skill.trim()}</span>`)
    .join('');
});
