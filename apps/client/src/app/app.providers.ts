import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/extra/br';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { coreProviders } from '@authzn/core/data-access';
import { transfer } from '@authzn/core/util-common';
import { userProviders } from '@authzn/user/data-access';

export const appProviders = () => {
  coreProviders.http();
  userProviders.infrastructure();
  userProviders.useCases();
  userProviders.application();

  registerLocaleData(pt, 'pt-BR', ptBR);
  const LOCALES = [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: ptBR,
    },
  ];

  return [...LOCALES, ...transfer()];
};
