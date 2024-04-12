import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
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

interface Video {
  name: string,
  url: string
}

interface CourseModule {
  name: string,
  videos: Video[],
  expanded: boolean
}
@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    NgFor,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.scss'
})
export class CoursePlayerComponent {
  
  tempUrl: string = "https://rr3---sn-npoeenl7.googlevideo.com/videoplayback?expire=1712963948&ei=DG0ZZuCjMK7G9fwPgOe64AU&ip=2409%3A40d1%3Af%3A4a6b%3A3c97%3Ae546%3A4b7c%3Aeda9&id=o-AEzo7lxI5m4MjAx5iZyn2uMk8D5ocSUZVJ-7y1aru9Gq&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AaUN6a3CWuj-wJcY9FppTnKedApkGmxd5gc1JMtUgtixOnRptQiXjm2A5zBkVZ12HzEMdB_6ojcUM158&spc=UWF9fyoLHXQyjy2S_1Zun6oH-U6NIpr2Q-O6TuxHr5foqajuFo2xHtyHM34z&vprv=1&svpuc=1&mime=video%2Fmp4&ns=RvKytp58IJvFCoNHRTgYYzMQ&gir=yes&clen=734886&ratebypass=yes&dur=15.812&lmt=1705757902185641&c=WEB&sefc=1&txp=6219224&n=84B4-XxuqwK_PQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAOkExP_xBcyi-dAg_Pzv69rY48uT2_TAiDtl9DRYDrE8AiBip9kzHzJMpeJ9-tJHnNF5XTGH_zyz7GFizoAu7mVxiQ%3D%3D&cm2rm=sn-gwpa-a0i676,sn-gwpa-qxae77z,sn-qxal77z&req_id=d80a413c4c80a3ee&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=J1&mm=34&mn=sn-npoeenl7&ms=ltu&mt=1712942194&mv=m&mvi=3&pl=47&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=ALClDIEwRgIhAP1jygU8uwRq1xivXFILZWMvVAeq8GH5Toe3IIqhRZRbAiEAo9JTjQK7IPZu_CPtCmPYw87lwrbJM25J1qCEHpJsDUQ%3D";
  
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

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
    {
      name: "Module 9",
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
