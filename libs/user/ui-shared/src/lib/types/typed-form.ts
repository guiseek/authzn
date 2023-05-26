import { FormControl } from '@angular/forms';

export type TypedForm<T, K extends keyof T = keyof T> = Record<
  K,
  FormControl<T[K]>
>;
