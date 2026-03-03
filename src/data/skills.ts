import { Skill, SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  'Programming',
  'Design',
  'Languages',
  'Music',
  'Cooking',
  'Fitness',
  'Writing',
  'Photography',
  'Business',
  'Marketing',
  'Other',
];

export const popularSkills: Skill[] = [
  {
    id: '1',
    name: 'Web Development',
    category: 'Programming',
    description: 'Build modern websites and web applications using HTML, CSS, JavaScript, and frameworks like React.',
  },
  {
    id: '2',
    name: 'Graphic Design',
    category: 'Design',
    description: 'Create visual content using tools like Adobe Photoshop, Illustrator, or Figma.',
  },
  {
    id: '3',
    name: 'Spanish Language',
    category: 'Languages',
    description: 'Learn conversational Spanish, grammar, and cultural nuances.',
  },
  {
    id: '4',
    name: 'Guitar Playing',
    category: 'Music',
    description: 'Master acoustic or electric guitar, from basic chords to advanced techniques.',
  },
  {
    id: '5',
    name: 'Italian Cooking',
    category: 'Cooking',
    description: 'Learn authentic Italian recipes, from pasta to desserts.',
  },
  {
    id: '6',
    name: 'Yoga',
    category: 'Fitness',
    description: 'Practice various yoga styles for flexibility, strength, and mindfulness.',
  },
  {
    id: '7',
    name: 'Content Writing',
    category: 'Writing',
    description: 'Write engaging blog posts, articles, and marketing copy.',
  },
  {
    id: '8',
    name: 'Portrait Photography',
    category: 'Photography',
    description: 'Capture stunning portraits with proper lighting and composition.',
  },
  {
    id: '9',
    name: 'Digital Marketing',
    category: 'Marketing',
    description: 'Learn SEO, social media marketing, and online advertising strategies.',
  },
  {
    id: '10',
    name: 'Python Programming',
    category: 'Programming',
    description: 'Learn Python for data science, web development, or automation.',
  },
  {
    id: '11',
    name: 'UI/UX Design',
    category: 'Design',
    description: 'Design user-friendly interfaces and create seamless user experiences.',
  },
  {
    id: '12',
    name: 'French Language',
    category: 'Languages',
    description: 'Learn French conversation, pronunciation, and grammar.',
  },
  {
    id: '13',
    name: 'Piano',
    category: 'Music',
    description: 'Learn to play piano from beginner to advanced levels.',
  },
  {
    id: '14',
    name: 'Baking',
    category: 'Cooking',
    description: 'Master the art of baking bread, cakes, and pastries.',
  },
  {
    id: '15',
    name: 'Personal Training',
    category: 'Fitness',
    description: 'Get fit with personalized workout plans and nutrition guidance.',
  },
];

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return popularSkills.filter(skill => skill.category === category);
};

export const searchSkills = (query: string): Skill[] => {
  const lowerQuery = query.toLowerCase();
  return popularSkills.filter(
    skill =>
      skill.name.toLowerCase().includes(lowerQuery) ||
      skill.description.toLowerCase().includes(lowerQuery) ||
      skill.category.toLowerCase().includes(lowerQuery)
  );
};
