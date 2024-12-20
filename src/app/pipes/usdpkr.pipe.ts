import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDPKR'
})
export class USDPKRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value * x;
  }

}
