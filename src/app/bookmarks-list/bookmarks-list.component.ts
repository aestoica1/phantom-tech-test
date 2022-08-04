import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmark } from '../models/bookmark.model';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
})
export class BookmarksListComponent implements OnInit {
  bookmarks: Bookmark[] = [];
  pageNumber: number = 1;

  constructor(private bookmarksService: BookmarksService) {}

  ngOnInit(): void {
    // First time on the page, get the list of bookmarks from the Service
    this.bookmarks = this.bookmarksService.getBookmarks();
  }
}
