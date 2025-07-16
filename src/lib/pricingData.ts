export interface PricingTier {
  name: string;
  features: string[];
  price: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Free Trial",
    features: [
      "1 itinerary",
      "Save & share",
      "Markdown export",
      "AI-powered destination suggestions",
      "Browse public itineraries",
    ],
    price: "$0",
  },
  {
    name: "Lite Pack",
    features: [
      "5 credits (1 itinerary = 1 credit)",
      "All export formats (PDF, Markdown, Plain Text)",
      "Save & share",
      "Smart activity recommendations",
      "Priority generation speed",
    ],
    price: "$4.99",
  },
  {
    name: "Traveler Pack",
    features: [
      "20 credits",
      "All export formats (PDF, Markdown, Plain Text)",
      "Save, share & sync across devices",
      "Smart activity & restaurant suggestions",
      "Real-time collaboration",
      "Weather-aware planning",
      "Multiple-day trip support",
      "Reorder & edit trips easily",
      "Offline access (PDF download)",
      "Priority AI generation & support",
    ],
    price: "$14.99",
  },
];
