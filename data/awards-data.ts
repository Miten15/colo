import { AwardYear } from '../types/awards'

export const awardsData: Record<string, AwardYear> = {
  "2024": {
    year: "2024",
    theme: {
      title: "CYBER KNIGHTS",
      subtitle: "DSCI EXCELLENCE AWARDS 2024",
      bannerImage: "/assets/banners/cyber-knights-2024.jpg"
    },
    segments: {
      corporate: {
        objectives: [
          "Recognition & Honour: Recognize, honour and reward organizations and individuals who have taken strategic, proactive and innovative security and privacy efforts...",
          "Elevate the role of Security Function: Highlight the importance of security function and its contribution...",
          "Awareness and knowledge: Bring about awareness towards the need for information security and privacy..."
        ],
        categories: [
          "Security Leader of the Year",
          "Privacy Leader of the Year",
          // Add other categories
        ],
        winners: [
          {
            name: "Dhananjay Khanna",
            title: "Senior Vice President - CISO",
            organization: "SBI Cards (BFSI)",
            image: "/assets/winners/2024/dhananjay-khanna.jpg",
            category: "Security Leader of the Year"
          },
          // Add other winners
        ]
      },
      // Add product and law enforcement segments
    },
    timeline: [
      {
        date: "2023-12-01",
        title: "Nominations Open",
        description: "Start submitting nominations for all categories",
        status: "completed"
      },
      // Add other timeline events
    ],
    partners: [
      {
        name: "PwC",
        logo: "/assets/partners/pwc-logo.png",
        type: "process"
      }
      // Add other partners
    ]
  },
  // Add data for other years
}

