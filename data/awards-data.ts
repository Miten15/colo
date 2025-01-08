import { AwardYear } from '../types/awards';

export const awardsData: Record<string, AwardYear> = {
  "2025": {
    year: "2025",
    theme: {
      title: "COMING SOON",
      subtitle: "Stay tuned for updates!",
      bannerImage: "/assets/banners/coming-soon-2025.jpg"
    },
    segments: {
      corporate: {
        objectives: ["Details will be revealed soon."],
        categories: [],
        winners: []
      },
      product: {
        objectives: ["Details will be revealed soon."],
        categories: [],
        winners: []
      },
      lawEnforcement: {
        objectives: ["Details will be revealed soon."],
        categories: [],
        winners: []
      }
    },
    timeline: [],
    partners: []
  },
  "2024": {
    year: "2024",
    theme: {
      title: "EMERGING TECH LEADERS",
      subtitle: "DSCI EXCELLENCE AWARDS 2024",
      bannerImage: "/assets/banners/emerging-tech-leaders-2024.jpg"
    },
    segments: {
      corporate: {
        objectives: [
          "Recognize organizations leading in cybersecurity practices.",
          "Promote awareness about emerging technologies in data security.",
          "Highlight excellence in corporate security innovation."
        ],
        categories: [
          "Cybersecurity Leadership Award",
          "Best Corporate Privacy Initiative"
        ],
        winners: []
      },
      product: {
        objectives: [
          "Encourage development of next-gen security tools.",
          "Showcase excellence in product innovation.",
          "Promote adoption of secure technology solutions."
        ],
        categories: [
          "Next-Gen Cybersecurity Product",
          "Innovative Security Tool Award"
        ],
        winners: []
      },
      lawEnforcement: {
        objectives: [
          "Reward excellence in cyber law enforcement efforts.",
          "Promote best practices in digital crime investigation.",
          "Encourage collaboration between law enforcement and cybersecurity experts."
        ],
        categories: [
          "Best Cybercrime Investigation",
          "Outstanding Digital Forensics Team"
        ],
        winners: []
      }
    },
    timeline: [
      { date: "2024-05-01", title: "Nominations Open", description: "Start submitting nominations", status: "upcoming" },
      { date: "2024-06-15", title: "Nominations Close", description: "Deadline for submission", status: "upcoming" },
      { date: "2024-07-01", title: "Jury Evaluation Begins", description: "Evaluation of nominations", status: "upcoming" },
      { date: "2024-08-01", title: "Finalists Announced", description: "Shortlist of finalists", status: "upcoming" },
      { date: "2024-09-15", title: "Awards Ceremony", description: "Announcement of winners", status: "upcoming" }
    ],
    partners: [
      { name: "SecureTech Partners", logo: "/assets/partners/securetech-logo.png", type: "knowledge" },
      { name: "Innovate Cyber", logo: "/assets/partners/innovatecyber-logo.png", type: "process" }
    ]
  },
 "2023": {
    year: "2023",
    theme: {
      title: "TECHNOLOGY FUTURES",
      subtitle: "DSCI EXCELLENCE AWARDS 2023",
      bannerImage: "/assets/banners/technology-futures-2023.jpg"
    },
    segments: {
      corporate: {
        objectives: [
          "Recognize leading organizations in cybersecurity.",
          "Promote awareness about data privacy practices.",
          "Reward innovation in corporate security strategies."
        ],
        categories: [
          "Best Security Practices in Corporate Sector",
          "Privacy Champion of the Year"
        ],
        winners: []
      },
      product: {
        objectives: [
          "Encourage innovation in cybersecurity tools.",
          "Highlight excellence in secure product design.",
          "Promote adoption of cutting-edge solutions."
        ],
        categories: [
          "Best Cybersecurity Product",
          "Innovative Privacy Tool of the Year"
        ],
        winners: []
      },
      lawEnforcement: {
        objectives: [
          "Reward excellence in cyber law enforcement.",
          "Promote digital investigation methodologies.",
          "Encourage collaboration with security experts."
        ],
        categories: [
          "Outstanding Cybercrime Investigation",
          "Excellence in Digital Forensics"
        ],
        winners: []
      }
    },
    timeline: [
      { date: "2023-11-01", title: "Nominations Open", description: "Submit nominations for awards", status: "completed" },
      { date: "2023-12-15", title: "Nominations Close", description: "Submission deadline", status: "completed" },
      { date: "2024-01-10", title: "Jury Evaluation Begins", description: "Evaluation starts", status: "current" },
      { date: "2024-02-01", title: "Finalists Announced", description: "Shortlist published", status: "upcoming" },
      { date: "2024-03-15", title: "Awards Ceremony", description: "Winners announced", status: "upcoming" }
    ],
    partners: [
      { name: "CyberSec Firm", logo: "/assets/partners/cybersec-logo.png", type: "knowledge" },
      { name: "DataSecure Inc.", logo: "/assets/partners/datasecure-logo.png", type: "process" }
    ]
  },
  "2022": {
    year: "2022",
    theme: {
      title: "SECURITY INNOVATORS",
      subtitle: "DSCI EXCELLENCE AWARDS 2022",
      bannerImage: "/assets/banners/security-innovators-2022.jpg"
    },
    segments: {
      corporate: {
        objectives: ["Corporate excellence in cybersecurity."],
        categories: ["Security Leadership Award"],
        winners: []
      },
      product: {
        objectives: ["Innovation in cybersecurity tools."],
        categories: ["Best Security Product"],
        winners: []
      },
      lawEnforcement: {
        objectives: ["Recognize cyber law enforcement efforts."],
        categories: ["Cybercrime Investigation Award"],
        winners: []
      }
    },
    timeline: [],
    partners: []
  },
  "2021": {
    year: "2021",
    theme: {
      title: "PRIVACY CHAMPIONS",
      subtitle: "DSCI EXCELLENCE AWARDS 2021",
      bannerImage: "/assets/banners/privacy-champions-2021.jpg"
    },
    segments: {
      corporate: {
        objectives: ["Promote security in the corporate world."],
        categories: ["Best Security Practices"],
        winners: []
      },
      product: {
        objectives: ["Innovation in secure solutions."],
        categories: ["Most Innovative Security Product"],
        winners: []
      },
      lawEnforcement: {
        objectives: ["Highlight cybercrime prevention efforts."],
        categories: ["Excellence in Digital Investigations"],
        winners: []
      }
    },
    timeline: [],
    partners: []
  }
};
