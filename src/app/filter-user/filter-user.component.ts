import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.css']
})
export class FilterUserComponent{

  currentSelectedValue="All";

  @Output()
   countRBSelectedChanges:EventEmitter<string> = new EventEmitter<string>();


  @Input()
  all:number;

  @Input()
  male:number;
  
  @Input()
  female:number;

  onChangeFilter(){
    this.countRBSelectedChanges.emit(this.currentSelectedValue);
    console.log(this.currentSelectedValue);
  }

}
