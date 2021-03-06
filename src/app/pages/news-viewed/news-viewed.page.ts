import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-viewed',
  templateUrl: './news-viewed.page.html',
  styleUrls: ['./news-viewed.page.scss'],
})
export class NewsViewedPage implements OnInit, OnDestroy {

  activatedRoute$: Subscription;
  news$: Subscription;
  newsId: any;
  newsData: News;
  isTamil:boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private tts: TextToSpeech) {
    this.activatedRoute$ = this.activatedRoute.queryParams.subscribe(params => {
      console.log(params, "params");
      this.newsId = params?.newsId;
    })
  }


  ngOnInit() {
    this.news$ = this.newsService.getParticularNews(this.newsId).subscribe(res => {
      this.newsData = res?.news;
    })
  }

  audioSelect(event:any,audioValue:any) {
    console.log(event);
    console.log(audioValue);
  }
  
  playAudio(text:any,isTam:boolean){
    this.tts.speak({
      text:this.isTamil? text?.tamil :text?.english,
      locale: this.isTamil? "ta-IN" : "en-US",
      rate:0.8
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  ngOnDestroy(): void {
    this.activatedRoute$ ? this.activatedRoute$.unsubscribe() : null;
    this.news$ ? this.news$.unsubscribe() : null;
  }


}
