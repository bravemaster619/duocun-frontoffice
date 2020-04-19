import { Directive, Input, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Directive({
  selector: '[localValue]'
})
export class LocalValueDirective {

  @Input() data: object;
  @Input() key: string;

  value: string;

  constructor(
    private translator: TranslateService,
    private el: ElementRef
  ) {}
  
  ngOnInit() {
    let value = "";
    this.translator.onLangChange.subscribe((event) => {
      switch(event.lang) {
        case "zh": {
          value = this.data[this.key];
          break;
        }
        case "en": {
          if (this.data[this.key + "EN"]) {
            value = this.data[this.key + "EN"];
            break;
          }
        }
        default: 
          value = this.data[this.key];
          break;
      }
      this.el.nativeElement.innerText = value;
    })
    
    switch (this.translator.currentLang) {
      case "zh": {
        value = this.data[this.key];
        break;
      }
      case "en": {
        if (this.data[this.key + "EN"]) {
          value = this.data[this.key + "EN"];
          break;
        }
      }
      default: 
        value = this.data[this.key];
        break;
    }
    this.el.nativeElement.innerText = value;
  }

}
