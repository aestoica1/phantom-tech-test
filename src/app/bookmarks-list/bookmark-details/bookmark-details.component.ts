import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarksService } from 'src/app/services/bookmarks.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss'],
})
export class BookmarkDetailsComponent implements OnInit {
  id: any;
  bookmark?: Bookmark;
  alert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarksService,
    private router: Router
  ) {
    this.alert = this.router.getCurrentNavigation()?.extras.state?.['alert'];
  }

  ngOnInit(): void {
    // Get from the url the id parameter
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      // Then access the Bookmarks Service to retrieve data for individual bookmark
      this.bookmark = this.bookmarkService.getIndividualBookmark(this.id);
    });
  }

  // Function to delete a bookmark
  onDeleteBookmark(bookmarkUrl: any) {
    this.bookmarkService.deleteBookmark(bookmarkUrl);
    this.router.navigate(['/list']);
  }

  // Function to close the alert notification
  closeAlert() {
    this.alert = false;
  }
}
