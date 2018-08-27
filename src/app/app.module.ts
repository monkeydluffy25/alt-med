import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { AuthenticatePage } from '../pages/authenticate/authenticate';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/signup/signup';

import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { SearchMedProvider } from '../providers/searchmed/searchmed';
import { SearchMedFullProvider } from '../providers/searchmedsfull/searchmedsfull';
import { ExplainPage } from '../pages/explain/explain';
//import { AlternatePage } from '../pages/alternate/alternate';
//import { PrescribedPage } from '../pages/prescribed/prescribed';


/**
 * Application module.
 */
@NgModule({
    declarations: [
        MyApp,
        AuthenticatePage,
        HomePage,
        SignUpPage,
        ExplainPage
      //  PrescribedPage,
        //AlternatePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AuthenticatePage,
        HomePage,
        SignUpPage,
        ExplainPage
      //  PrescribedPage,
        //AlternatePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthenticateProvider,
        SearchMedProvider,
        SearchMedFullProvider
    ]
})
export class AppModule {}
