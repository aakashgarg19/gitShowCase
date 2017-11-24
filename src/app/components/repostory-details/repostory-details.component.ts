import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-repostory-details',
  templateUrl: './repostory-details.component.html',
  styleUrls: ['./repostory-details.component.css']
})
export class RepostoryDetailsComponent implements OnInit {
  @Input() repositoryData;
  @Output() goBackEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  openUrl(url){
    window.open(url,'_blank');
  }
  returnBack(){
    this.goBackEmitter.emit();
  }

}
