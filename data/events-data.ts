import { EventType } from '../types/event';

export const eventsData: EventType[] = [
  {
    id: "cyber-colloquy-4.0",
    name: "Cyber Colloquy 4.0",
    tagline: "Adopting the new rules for a privacy-centric future",
    dates: "March 21st - 24th",
    description: "Join us for insightful discussions, escape rooms, and CTF challenges focusing on cybersecurity. This event brings together experts and enthusiasts to explore cutting-edge topics and emerging trends in the field.",
    type: "discussion, escape room, ctf",
    location: "Noida, India",
    image: "/assets/events/cyber-colloquy.jpg",
    timeline: [
      { date: "2024-03-21", title: "Day 1: Opening Ceremony", description: "Welcome and keynote speeches" },
      { date: "2024-03-22", title: "Day 2: Panel Discussions", description: "Expert-led discussions on privacy and security" },
      { date: "2024-03-23", title: "Day 3: Escape Room Challenge", description: "Test your skills in our cybersecurity-themed escape room" },
      { date: "2024-03-24", title: "Day 4: CTF Competition", description: "Engage in a capture-the-flag competition" },
    ],
    speakers: [
      { name: "Dr. Jane Smith", designation: "Cybersecurity Expert", image: "/assets/speakers/jane-smith.jpg" },
      { name: "John Doe", designation: "Privacy Advocate", image: "/assets/speakers/john-doe.jpg" },
    ],
  },
  {
    id: "future-of-cyber",
    name: "Future of Cyber Security",
    tagline: "Exploring the new dimension of cyber security.",
    dates: "July 10th - 12th",
    description: "A thought-provoking event to explore the future landscape of cyber security, covering topics from AI-based security to quantum cryptography. Join us as we chart the course for cyber protection in the digital age.",
    type: "conference",
    location: "Bangalore, India",
    image: "/assets/events/future-cyber.jpg",
      timeline: [
        {date: "2024-07-10", title: "Day 1: Keynote & Panel Discussion", description: "Expert-led discussion on cyber security"},
        {date: "2024-07-11", title:"Day 2: Workshop", description: "hands on session on cyber secutiry tools"},
        {date: "2024-07-12", title: "Day 3: Concluding Ceremony", description: "Concluding notes and way forward"}
      ],
    speakers: [
        { name: "Alice Brown", designation: "AI Expert", image: "/assets/speakers/alice-brown.jpg"},
        {name: "Bob Williams", designation: "Quantum Security Scientist", image: "/assets/speakers/bob-williams.jpg"}
    ]
  },
  {
    id: "cyber-escape-room",
    name: "Cyber Escape Room Challenge",
    tagline: "Test your skills in real world cyber challenge",
    dates: "June 1st - 2nd",
    description: "Test your skills in the thrilling escape room challenge where you will use your cybersecurity skills and knowledge to solve the challenges. A real world challenge for all cybersecurity enthusiasts",
    type: "escape room",
    location: "Hyderabad, India",
    image: "/assets/events/cyber-escape.jpg",
    timeline: [
        { date: "2024-06-01", title:"Day 1: Escape room 1", description: "solve the challenge"},
         { date: "2024-06-02", title:"Day 2: Escape room 2", description: "Solve the next level of the challenge"}
    ],
      speakers: [],
  }
];