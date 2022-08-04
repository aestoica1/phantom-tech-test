import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkDetailsComponent } from './bookmarks-list/bookmark-details/bookmark-details.component';
import { EditBookmarkComponent } from './bookmarks-list/bookmark-details/edit-bookmark/edit-bookmark.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BookmarksListComponent,
  },
  {
    path: 'details/:id',
    component: BookmarkDetailsComponent,
  },
  {
    path: 'details/:id/edit',
    component: EditBookmarkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
