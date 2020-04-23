import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {
  transform(value:any, ...args: Array<any>): any {
    let [format] = args;
    return moment(value).format(format);
  }
}