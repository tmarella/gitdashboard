import { trigger, animate, transition, style, state } from '@angular/animations';

export const slideInAnimation = trigger('SlideInAnimation', [
  state('left', style({ transform: 'translateX(0)' })),
  state('right', style({ transform: 'translateX(-50%)' })),
  transition('* => *', animate(300))
]);
