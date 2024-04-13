import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface Video {
  link: string,
  title: string,
  description: string,
  thumbnail: string,
  price: number
}


@Component({
  selector: 'app-course-video-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './course-video-form.component.html',
  styleUrl: './course-video-form.component.scss'
})
export class CourseVideoFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  isLoading:boolean = false;

  video: Video = {
    link: '',
    title: '',
    description: '',
    thumbnail: '',
    price: 0
  };

  videoFormGroup !: FormGroup;

  ngOnInit() {
    this.videoFormGroup = this._formBuilder.group({
      courseVideoLinkCtrl: [this.video.link, Validators.required],
      courseTitleCtrl: [this.video.title, Validators.required],
      courseDescriptionCtrl: [this.video.description, Validators.required],
      courseThumbnailCtrl: [this.video.thumbnail, Validators.required],
      coursePriceCtrl: [this.video.price, Validators.required]
    });
    this.videoFormGroup.get('courseVideoLinkCtrl')?.valueChanges.subscribe(newVal => {
      this.video.link = newVal;
    });
    this.videoFormGroup.get('courseTitleCtrl')?.valueChanges.subscribe(newVal => {
      this.video.title = newVal;
    });
    this.videoFormGroup.get('courseDescriptionCtrl')?.valueChanges.subscribe(newVal => {
      this.video.description = newVal;
    });
    this.videoFormGroup.get('courseThumbnailCtrl')?.valueChanges.subscribe(newVal => {
      this.video.thumbnail = newVal;
    });
    this.videoFormGroup.get('coursePriceCtrl')?.valueChanges.subscribe(newVal => {
      this.video.price = newVal;
    });
  }


  setValue(res: any): void {
    this.videoFormGroup.get('courseTitleCtrl')?.setValue(res.title);
    this.videoFormGroup.get('courseDescriptionCtrl')?.setValue(res.description);
    // this.videoFormGroup.get('courseThumbnailCtrl')?.setValue(res.thumbnail);
    this.videoFormGroup.get('coursePriceCtrl')?.setValue(res.price);
  }

  // course thubnail
  imageName: string | ArrayBuffer | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  uploadImage(): void {
    console.log('Image uploaded:', this.imageUrl);
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.previewImage(file);
    this.imageName = file.name;
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  fetchedSuccess: boolean = false;
  fetchVideo() {
    const videoID = this.extractVideoId(this.videoFormGroup.get('courseVideoLinkCtrl')?.value);

    try {
      this.isLoading = true;
      this.http.get(`http://localhost:5000/api/v1/yt-video-url/${videoID}/video-details`, { withCredentials: true }).subscribe((res: any) => {
        console.log(res);
        if (!res.ok) {
          this.isLoading = false;
          return;
        }
        // this.videoFormGroup.controls.courseTitleCtrl = res.title;
        // this.videoFormGroup.controls.courseThumbnailCtrl = res.thubnail;
        // this.video.title = res.title;
        // this.video.thumbnail = res.thubnail;
        // this.video.price = 0;
        // this.video.description = res.description;

        this.setValue(res);
        this.fetchedSuccess = true;
        this.isLoading = false;
      })
    } catch (err) {
      this.isLoading = false;
    }

  }

  extractVideoId(url: any) {

    // var regex = /[?&]v=([^&#]+)/;
    var regex = /youtu\.be\/([^?]+)/;// https://youtu.be/AN2SILis5zY?si=kcEvn_xa7i9Gd50j
    console.log(url);

    var match = url.match(regex);

    // Check if match found
    if (match && match[1]) {
      return match[1];
    } else {
      regex = /[?&]v=([^&#]+)/;
      match = url.match(regex);
      if (match && match[1]) {
        return match[1];
      }

      return null;
    }
  }

  submit() {
    const id:string = this.extractVideoId(this.video.link);
    this.http.put('http://localhost:5000/auth/addvideo',{youtubeVideoId:id},{withCredentials:true}).subscribe((res:any)=>{

      console.log(res);
      
    })
   

  }
}
