import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  constructor() {}

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }
}
