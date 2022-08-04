import { BookmarksService } from './../services/bookmarks.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent implements OnInit {
  // Regex pattern used to validate in the form if the bookmark is a valid url
  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  alert: boolean = false;

  // Reactive Form Creation
  bookmarkForm = new FormGroup({
    linkUrl: new FormControl('', Validators.pattern(this.urlRegex)),
  });

  constructor(
    private bookmarksService: BookmarksService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Function to submit a new bookmark
  onSubmitBookmarkForm() {
    if (
      this.bookmarkForm.valid &&
      this.bookmarkForm.value.linkUrl !== undefined &&
      this.bookmarkForm.value.linkUrl !== null &&
      this.bookmarkForm.value.linkUrl !== ''
    ) {
      let newBookmark = {
        linkUrl: this.bookmarkForm.value.linkUrl,
      };
      let added = this.bookmarksService.addNewBookmark(newBookmark);
      if (added) {
        // Redirect to the newly created bookmark details page
        this.router.navigate(['/details', this.bookmarkForm.value.linkUrl], {
          state: { alert: true },
        });
        this.bookmarkForm.reset();
        this.alert = false;
      } else {
        // Show alert that the bookmark already exists
        this.alert = true;
      }
    }
  }

  // Function to close the alert notification
  closeAlert() {
    this.alert = false;
  }
}
