export interface AwardYear {
    year: string;
    theme?: {
      title: string;
      subtitle: string;
      bannerImage: string;
    };
    segments: {
      corporate: CorporateSegment;
      product: ProductSegment;
      lawEnforcement: LawEnforcementSegment;
    };
    timeline: TimelineEvent[];
    partners?: Partner[];
  }
  
  export interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'upcoming';
  }
  
  export interface Winner {
    name: string;
    title: string;
    organization: string;
    image: string;
    category: string;
  }
  
  export interface CorporateSegment {
    winners: Winner[];
    objectives: string[];
    categories: string[];
  }
  
  export interface ProductSegment {
    winners: Winner[];
    objectives: string[];
    categories: string[];
  }
  
  export interface LawEnforcementSegment {
    winners: Winner[];
    objectives: string[];
    categories: string[];
  }
  
  export interface Partner {
    name: string;
    logo: string;
    type: 'process' | 'knowledge' | 'outreach';
  }
  
  