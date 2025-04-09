// Function to switch between dashboard sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content .section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
  }
  