import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyPad } from '../../../interfaces/keypad.interface';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css'],
})
export class KeypadComponent implements OnInit {
  @Input() buttonsKeyPad: KeyPad[] = [];
  @Output() clickButton = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  action(actionButton: string): void {
    this.clickButton.emit(actionButton);
  }
}
