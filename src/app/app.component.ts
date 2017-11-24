import { Component,OnInit } from '@angular/core';
import {GitShowcaseService} from './services/git-showcase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public repositories;
  public showAllRepos:boolean =true;
  public gitHTML:string;
  public repositoryData;
  constructor(
    public _showcaseService:GitShowcaseService,
  ){}

  ngOnInit(){
    this._showcaseService.getGitRepositories('mozilla').subscribe(
      response=>{
        if(response){
          this.repositories = response;
        }
      },err=>{
        alert('Error while getting repositories');
      }
    )
    this.showAllRepos = true;
  }

  public selectRepository(repoName){
    this._showcaseService.openGitRepository('mozilla',repoName).subscribe(
      response=>{
         if(response){
           this.showAllRepos = false;
           this.repositoryData = response;
         }
      },err=>{
          alert(`Error while opening ${repoName} Repository`);
      }
    )
  }

  public getGitHtml(htmlUrl,repoName){
    this._showcaseService.getRepositoryHTML(htmlUrl).subscribe(
      response=>{
        if(response){
          this.gitHTML = response;
        }
      },err=>{
        alert(`Error while fetching html of ${repoName} Repository`);
      }
    )
  }
  public goToHome(){
    this.showAllRepos = true;
  }

}
