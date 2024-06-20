import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  @Input({ required: true }) label?: string;
  private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
