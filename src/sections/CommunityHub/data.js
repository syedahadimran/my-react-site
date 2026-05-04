import riverCupImg from "../../assets/images/river-cup.webp";
import weeklyLeagueImg from "../../assets/images/weekly-league.webp";
import academyBeginnerImg from "../../assets/images/academy-beginner.webp";
import academyAdvancedImg from "../../assets/images/academy-advanced.webp";

export const tabs = [
  { id: "events", label: "Events" },
  { id: "academy", label: "Academy" },
];

export const communityCards = {
  events: [
    {
      id: 1,
      badge: "TOURNAMENT",
      title: "RIVER CUP",
      description:
        "Join Berlin's premier padel tournament. Compete against the best players for prizes...",
      image: riverCupImg,
      date: "Saturday, Feb 1 - S...",
      time: "9:00 AM - 6:00 PM",
      location: "All Courts",
      players: "32 teams",
    },
    {
      id: 2,
      badge: "TOURNAMENT",
      title: "WEEKLY LEAGUE",
      description:
        "Compete in our structured weekly league. Track your progress and climb the rankings.",
      image: weeklyLeagueImg,
      date: "Every Tuesday",
      time: "6:00 PM - 10:00 PM",
      location: "All Courts",
      players: "24 players",
    },
  ],
  academy: [
    {
      id: 1,
      badge: "TRAINING",
      title: "BEGINNER COURSE",
      description:
        "Learn the fundamentals of padel with structured coaching sessions.",
      image: academyBeginnerImg,
      date: "Mon & Wed",
      time: "6:00 PM - 7:30 PM",
      location: "Court 1",
      players: "12 players",
    },
    {
      id: 2,
      badge: "TRAINING",
      title: "ADVANCED CLINIC",
      description:
        "Improve strategy, positioning and competitive play with expert coaches.",
      image: academyAdvancedImg,
      date: "Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Court 2",
      players: "8 players",
    },
  ],
};

export const levelCards = [
  {
    id: 1,
    title: "GOLD",
    rating: "3.5+",
    subtitle: "Advanced players",
    theme: "gold",
    whatsappLink: "https://chat.whatsapp.com/KNTFrl74E60K9266GVX0cU?mode=gi_t"
  },
  {
    id: 2,
    title: "SILVER",
    rating: "2.0 - 3.5",
    subtitle: "Intermediate players",
    theme: "silver",
    whatsappLink: "https://chat.whatsapp.com/CwjmrKDv2j1Fo4SyaBxQIy?mode=gi_t"
  },
  {
    id: 3,
    title: "BRONZE",
    rating: "0.5 - 2.0",
    subtitle: "Beginner players",
    theme: "bronze",
    whatsappLink: "https://chat.whatsapp.com/EKY0OqX6iZ0HZC3rPyCvOp?mode=gi_t"
  },
];
