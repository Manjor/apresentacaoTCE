import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarPrioridade'
})
export class FormatarPrioridadePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1){
      return 'Alta';
    }else if (value === 2){
      return 'Média';
    }else if (value === 3){
      return 'Baixa';
    }else{
      return 'Neutra';
    }
  }

}
