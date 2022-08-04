import { Injectable } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks: Bookmark[] = JSON.parse(localStorage.getItem('bookmarks') || '[]');

  constructor() {}

  // Function to retrieve all bookmarks
  public getBookmarks() {
    return this.bookmarks;
  }

  // Function to add new bookmark in Local Storage
  public addNewBookmark(receivedBookmark: any) {
    const newBookmark = (element: any) =>
      element.linkUrl === receivedBookmark.linkUrl;
    const index = this.bookmarks.findIndex(newBookmark);
    let added = false;
    if (index === -1) {
      this.bookmarks.push(receivedBookmark);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      added = true;
    }
    return added;
  }

  // Function to retrieve individual bookmark
  public getIndividualBookmark(id: string) {
    let selectedBookmark;
    for (let bookmark of this.bookmarks) {
      if (bookmark.linkUrl === id) {
        selectedBookmark = bookmark;
        break;
      }
    }
    return selectedBookmark;
  }

  // Function to delete bookmark
  public deleteBookmark(bookmarkUrl: Bookmark) {
    const bookmarkForDeletion = (element: any) =>
      element.linkUrl === bookmarkUrl;
    const index = this.bookmarks.findIndex(bookmarkForDeletion);
    this.bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  // Function to edit bookmark
  public editBookmark(newValues: any, bookmarkUrl: string) {
    const newBookmarkForEdit = (element: any) =>
      element.linkUrl === newValues.linkUrl;
    const editedIndex = this.bookmarks.findIndex(newBookmarkForEdit);
    let edited = false;
    if (editedIndex === -1) {
      const bookmarkForEdit = (element: any) => element.linkUrl === bookmarkUrl;
      const index = this.bookmarks.findIndex(bookmarkForEdit);
      this.bookmarks.splice(index, 1, newValues);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      edited = true;
    }
    return edited;
  }
}
