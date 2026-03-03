import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { UserCard } from '@/components/UserCard';
import { Badge } from '@/components/ui/Badge';
import { mockMatches } from '@/data/mockData';
import { Sparkles } from 'lucide-react';

export const MatchesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          Your Matches
        </h1>
        <p className="text-muted-foreground">
          People who complement your skills and interests
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockMatches.map((match, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="default" className="text-sm">
                {match.matchPercentage}% Match
              </Badge>
              <span className="text-sm text-muted-foreground">{match.reason}</span>
            </div>
            <UserCard
              user={match.user}
              onViewProfile={() => navigate(`/user/${match.user.id}`)}
              onProposeSwap={() => navigate(`/propose-swap/${match.user.id}`)}
            />
          </div>
        ))}
      </div>

      {mockMatches.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No Matches Yet</CardTitle>
            <CardDescription>
              Complete your profile to get matched with other users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Add more skills to your profile to find better matches.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
