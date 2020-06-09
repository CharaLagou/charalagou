import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pronounce(word: string, lang: string) {
    if ('speechSynthesis' in window) {
      let utterance = new SpeechSynthesisUtterance();
      utterance.text = word;
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }
  }
}
