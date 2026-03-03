export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type SkillCategory = 
  | 'Programming'
  | 'Design'
  | 'Languages'
  | 'Music'
  | 'Cooking'
  | 'Fitness'
  | 'Writing'
  | 'Photography'
  | 'Business'
  | 'Marketing'
  | 'Other';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  level?: SkillLevel;
}

export interface UserSkill extends Skill {
  level: SkillLevel;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  skillsOffered: UserSkill[];
  skillsWanted: UserSkill[];
  availability?: Availability;
  rating?: number;
  completedSwaps?: number;
  createdAt: string;
}

export interface Availability {
  monday?: TimeSlot[];
  tuesday?: TimeSlot[];
  wednesday?: TimeSlot[];
  thursday?: TimeSlot[];
  friday?: TimeSlot[];
  saturday?: TimeSlot[];
  sunday?: TimeSlot[];
}

export interface TimeSlot {
  start: string;
  end: string;
}

export type ProposalStatus = 'pending' | 'accepted' | 'rejected' | 'completed';

export interface SwapProposal {
  id: string;
  fromUserId: string;
  toUserId: string;
  fromUser: User;
  toUser: User;
  skillOffered: Skill;
  skillWanted: Skill;
  sessions: number;
  durationPerSession: number;
  note?: string;
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ActiveSwap {
  id: string;
  proposalId: string;
  user1: User;
  user2: User;
  skill1: Skill;
  skill2: Skill;
  totalSessions: number;
  completedSessions: number;
  status: 'active' | 'completed';
  startedAt: string;
  completedAt?: string;
}

export interface Feedback {
  id: string;
  swapId: string;
  fromUserId: string;
  toUserId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export interface Match {
  user: User;
  matchPercentage: number;
  commonInterests: string[];
  reason: string;
}

export type NotificationType = 
  | 'proposal_received'
  | 'proposal_accepted'
  | 'proposal_rejected'
  | 'swap_completed'
  | 'session_reminder';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  link?: string;
  createdAt: string;
}
