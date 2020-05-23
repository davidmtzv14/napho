import { InjectionToken } from '@angular/core';

export interface NaphoDataConfiguration {
  apiUrl: string;
}

export const NAPHO_DATA_CONFIGURATION = new InjectionToken<NaphoDataConfiguration>(
  'Napho Data configurations'
);
