import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SunbirdVideoPlayerModule} from '@project-sunbird/sunbird-video-player-v9';
import { AppComponent } from './app.component';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './question-cursor-implementation.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SunbirdVideoPlayerModule
  ],
  providers: [{ provide: QuestionCursor, useClass: QuestionCursorImplementationService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
