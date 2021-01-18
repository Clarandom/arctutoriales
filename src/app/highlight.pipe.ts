import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
 constructor (private sanitizer: DomSanitizer) {}

  transform(value: string, city:string, cityCode: string): any {
    // if(cityCode === "ZGZ")
    // {
    //   return "The big zgz";
    // } else {
    //   return "Pues no";
    // }

    if(cityCode === "ZGZ") {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">' + city + '</div>');
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">' + city + '</div>');

    }

  }

}
