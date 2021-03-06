import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { appReducers } from '../store/reducers/app.reducer';
import { AuthEffects } from '../store/effects/auth.effects';
import { ChatEffects } from '../store/effects/chat.effects';
import { AuthService } from './auth-service.service';
import { ChatService } from './services/chat.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './chat/components/message/message.component';
import { UserComponent } from './chat/components/user/user.component';
import { WebsocketModule } from './websocket';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatComponent,
    MessageComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, ChatEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    WebsocketModule.config({
      path: '/ws'
    })
  ],
  providers: [AuthService,
    ChatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
