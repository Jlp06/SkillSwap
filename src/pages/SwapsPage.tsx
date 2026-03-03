import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { mockActiveSwaps, mockProposals } from '@/data/mockData';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export const SwapsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'proposals' | 'completed'>('active');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Skill Swaps</h1>
        <p className="text-muted-foreground">
          Manage your skill exchange sessions
        </p>
      </div>

      <div className="flex gap-2 mb-6 border-b">
        <button
          onClick={() => setActiveTab('active')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'active'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Active Swaps
        </button>
        <button
          onClick={() => setActiveTab('proposals')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'proposals'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Proposals
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'completed'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Completed
        </button>
      </div>

      {activeTab === 'active' && (
        <div className="space-y-4">
          {mockActiveSwaps.map((swap) => (
            <Card key={swap.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {swap.user2.name}
                      <Badge variant="success">Active</Badge>
                    </CardTitle>
                    <CardDescription>
                      {swap.skill1.name} ↔ {swap.skill2.name}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="text-muted-foreground">
                        {swap.completedSessions} of {swap.totalSessions} sessions
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{
                          width: `${(swap.completedSessions / swap.totalSessions) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Schedule Session
                    </Button>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {mockActiveSwaps.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No active swaps yet</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'proposals' && (
        <div className="space-y-4">
          {mockProposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {proposal.fromUser.name}
                      <Badge variant="warning">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Wants to swap {proposal.skillOffered.name} for {proposal.skillWanted.name}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {proposal.note && (
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{proposal.note}</p>
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground">
                    <p>Sessions: {proposal.sessions}</p>
                    <p>Duration: {proposal.durationPerSession} minutes each</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button variant="outline" size="sm">
                      <XCircle className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {mockProposals.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No pending proposals</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'completed' && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No completed swaps yet</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
