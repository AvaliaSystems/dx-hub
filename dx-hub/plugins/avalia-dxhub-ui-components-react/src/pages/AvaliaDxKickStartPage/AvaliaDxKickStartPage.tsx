import { BackstageTheme } from '@backstage/theme';
import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { MessageCard } from '../../components/MessageCard/MessageCard';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import { Week, WeeklyCard } from './WeeklyCard';

type AvaliaDxKickStartPageProps = {};

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    paddingRight: theme.spacing(2),
  },
  row: {
    marginBottom: theme.spacing(1),
  },
}));

const weeks: Week[] = [
  {
    number: 1,
    goal: 'Assess your DX',
    activities: [
      {
        title: 'Setup the core team and agree on the objectives',
      },
      {
        title: 'Introduce Backstage to the core team',
      },
      {
        title: 'Define the initial scope (teams and systems)',
      },
      {
        title: 'Apply a framework to assess DX across selected teams',
      },
      {
        title:
          'Conduct interviews to understand developer journeys and identify friction points',
      },
      {
        title: 'Setup environment for the project',
      },
    ],
    backstageConcepts: [
      {
        title: 'Overall architecture',
      },
    ],
  },
  {
    number: 2,
    goal: 'Map out your ecosystem',
    activities: [
      {
        title: 'Identify the types of assets managed by the team',
      },
      {
        title:
          'Introduce the catalog architecture and ingestion process to the core team',
      },
      {
        title: 'Design the ingestion process for the catalog',
      },
      {
        title: 'Ingest the assets in the catalog',
      },
    ],
    backstageConcepts: [
      {
        title: 'System model',
      },
      {
        title: 'Software catalog',
      },
      {
        title: 'Ingestion',
      },
    ],
  },
  {
    number: 3,
    goal: 'Codify your best practices',
    activities: [
      {
        title: 'Analyze technology stack(s), pick first candidate',
      },
      {
        title:
          'Analyze platform capabilities (e.g. provisioning, observability, etc.)',
      },
      {
        title: 'Implement code template',
      },
      {
        title: 'Implement custom scaffolder actions',
      },
    ],
    backstageConcepts: [
      {
        title: 'Software Templates (Scaffolder)',
      },
      {
        title: 'Custom actions',
      },
      {
        title: 'Tech Insights Plugin',
      },
    ],
  },
  {
    number: 3,
    goal: 'Improve your documentation',
    activities: [
      {
        title: 'Introduce TechDocs and architecture choices to the core team',
      },
      {
        title: 'Select the target architecture and implement it',
      },
      {
        title:
          'Define and introduce the experience for documentation authors (e.g. local preview)',
      },
      {
        title: 'Document some components',
      },
    ],
    backstageConcepts: [
      {
        title: 'TechDocs',
      },
      {
        title: 'Search',
      },
    ],
  },
  {
    number: 5,
    goal: 'Drive engagement',
    activities: [
      {
        title: 'Introduce Backstage and DX Hub to the extended team',
      },
      {
        title: 'Demonstrate key use cases',
      },
      {
        title: 'Onboard extended team as users',
      },
      {
        title: 'Onboard extended team as contributors',
      },
    ],
    backstageConcepts: [
      {
        title: 'Contribution model',
      },
      {
        title: 'Development workflow',
      },
    ],
  },
];

export const AvaliaDxKickStartPage = (_props: AvaliaDxKickStartPageProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container className={classes.row}>
        <Grid item md={8} xs={6}>
          <HeroCard
            message="5 weeks program to kickstart your DX Hub"
            imageUrl="/images/girl-001.png"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <MessageCard
            title="Getting started with Backstage"
            text="To make it easier for your teams to evaluate and adopt Backstage, we have created: \n\n* **DX Hub Ignite**, a pre-configured Backstage portal. It is pre-loaded with additional plugins, templates and documentation \n\n* **DX KickStart**: a program to make it easier to evaluate and adopt Backstage.˙\n\nThis is only the beginning, watch this space for updates. We would love to hear back and build this with community feedback."
          />
        </Grid>
      </Grid>
      <Grid container className={classes.row}>
        <Grid item md={4} xs={6}>
          <VideoCard
            title="Agile Boosters: gamification, software analytics and business impact"
            description="Software development & Gamification"
            videoUrl="https://www.youtube.com/embed/yVyHghC_4IM"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <VideoCard
            title="A Picture is Worth a Thousand Words: Bring Data Visualization in Backstage"
            description="Data Visualization in Backstage"
            videoUrl="https://www.youtube.com/embed/riOXPNyp0e0"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <VideoCard
            title="Introduction video by Spotify, creator of Backstage"
            description="What is Backstage?"
            videoUrl="https://www.youtube.com/embed/85TQEpNCaU0"
          />
        </Grid>
      </Grid>
      {weeks.map(week => (
        <Grid key={week.number} container className={classes.row}>
          <>
            <Grid item xs={4}>
              <MessageCard title={week.goal} />
            </Grid>
            <Grid item xs={8}>
              <WeeklyCard week={week} />
            </Grid>
          </>
        </Grid>
      ))}
    </Box>
  );
};
