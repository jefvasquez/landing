import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() content: string = "Button";
  @Input() color: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
