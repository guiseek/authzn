import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  Self,
} from '@angular/core';
import {
  DefaultValueAccessor,
  FormControl,
  NgControl,
} from '@angular/forms';
import { BehaviorSubject, Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'user-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent
  extends DefaultValueAccessor
  implements AfterViewInit, OnDestroy
{
  #subject = new Subject<void>();

  @Input()
  minLength = 1;

  #progress = new BehaviorSubject(0);
  progress$ = this.#progress.asObservable();

  #message = new BehaviorSubject('');
  message$ = this.#message.asObservable();

  get control() {
    return this.ngControl.control as FormControl;
  }

  constructor(
    renderer2: Renderer2,
    elementRef: ElementRef,
    @Self() readonly ngControl: NgControl
  ) {
    super(renderer2, elementRef, true);

    this.ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(200), takeUntil(this.#subject))
      .subscribe((value) => {
        this.checkPassword(value);
        // console.log(this.ngControl);

      });

  }

  checkPassword(value: string) {
    const conditions = [/[0-9]/g, /[a-z]/g, /[A-Z]/g, /[^a-zA-Z0-9]/g];
    const message = 'A senha deve conter ';
    const messages = [
      'números',
      'letras minúsculas',
      'letras maiúsculas',
      'caracteres especiais',
      'no mínimo 6 caracteres',
    ];

    const validation = conditions.map((condition) => condition.test(value));
    validation.push(value.length >= this.minLength);

    const score = validation.filter((v) => v === true);

    this.#progress.next(score.length * 20);

    if (validation.every((v) => v === true)) {
      this.#message.next('');
    } else {
      const position = validation.findIndex((v) => v === false);
      this.#message.next(message + messages[position]);
      // this.setCustomValidity(message + messages.at(position));
      // this.reportValidity();
    }
  }

  ngOnDestroy(): void {
    this.#subject.next();
    this.#subject.complete();
  }
}
