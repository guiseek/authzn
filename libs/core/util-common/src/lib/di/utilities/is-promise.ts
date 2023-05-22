import { Fn } from '../types';

export function isPromise<T>(value: Fn<T>): boolean;
export function isPromise<T>(value: PromiseLike<T>): boolean;
export function isPromise<T>(value?: PromiseLike<T> | Fn<T>) {
  return value && 'then' in value && typeof value.then === 'function';
}
