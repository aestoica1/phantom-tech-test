import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarkDetailsComponent } from './bookmarks-list/bookmark-details/bookmark-details.component';
import { EditBookmarkComponent } from './bookmarks-list/bookmark-details/edit-bookmark/edit-bookmark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    BookmarksListComponent,
    BookmarkDetailsComponent,
    EditBookmarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
