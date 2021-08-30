import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './services/video.service';
import { PageService } from './services/page.service';
import { LoginComponent } from './components/account/login/login.component';
import { AdminComponent } from './components/account/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoPlayerComponent,
    SidebarComponent,
    VideoPageComponent,
    AddVideoComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent], //root of evt
})
export class AppModule {}
