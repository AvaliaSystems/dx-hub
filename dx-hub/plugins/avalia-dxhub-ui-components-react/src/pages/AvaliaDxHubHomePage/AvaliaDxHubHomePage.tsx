import { BackstageTheme } from '@backstage/theme';
import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { CatalogInfoCard } from '../../components/CatalogInfoCard/CatalogInfoCard';
import { Feed, FeedCard, FeedItem } from '../../components/FeedCard/FeedCard';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { MessageCard } from '../../components/MessageCard/MessageCard';
import { MetricCard } from '../../components/MetricCard/MetricCard';
import {
  CncfGlossaryCard,
  GreenSoftwareFoundationPatternCard,
  InnerSourcePatternCard,
} from '../../components/SmallPatternCard/SmallPatternCard';
import { PersonaContext } from '../../context';
import newsBoss from './data/news-CEO.json';
import newsGeek from './data/news-ITOps.json';

type AvaliaDxHubHomePageProps = {};

const useStyles = makeStyles<BackstageTheme>(theme => ({
  root: {
    paddingRight: theme.spacing(2),
  },
  row: {
    marginBottom: theme.spacing(1),
  },
}));

const catalogInfoCardSpecs = [
  { kind: 'Group', label: 'Team' },
  { kind: 'User', label: 'Contributor' },
  { kind: 'Domain', label: 'Business Domain' },
  { kind: 'System', label: 'System' },
  { kind: 'Component', label: 'Component' },
  { kind: 'API', label: 'API' },
];

export const AvaliaDxHubHomePage = (_props: AvaliaDxHubHomePageProps) => {
  const classes = useStyles();
  const { persona, getPersonalizedValue } = useContext(PersonaContext);

  const benefits = getPersonalizedValue('benefits');
  const heroImageUrls = getPersonalizedValue('heroImageUrls');
  const news = persona === 'Geek' ? newsGeek : newsBoss;
  const feed: Feed = {
    items: news as FeedItem[],
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.row}>
        {benefits.map((message: any, index: number) => (
          <Grid item xs key={index}>
            <MetricCard
              title={message.indicator}
              subTitle={message.message}
              message={message.message}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.row}>
        <Grid item xs>
          <HeroCard imageUrl={heroImageUrls[0]} message="" />
        </Grid>
        <Grid item xs>
          <FeedCard message="Feed" feed={feed} />
        </Grid>
      </Grid>
      <Grid container className={classes.row}>
        {benefits.map((message: any, index: number) => (
          <Grid item lg={3} md={6} xs={12} key={index}>
            <MessageCard title={message.benefit} text={message.explanation} />
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.row}>
        <Grid item xs>
          <Grid container>
            {catalogInfoCardSpecs.map((spec, index) => (
              <Grid item xs={6} key={index}>
                <CatalogInfoCard kind={spec.kind} label={spec.label} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs>
          <HeroCard imageUrl={heroImageUrls[1]} message="" />
        </Grid>
      </Grid>
      <Grid container className={classes.row}>
        <Grid item xs>
          <HeroCard imageUrl={heroImageUrls[2]} message="" />
        </Grid>
        <Grid item xs>
          <Grid container>
            <Grid item xs={12}>
              <InnerSourcePatternCard />
            </Grid>
            <Grid item xs={12}>
              <GreenSoftwareFoundationPatternCard />
            </Grid>
            <Grid item xs={12}>
              <CncfGlossaryCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
