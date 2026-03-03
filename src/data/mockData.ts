import { User, Match, SwapProposal, ActiveSwap, Notification } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    bio: 'Passionate web developer and yoga enthusiast. Love learning new things!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    skillsOffered: [
      {
        id: '1',
        name: 'Web Development',
        category: 'Programming',
        description: 'Build modern websites',
        level: 'Advanced',
      },
    ],
    skillsWanted: [
      {
        id: '6',
        name: 'Yoga',
        category: 'Fitness',
        description: 'Practice yoga',
        level: 'Beginner',
      },
    ],
    rating: 4.8,
    completedSwaps: 12,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    bio: 'Graphic designer by day, guitar player by night.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    skillsOffered: [
      {
        id: '2',
        name: 'Graphic Design',
        category: 'Design',
        description: 'Create visual content',
        level: 'Advanced',
      },
    ],
    skillsWanted: [
      {
        id: '10',
        name: 'Python Programming',
        category: 'Programming',
        description: 'Learn Python',
        level: 'Intermediate',
      },
    ],
    rating: 4.9,
    completedSwaps: 8,
    createdAt: '2024-02-01',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma@example.com',
    bio: 'Language teacher and cooking enthusiast.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    skillsOffered: [
      {
        id: '3',
        name: 'Spanish Language',
        category: 'Languages',
        description: 'Learn Spanish',
        level: 'Advanced',
      },
    ],
    skillsWanted: [
      {
        id: '5',
        name: 'Italian Cooking',
        category: 'Cooking',
        description: 'Learn Italian recipes',
        level: 'Beginner',
      },
    ],
    rating: 5.0,
    completedSwaps: 15,
    createdAt: '2024-01-20',
  },
];

export const mockMatches: Match[] = [
  {
    user: mockUsers[0],
    matchPercentage: 92,
    commonInterests: ['Web Development', 'Yoga'],
    reason: 'You both want to learn what the other offers!',
  },
  {
    user: mockUsers[1],
    matchPercentage: 85,
    commonInterests: ['Design', 'Programming'],
    reason: 'Complementary skills in tech and design.',
  },
  {
    user: mockUsers[2],
    matchPercentage: 78,
    commonInterests: ['Languages', 'Cooking'],
    reason: 'Shared interest in cultural skills.',
  },
];

export const mockProposals: SwapProposal[] = [
  {
    id: 'p1',
    fromUserId: '2',
    toUserId: '1',
    fromUser: mockUsers[1],
    toUser: mockUsers[0],
    skillOffered: mockUsers[1].skillsOffered[0],
    skillWanted: mockUsers[0].skillsOffered[0],
    sessions: 4,
    durationPerSession: 60,
    note: 'Hi! I would love to learn web development from you. I can teach you graphic design in return.',
    status: 'pending',
    createdAt: '2024-03-10',
    updatedAt: '2024-03-10',
  },
];

export const mockActiveSwaps: ActiveSwap[] = [
  {
    id: 's1',
    proposalId: 'p1',
    user1: mockUsers[0],
    user2: mockUsers[2],
    skill1: mockUsers[0].skillsOffered[0],
    skill2: mockUsers[2].skillsOffered[0],
    totalSessions: 6,
    completedSessions: 2,
    status: 'active',
    startedAt: '2024-03-01',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    userId: '1',
    type: 'proposal_received',
    title: 'New Swap Proposal',
    message: 'Michael Chen wants to swap Graphic Design for Web Development',
    read: false,
    link: '/proposals',
    createdAt: '2024-03-10T10:30:00Z',
  },
  {
    id: 'n2',
    userId: '1',
    type: 'proposal_accepted',
    title: 'Proposal Accepted',
    message: 'Emma Rodriguez accepted your swap proposal!',
    read: true,
    link: '/swaps',
    createdAt: '2024-03-08T14:20:00Z',
  },
];
