import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation = trigger('FadeInAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))])
]);
