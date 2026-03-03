import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { Star } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');

  const handleSave = () => {
    updateUser({ name, bio });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account and skills
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              {!isEditing ? (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                {user?.name.charAt(0)}
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                ) : (
                  <>
                    <h3 className="text-xl font-semibold">{user?.name}</h3>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </>
                )}
              </div>
            </div>

            {user?.rating && (
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{user.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">
                  ({user.completedSwaps} swaps completed)
                </span>
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-2 block">Bio</label>
              {isEditing ? (
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell others about yourself..."
                  rows={4}
                />
              ) : (
                <p className="text-muted-foreground">{user?.bio || 'No bio added yet'}</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Offered</CardTitle>
            <CardDescription>Skills you can teach to others</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user?.skillsOffered && user.skillsOffered.length > 0 ? (
                user.skillsOffered.map((skill) => (
                  <Badge key={skill.id} variant="default" className="text-sm">
                    {skill.name} - {skill.level}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No skills added yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Wanted</CardTitle>
            <CardDescription>Skills you want to learn</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user?.skillsWanted && user.skillsWanted.length > 0 ? (
                user.skillsWanted.map((skill) => (
                  <Badge key={skill.id} variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No skills added yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
