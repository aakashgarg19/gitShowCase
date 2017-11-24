import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {GitShowcaseService} from './services/git-showcase.service';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RepostoryDetailsComponent } from './components/repostory-details/repostory-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    SafeHtmlPipe,
    RepostoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitShowcaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
