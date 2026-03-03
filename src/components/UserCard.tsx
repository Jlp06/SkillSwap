import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Star } from 'lucide-react';
import { User } from '@/types';

interface UserCardProps {
  user: User;
  onViewProfile?: () => void;
  onProposeSwap?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onViewProfile, onProposeSwap }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{user.name}</CardTitle>
            {user.rating && (
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{user.rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground ml-1">
                  ({user.completedSwaps} swaps)
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {user.bio && (
          <p className="text-sm text-muted-foreground line-clamp-2">{user.bio}</p>
        )}

        <div>
          <h4 className="text-sm font-semibold mb-2">Offers</h4>
          <div className="flex flex-wrap gap-2">
            {user.skillsOffered.slice(0, 3).map((skill) => (
              <Badge key={skill.id} variant="default">
                {skill.name}
              </Badge>
            ))}
            {user.skillsOffered.length > 3 && (
              <Badge variant="secondary">+{user.skillsOffered.length - 3} more</Badge>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Wants to Learn</h4>
          <div className="flex flex-wrap gap-2">
            {user.skillsWanted.slice(0, 3).map((skill) => (
              <Badge key={skill.id} variant="secondary">
                {skill.name}
              </Badge>
            ))}
            {user.skillsWanted.length > 3 && (
              <Badge variant="secondary">+{user.skillsWanted.length - 3} more</Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {onViewProfile && (
            <Button variant="outline" size="sm" onClick={onViewProfile} className="flex-1">
              View Profile
            </Button>
          )}
          {onProposeSwap && (
            <Button variant="primary" size="sm" onClick={onProposeSwap} className="flex-1">
              Propose Swap
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
