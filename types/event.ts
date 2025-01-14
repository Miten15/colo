export type EventType = {
    id: string;
    name: string;
    tagline: string;
    dates: string;
    description: string;
    type: string;
    location: string;
    image: string;
    timeline: {
      date: string;
      title: string;
      description: string;
    }[];
    speakers: {
      name: string;
      designation: string;
      image: string;
    }[];
  };