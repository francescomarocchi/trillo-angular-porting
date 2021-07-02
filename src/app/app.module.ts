import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DetailComponent } from './components/detail/detail.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContentComponent } from './hosts/content/content.component';
import { HotelViewComponent } from './hosts/hotel-view/hotel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    HotelViewComponent,
    GalleryComponent,
    OverviewComponent,
    DetailComponent,
    CtaComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
