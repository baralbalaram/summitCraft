// FAQ accordion — works on any page with .faq-item / .faq-q elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    const icon = item.querySelector('.faq-icon');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close siblings in the same faq-wrap (accordion behaviour)
      const wrap = item.closest('.faq-wrap');
      if (wrap) {
        wrap.querySelectorAll('.faq-item.open').forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const openIcon = openItem.querySelector('.faq-icon');
            if (openIcon) openIcon.textContent = '+';
          }
        });
      }
      item.classList.toggle('open', !isOpen);
      if (icon) icon.textContent = !isOpen ? '−' : '+';
    });
  });

  // Quote form — only present on quote.html
  const roleSelect = document.getElementById('role');
  const categorySelect = document.getElementById('category');
  const materialField = document.getElementById('material-field');
  const priceBox = document.getElementById('price-box');
  const priceValue = document.getElementById('price-value');
  const form = document.getElementById('quote-form');
  const confirmation = document.getElementById('confirmation');

  // Dummy pricing, for layout only — replace with real pricing once set
  const priceMap = {
    'Wedding Album': 4500,
    'Photo Book': 2200,
    'Canvas Print': 1800,
    'Property Brochure': 15000,
    'Site Signage': 25000,
    'Business Cards': 1200,
    'Packaging': 8000,
    'Brochure': 6000,
    'Calendar': 3000,
    'Sticker': 900
  };

  if (roleSelect && materialField) {
    roleSelect.addEventListener('change', () => {
      materialField.style.display = roleSelect.value === 'Photographer' ? 'flex' : 'none';
    });
  }

  if (categorySelect && priceBox && priceValue) {
    categorySelect.addEventListener('change', () => {
      const price = priceMap[categorySelect.value];
      if (price) {
        priceValue.textContent = '₹' + price.toLocaleString('en-IN');
        priceBox.classList.add('show');
      } else {
        priceBox.classList.remove('show');
      }
    });
  }

  if (form && confirmation) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      confirmation.classList.add('show');
    });
  }
});
