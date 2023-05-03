import {
  Persona,
  PersonaContext,
} from '@internal/plugin-avalia-dxhub-ui-components-react';
import { Box } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import React, { useContext } from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BuildIcon from '@material-ui/icons/Build';

export const PersonaToggle = () => {
  const { persona, setPersona } = useContext(PersonaContext);

  const handlePersonaSwitch = (
    _event: React.MouseEvent<HTMLElement>,
    newPersona: string | null,
  ) => {
    if (newPersona) {
      setPersona(newPersona as Persona);
    }
  };

  return (
    <ToggleButtonGroup
      value={persona}
      exclusive
      onChange={handlePersonaSwitch}
      aria-label="text formatting"
    >
      <ToggleButton value="Geek" aria-label="geek">
        <BuildIcon />
        <Box marginLeft="0.4rem">Geek</Box>
      </ToggleButton>
      <ToggleButton value="Boss" aria-label="boss">
        <MonetizationOnIcon />
        <Box marginLeft="0.4rem">Boss</Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
