export const COLORS = {
  bg: '#0B0F17',
  surface: '#0f131c',
  low: '#181c24',
  container: '#1c2028',
  high: '#262a33',
  primary: '#00e699',
  primaryBright: '#76ffbb',
  secondary: '#00d2ff',
  abb: '#FF0033',
};

export const NAV = [
  { label: 'Divisions', href: '#divisions' },
  { label: 'EV Solutions', href: '#solutions' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Packages', href: '#package' },
];

export const DIVISIONS = [
  {
    no: '01',
    title: 'EV Charging',
    lead: 'Commercial charging, end to end',
    desc: 'AC wallboxes and DC fast charging for commercial property — site survey, dynamic load management, OCPP back-office, RFID billing, and after-sales SLA.',
    tags: ['AC / DC', 'OCPP 1.6J', 'Load management'],
  },
  {
    no: '02',
    title: 'Electrical',
    lead: 'Certified power infrastructure',
    desc: 'LV panel builds, sub-metering, grounding, and cable containment. Installation and distribution upgrades engineered for continuous commercial load.',
    tags: ['LV panels', 'Grounding', 'Certified install'],
  },
  {
    no: '03',
    title: 'Computer Equipment',
    lead: 'Workplace IT, supplied and supported',
    desc: 'Workstations, networking, storage, and structured cabling — procured, configured, and maintained on site for offices and mixed-use assets.',
    tags: ['Hardware supply', 'Networking', 'Maintenance'],
  },
  {
    no: '04',
    title: 'Software Development',
    lead: 'Systems built around the operation',
    desc: 'Custom web platforms, operational dashboards, API integrations, and automation — from charging back-office to internal reporting tools.',
    tags: ['Web apps', 'Dashboards', 'Integration'],
  },
];

export const SECTORS = [
  { icon: 'corporate_fare', code: 'SECTOR_01', title: 'Office Buildings & Towers', desc: 'Increase tenant retention and attract ESG-conscious multinational anchor corporations with automated RFID employee access and centralized monthly billing logs.', tag1: 'High Tenant Retention', tag2: 'RFID Whitelist' },
  { icon: 'apartment', code: 'SECTOR_02', title: 'Apartments & Residences', desc: 'Private residential charging with Dynamic Load Management (DLM) to safeguard master transformer capacity without triggering sudden building blackouts.', tag1: 'DLM Auto-Balance', tag2: 'No Breaker Trips' },
  { icon: 'hotel', code: 'SECTOR_03', title: 'Hotels & Luxury Resorts', desc: 'A tier-one guest amenity that captures high-spending EV road-trippers and extended-stay executive travelers. Direct integration with room-folio billing.', tag1: 'Premium Hospitality', tag2: 'Folio Integration' },
  { icon: 'shopping_cart', code: 'SECTOR_04', title: 'Malls & Retail Centers', desc: 'Drive an average of +45 minutes extended dwell time per visitor and monetize customer parking turnover with branded high-visibility EV charging bays.', tag1: '+45m Dwell Time', tag2: 'High Revenue Yield' },
  { icon: 'restaurant', code: 'SECTOR_05', title: 'Dining & Lifestyle Hubs', desc: 'Destination charging during dining hours; frictionless QRIS e-wallet instant checkout and revenue sharing with tenant association management.', tag1: 'QRIS Self-Checkout', tag2: 'Auto Settlement' },
  { icon: 'local_shipping', code: 'SECTOR_06', title: 'Commercial Logistics Fleets', desc: 'Fleet depot overnight automated charging sequences programmed to capture scheduled off-peak discounted PLN industrial tariffs (22:00 - 05:00 WIB).', tag1: 'PLN Off-Peak Tariff', tag2: '30% OpEx Cut' },
];

export const ADDONS = [
  { name: 'Stainless Wall Hanger & Cable Saddle', price: 88800, checked: true },
  { name: 'Portable Industrial CEE Socket Upgrade', price: 260000, checked: false },
  { name: 'Extended 5m Cable (Total 10m Heavy Cable)', price: 950000, checked: false },
  { name: 'Dual-Port Galvanized Outdoor Pedestal', price: 2850000, checked: false },
];

export const BASE_PRICE = 15500000;

export function formatIDR(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID');
}
