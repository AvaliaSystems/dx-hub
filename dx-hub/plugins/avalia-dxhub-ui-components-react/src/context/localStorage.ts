import { Persona } from "./PersonaContext";

enum LocalStorageKeys {
  ACTIVE_PERSONA = 'avaliaDxHubActivePersona',
}

export const LocalStorage = {
  getActivePersona(): Persona {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(LocalStorageKeys.ACTIVE_PERSONA) ||
        'Boss',
      );
    } catch {
      return 'Boss';
    }
    return value;
  },
  setActivePersona(persona: Persona) {
    return window.localStorage.setItem(
      LocalStorageKeys.ACTIVE_PERSONA,
      JSON.stringify(persona),
    );
  },
};
