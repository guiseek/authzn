import { register } from '@authzn/core/util-common';
import { AxiosHttpImpl, Http } from './infrastructure';

export const coreProviders = {
  http() {
    register({
      for: Http,
      use: AxiosHttpImpl,
    });
  },
};
