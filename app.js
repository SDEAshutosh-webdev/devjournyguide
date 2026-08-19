// Realistic Frontend Developer Journey & Roadmap Guide JS

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initQuoteRotator();
});

// Timeline and Skill Pillars Filter Logic
function initFilters() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const skillCards = document.querySelectorAll('.skill-pillar-card');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter Skill Pillars
      skillCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Filter Timeline Items
      timelineItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Live Search Filter
  const searchInput = document.getElementById('skillSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      skillCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// Auto-Changing Motivating Quotes Rotator Logic
function initQuoteRotator() {
  const quotes = [
    { text: '"The expert in anything was once a beginner."', author: "Helen Hayes" },
    { text: '"Consistency over intensity. Small daily progress leads to giant career leaps."', author: "Developer Proverb" },
    { text: '"First, solve the problem. Then, write the code."', author: "John Johnson" },
    { text: '"It’s not a bug – it’s an undocumented feature."', author: "Anonymous" },
    { text: '"The secret of getting ahead is getting started."', author: "Mark Twain" },
    { text: '"Code is like humor. When you have to explain it, it’s bad."', author: "Cory House" },
    { text: '"Simplicity is prerequisite for reliability."', author: "Edsger W. Dijkstra" }
  ];

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteContainer = document.getElementById('quoteContainer');

  if (!quoteText || !quoteAuthor || !quoteContainer) return;

  // Initial transition style
  quoteContainer.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

  let currentIndex = 0;

  setInterval(() => {
    // Fade out
    quoteContainer.style.opacity = '0';
    quoteContainer.style.transform = 'translateY(8px)';

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % quotes.length;
      quoteText.textContent = quotes[currentIndex].text;
      quoteAuthor.textContent = quotes[currentIndex].author;

      // Fade in
      quoteContainer.style.opacity = '1';
      quoteContainer.style.transform = 'translateY(0)';
    }, 400);
  }, 4000);
}
