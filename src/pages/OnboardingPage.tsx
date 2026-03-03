import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Textarea } from '@/components/ui/Textarea';
import { popularSkills } from '@/data/skills';
import { UserSkill, SkillLevel } from '@/types';

export const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [skillsOffered, setSkillsOffered] = useState<UserSkill[]>([]);
  const [skillsWanted, setSkillsWanted] = useState<UserSkill[]>([]);
  const [bio, setBio] = useState('');
  const { updateUser, completeOnboarding } = useAuth();
  const navigate = useNavigate();

  const toggleSkillOffered = (skillId: string, level: SkillLevel) => {
    const skill = popularSkills.find(s => s.id === skillId);
    if (!skill) return;

    const exists = skillsOffered.find(s => s.id === skillId);
    if (exists) {
      setSkillsOffered(skillsOffered.filter(s => s.id !== skillId));
    } else {
      setSkillsOffered([...skillsOffered, { ...skill, level }]);
    }
  };

  const toggleSkillWanted = (skillId: string) => {
    const skill = popularSkills.find(s => s.id === skillId);
    if (!skill) return;

    const exists = skillsWanted.find(s => s.id === skillId);
    if (exists) {
      setSkillsWanted(skillsWanted.filter(s => s.id !== skillId));
    } else {
      setSkillsWanted([...skillsWanted, { ...skill, level: 'Beginner' }]);
    }
  };

  const handleComplete = () => {
    updateUser({
      skillsOffered,
      skillsWanted,
      bio,
    });
    completeOnboarding();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-16 rounded-full ${
                    s <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
          </div>
          <CardTitle>
            {step === 1 && 'What skills can you offer?'}
            {step === 2 && 'What do you want to learn?'}
            {step === 3 && 'Tell us about yourself'}
          </CardTitle>
          <CardDescription>
            {step === 1 && 'Select skills you can teach to others'}
            {step === 2 && 'Choose skills you\'d like to learn'}
            {step === 3 && 'Write a short bio to introduce yourself'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularSkills.slice(0, 10).map((skill) => {
                  const isSelected = skillsOffered.some(s => s.id === skill.id);
                  return (
                    <div
                      key={skill.id}
                      onClick={() => toggleSkillOffered(skill.id, 'Intermediate')}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        isSelected ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.category}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button onClick={() => setStep(2)} disabled={skillsOffered.length === 0}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularSkills.slice(0, 10).map((skill) => {
                  const isSelected = skillsWanted.some(s => s.id === skill.id);
                  return (
                    <div
                      key={skill.id}
                      onClick={() => toggleSkillWanted(skill.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        isSelected ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.category}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between gap-2 pt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={skillsWanted.length === 0}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Bio</label>
                <Textarea
                  placeholder="Tell others about yourself, your interests, and what you're passionate about..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={6}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Your Skills Summary</h4>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Offering:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillsOffered.map((skill) => (
                      <Badge key={skill.id} variant="default">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Want to Learn:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillsWanted.map((skill) => (
                      <Badge key={skill.id} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2 pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={handleComplete} disabled={!bio.trim()}>
                  Complete Setup
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
