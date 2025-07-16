export interface Feature {
  title: string;
  description: string;
  icon?: string; // emoji as string
}

export const features: Feature[] = [
  {
    title: "Instant Itinerary Builder",
    description:
      "Tell Travvy where you're going, and it builds your full trip in seconds — including daily schedules, attractions, and time-saving tips.",
    icon: "✈️",
  },
  {
    title: "Multiple Export Formats",
    description:
      "Download your itinerary as Markdown, PDF, or keep it saved in your account. Perfect for offline use or trip journals.",
    icon: "📂",
  },
  {
    title: "Share with Friends",
    description:
      "Easily share your travel plans with friends, family, or your group chat. Everyone stays in the loop — no messy spreadsheets.",
    icon: "👥",
  },
  {
    title: "AI-Personalized Trips",
    description:
      "Travvy learns your preferences. Whether you're a foodie, adventurer, or minimalist, you'll get plans that match your style.",
    icon: "🧠",
  },
  {
    title: "Done in Under 5 Minutes",
    description:
      "No more hours of tab-hopping. Get a ready-to-use travel plan faster than you can pack a bag.",
    icon: "⏱️",
  },
];
