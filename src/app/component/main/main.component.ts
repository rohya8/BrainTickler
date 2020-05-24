import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { list, THEME, URL } from 'src/ConstantList';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private commonService: CommonService,
    @Inject(DOCUMENT) private doc: Document) { }

  joke = '';
  themeDark = false;
  shareUrl = URL.APP;

  ngOnInit(): void {
    //this.loadThemeA();

    this.fetchJokes();
  }

  private fetchJokes() {
    this.joke = '';
    const num = this.getRandomInt(0, 70);
    if (num % 5 === 0) {
      this.joke = list[num];
    } else {
      let url = URL.DAD;
      if (num % 3 === 0) {
        url = URL.CN;
      } else {
      }
      this.commonService.getJokes(url).subscribe((resp) => {
        if (resp) {
          this.joke = resp['value'] ? resp['value'] : (resp['joke'] ? resp['joke'] : list[num]);
        }
      });
    }
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  retrieveNew() {

    this.fetchJokes();
  }

  loadThemeA() {
    this.themeDark = false;
    this.loadTheme(THEME.UNITED);
  }
  loadThemeB() {
    this.themeDark = true;
    this.loadTheme(THEME.DARK);
  }

  loadTheme(url) {
    const linklist = this.doc.getElementsByTagName('link');
    for (const i in linklist) {
      if (linklist[i].rel && linklist[i].href.includes('bootswatch')) {
        linklist[i].href = url;
        break;
      }
    }
  }

  getWhatsappUrl() {
    return 'https://api.whatsapp.com/send?text=' + this.joke + '   ' + URL.APP;
  }

  getTweetURL() {
    return 'https://twitter.com/intent/tweet?text=' + this.joke + '   ' + URL.APP;
  }
}
