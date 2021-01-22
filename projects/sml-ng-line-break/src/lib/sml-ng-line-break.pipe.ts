import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'smlnglinebreak'
})
export class SmlNgLineBreakPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\n/g, '<br>');
    }
}