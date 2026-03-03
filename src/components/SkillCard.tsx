import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
  onClick?: () => void;
  showCategory?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick, showCategory = true }) => {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{skill.name}</CardTitle>
          {showCategory && <Badge variant="secondary">{skill.category}</Badge>}
        </div>
        {skill.level && (
          <Badge variant="default" className="w-fit mt-2">
            {skill.level}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2">{skill.description}</CardDescription>
      </CardContent>
    </Card>
  );
};
