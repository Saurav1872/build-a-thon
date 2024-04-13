import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild} from '@angular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
interface Video {
  name: string,
  url: string
}

interface CourseModule {
  name: string,
  videos: Video[],
  expanded: boolean
}

interface Lecture {
  _id: Object,
  title: string,
  description: string,
  url: string,
}

interface Module {
  _id: Object,
  name: string,
  description: string,
  lectures: Lecture[]
}

interface Course {
  _id: Object,
  name: string,
  description: string,
  public: boolean,
  thumbnail: string,
  price: number,
  modules: Module[]
}

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    NgFor,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    CdkAccordionModule,
    MatIconModule
  ],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.scss'
})
export class CoursePlayerComponent implements OnInit {

  
  videoUrl: string = "https://rr4---sn-qxaelnes.googlevideo.com/videoplayback?expire=1713003637&ei=FQgaZrHQMqPk3LUPhMeF4Ao&ip=2409%3A40d1%3A1020%3Ad699%3A11eb%3A8deb%3Ab689%3A6a4c&id=o-AG3MoHQy-mcCl_qMShqmkTs8nFP7Frxu8ChSsq1Ok6qM&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AaUN6a1MxVoXusdLqgLiFt5cKM7YdjgCoUjXgkNueeTK4lgipWT70-a7HT1K2KSnRZ-L5TxaalsFbJwI&spc=UWF9f7mgO-RELOBv-1GMp2uPxZgiMgTQN-chNUQuVncgZwgihaPYi0MlgKDB&vprv=1&svpuc=1&mime=video%2Fmp4&ns=RbfLzZNr4fQsBs6bRN8TeCcQ&gir=yes&clen=273296565&ratebypass=yes&dur=9843.983&lmt=1703238014025309&c=WEB&sefc=1&txp=5438434&n=9z1O1nVboYwZeA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgeP4Db3PPltMh60CjhxKaWSgp3KZAsmDV1RV4fjXSEB8CIGvhQQtbMQlAVdiPBHO_ROo8bV5OoH3mW6k_kimZqAPV&cm2rm=sn-gwpa-5u9e7s,sn-gwpa-qxak7r&req_id=16ecfccb05fba3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=Uz&mm=30&mn=sn-qxaelnes&ms=nxu&mt=1712981781&mv=m&mvi=4&pl=41&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=ALClDIEwRgIhAND7g6PJT3dM9xBNSNLZBCfBuAdG48uEVzTL6f5wg7eBAiEA-9SygeGsfHyONcF5XA4tURWqw3TbBrD8wbBOCIdilW8%3D";
  
  mobileQuery: MediaQueryList;
  courseId:any = this.route.snapshot.params["courseId"];

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private http : HttpClient,private route: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.http.get(`http://localhost:5000/api/v1/video-url/${this.courseId}?video=true&&audio=true`,{withCredentials:true}).subscribe((res:any)=>{
      console.log("Done! ");
      
      this.videoUrl = res.url;
    })
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  playVideo(link: string) {
    // Implement your logic to play the video using the link
    // This could involve opening the link in a new tab or using a video player library
    console.log('Playing video:', link);
  }


  course: Course = {
    _id: {},
    name: 'Java Programming',
    description: 'This is just beginning',
    public: true,
    thumbnail: '',
    price: 1000,
    modules: [
      {
        _id: "1",
        name: "Module 1",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
      {
        _id: "2",
        name: "Module 2",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
      {
        _id: "3",
        name: "Module 3",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
      {
        _id: "4",
        name: "Module 4",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
      {
        _id: "5",
        name: "Module 5",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
      {
        _id: "6",
        name: "Module 6",
        description: "Desc",
        lectures: [
          {
            _id: "1",
            title: "Lecture 1",
            description: "lecture 1",
            url: "youtube 1"
          },
          {
            _id: "2",
            title: "Lecture 2",
            description: "lecture 2",
            url: "youtube 2"
          },
          {
            _id: "3",
            title: "Lecture 3",
            description: "lecture 3",
            url: "youtube 3"
          },
          {
            _id: "4",
            title: "Lecture 4",
            description: "lecture 4",
            url: "youtube 4"
          },
          {
            _id: "5",
            title: "Lecture 5",
            description: "lecture 5",
            url: "youtube 5"
          },
        ]
      },
    ]
  };

  courses :CourseModule[] = [
    {
      name: "Module 1",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 2",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 3",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 4",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 5",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 6",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 7",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    {
      name: "Module 8",
      videos : [
        {
          name: "Lecture 1",
          url: "youtube.com"
        },
        {
          name: "Lecture 2",
          url: "youtube.com"
        },
        {
          name: "Lecture 3",
          url: "youtube.com"
        },
        {
          name: "Lecture 4",
          url: "youtube.com"
        },
        {
          name: "Lecture 5",
          url: "youtube.com"
        },
        {
          name: "Lecture 6",
          url: "youtube.com"
        },
        {
          name: "Lecture 7",
          url: "youtube.com"
        },
        {
          name: "Lecture 8",
          url: "youtube.com"
        },
        {
          name: "Lecture 9",
          url: "youtube.com"
        },
        {
          name: "Lecture 10",
          url: "youtube.com"
        },
      ],
      expanded: false
    },
    
  ]
}
