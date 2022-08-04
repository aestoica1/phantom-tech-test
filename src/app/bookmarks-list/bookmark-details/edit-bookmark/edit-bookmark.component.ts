import { BookmarksService } from './../../../services/bookmarks.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  id: any;
  selectedBookmark?: Bookmark;
  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  // Reactive Form Creation
  editBookmarkForm = new FormGroup({
    linkUrl: new FormControl('', Validators.pattern(this.urlRegex)),
  });

  alert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get from the url the id parameter
    this.id = this.route.snapshot.params['id'];

    // Get details from the Bookmarks Service for individual Bookmark
    this.selectedBookmark = this.bookmarksService.getIndividualBookmark(
      this.id
    );
    // Populate the form with the details from the Bookmarks Service
    this.editBookmarkForm.patchValue({
      linkUrl: this.selectedBookmark?.linkUrl,
    });
  }

  onSubmitEditBookmarkForm() {
    if (
      this.editBookmarkForm.valid &&
      this.editBookmarkForm.value.linkUrl !== undefined &&
      this.editBookmarkForm.value.linkUrl !== null &&
      this.editBookmarkForm.value.linkUrl !== ''
    ) {
      let edited = this.bookmarksService.editBookmark(
        this.editBookmarkForm.value,
        this.id
      );
      if (edited) {
        this.alert = false;
        // Redirect to the list of bookmarks
        this.router.navigate(['/list']);
      } else {
        // Show alert that the edit failed
        this.alert = true;
      }
    }
  }

  // Function to close the alert notification
  closeAlert() {
    this.alert = false;
  }
}
