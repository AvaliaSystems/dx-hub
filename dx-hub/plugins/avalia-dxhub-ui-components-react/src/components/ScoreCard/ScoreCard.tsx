import React from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';
import { makeStyles } from '@material-ui/core';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import TimelineIcon from '@material-ui/icons/Timeline';

const useStyles = makeStyles(_theme => ({
  entityGrid: {
    fontSize: '1rem',
    width: '100%',
    // border: 'thin solid red',
    '& tr:nth-child(1) > th:nth-child(1)': {
      width: '40%',
      textAlign: 'left',
    },
  },
  entityRow: {
    height: '36px',
  },
  entityName: {
    width: 'auto',
  },
  entityColumn: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: 'lightgray',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

type ScoreCardProps = {
  entityType: string;
  title: string;
};

export const ScoreCard = (props: ScoreCardProps) => {
  const catalogApi = useApi(catalogApiRef);
  const classes = useStyles();

  const [entities, setEntities] = React.useState<Entity[]>([]);

  React.useEffect(() => {
    async function fetchServices() {
      const response = await catalogApi.getEntities({
        filter: {
          kind: props.entityType,
        },
      });
      setEntities(response.items);
    }

    fetchServices();
  }, [catalogApi, props.entityType]);

  return (
    <table className={classes.entityGrid}>
      <tr className={classes.entityRow}>
        <th>{props.title}</th>
        <th>
          <NotificationsActiveIcon />
        </th>
        <th>
          <DirectionsWalkIcon />
        </th>
        <th>
          <TimelineIcon />
        </th>
      </tr>
      {entities.map(entity => (
        <tr key={entity.metadata.name} className={classes.entityRow}>
          <td className={classes.entityName}>{entity.metadata.name}</td>
          <td className={classes.entityColumn}>
            <div />
          </td>
          <td className={classes.entityColumn}>
            <div />
          </td>
          <td className={classes.entityColumn}>
            <div />
          </td>
        </tr>
      ))}
    </table>
  );
};
