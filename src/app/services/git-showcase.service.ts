import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs'
@Injectable()
export class GitShowcaseService {

  constructor(public http:Http) { }

  getGitRepositories(orgName:string):Observable<any>{
    return this.http.get(` https://api.github.com/orgs/${orgName}/repos`).map(
      res=>{
        return res.json();
      }
    ).catch(err=>{
        return Observable.throw(err);
    })
  }

  openGitRepository(orgName:string,repoName:string):Observable<any>{
    return this.http.get(` https://api.github.com/repos/${orgName}/${repoName}`).map(
      res=>{
        return res.json();
      }
    ).catch(err=>{
        return Observable.throw(err);
    })
  }

  getRepositoryHTML(htmlUrl):Observable<any>{
    return this.http.get(htmlUrl).map(
      res=>{
        return res.text();
      }
    ).catch(err=>{
        return Observable.throw(err);
    })
  }

}
