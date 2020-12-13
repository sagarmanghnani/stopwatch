import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonInterface } from 'src/Interfaces/button-interface';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Output() buttonClick:EventEmitter<any> = new EventEmitter();
  @Input() fill:string;
  @Input() size:string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['fill'] && changes['fill'].currentValue){
      this.fill = changes['fill'].currentValue
    }

    if(changes['size'] && changes['size'].currentValue){
      this.size = changes['size'].currentValue
    }
  }
  ngOnInit(): void {
  }

  butonClickHandler(){
    this.buttonClick.emit();
  }

}
