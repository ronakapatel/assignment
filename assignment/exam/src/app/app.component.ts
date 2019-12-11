import { Component, Inject } from '@angular/core';
import {PostService} from './services/post.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  data: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';
  posts:any = [];
  constructor(private PostService: PostService, public dialog: MatDialog) { }
  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.PostService.getPosts().subscribe(res => {
      console.log(res,'test');
      this.posts = res.hits;
    });
  }

  openPostDialog(post): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      disableClose: true,
      data: {data: post}
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}