import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumbers'
})
export class PrimeNumbersPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number[] {
    let primeNumbersArray:number[] = [];

    for(let number of value){
      console.log(number)
      if(this.es_primo(number)){
        primeNumbersArray.push(number);
      }
    }

    return primeNumbersArray;
  }

  es_primo(number:number) {
    if (number < 2) return false; // Los números menores que 2 no son primos
    for (let i = 2; i * i <= number; i++) {
      if (number % i == 0) return false; // Si n tiene un divisor distinto de 1 y de sí mismo, no es primo
    }
    return true; // Si no se encontró ningún divisor, n es primo
  }

}
