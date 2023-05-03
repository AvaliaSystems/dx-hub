import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import personalization from './data/personalization.json';
import { LocalStorage } from './localStorage';

export type Persona = 'Geek' | 'Boss';

interface PersonaContextProps {
  persona: Persona;
  setPersona: React.Dispatch<React.SetStateAction<Persona>>;
  getPersonalizedValue(parameterName: string): any;
}

const PersonaContext = createContext<PersonaContextProps>({
  persona: 'Boss',
  setPersona: () => {},
  getPersonalizedValue: Function,
});

const PersonaContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [persona, setPersona] = useState<Persona>(() =>
    LocalStorage.getActivePersona(),
  );

  const contextValuePersona = useMemo(
    () => ({ persona, setPersona }),
    [persona],
  );

  useEffect(() => {
    LocalStorage.setActivePersona(persona);
  }, [persona]);

  const getPersonalizedValue = (parameterPath: string) => {
    const propertyNames = parameterPath.split('.');
    let parameterBlock = personalization as any;
    for (const propertyName of propertyNames) {
      parameterBlock = parameterBlock?.[propertyName];
    }

    if (!parameterBlock) {
      return undefined;
    }
    const paramPersona = parameterBlock[persona] || parameterBlock.default;
    return paramPersona;
  };

  return (
    <PersonaContext.Provider
      value={{ ...contextValuePersona, getPersonalizedValue }}
    >
      {children}
    </PersonaContext.Provider>
  );
};

export { PersonaContext, PersonaContextProvider };
