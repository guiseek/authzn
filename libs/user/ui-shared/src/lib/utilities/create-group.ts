import { FormGroup, ValidatorFn } from '@angular/forms';
import { createControl } from './create-control';
import { TypedForm } from '../types';

export function createGroup<T, K extends keyof T = keyof T>(
  ...controls: [K, T[K], ...ValidatorFn[]][]
) {
  return new FormGroup(
    controls.reduce((prev, [key, value, validators]) => {
      return { ...prev, ...{ [key]: createControl<T[K]>(value, validators) } };
    }, {} as TypedForm<T>)
  );
}
