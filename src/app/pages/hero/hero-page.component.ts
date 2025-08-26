import { UpperCasePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';


@Component({
    templateUrl: `./hero-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UpperCasePipe],
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);
    
    heroDescrition = computed(()=> {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    // Computed property to get the name in uppercase
    capitalizedName = computed(() =>  this.name().toUpperCase());

    getHeroDescription() {
        return `${this.name()} - ${this.age()} años`;
    }


    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
        // console.log('Age changed to 60');
    }
}