import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repository;
  @Output() repoNameEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public gotoRepository(repoName){
    this.repoNameEmitter.emit(repoName);
  }

}
