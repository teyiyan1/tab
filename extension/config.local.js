/* ================================================================
   Personal config — gitignored
   Custom grouping rules for Tab Out dashboard
   ================================================================ */

// Merge tabs from multiple Shopee domains into one card.
// Use `subGroup` to create a labeled sub-section within the card.
const LOCAL_CUSTOM_GROUPS = [
  {
    hostnameEndsWith: 'seller.shopee.com',
    groupKey:   'shopee-project',
    groupLabel: 'Shopee Project',
  },
  {
    hostnameEndsWith: 'open.shopee.com',
    groupKey:   'shopee-project',
    groupLabel: 'Shopee Project',
  },
  {
    hostnameEndsWith: 'cs.shopee.tw',
    pathPrefix: '/chatbot',
    groupKey:   'shopee-project',
    groupLabel: 'Shopee Project',
    subGroup:   'Chatbot',
  },
];

// No personal landing page overrides (uses app.js defaults)
const LOCAL_LANDING_PAGE_PATTERNS = [];
