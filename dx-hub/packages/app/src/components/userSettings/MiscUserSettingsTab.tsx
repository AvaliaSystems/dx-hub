import { InfoCard, Link } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';

export const MiscUserSettingsTab = () => (
  <Grid container direction="row" spacing={3}>
    <Grid item xs={12} md={6}>
      <InfoCard title="DevTools" variant="gridItem">
        Access the <Link to="/devtools">DevTools</Link> plugin
      </InfoCard>
    </Grid>
  </Grid>
);
