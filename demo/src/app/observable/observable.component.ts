import { Component, OnInit } from '@angular/core';
import {  from } from 'rxjs';
import { filter,map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { 
    // const observable = from([1,2,3,4]);
    from([1, 2, 3, 4])
      .pipe(filter(e => e % 2 == 0))
      .pipe(map(e => e * e))
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        ()=>console.log('结束了')
        
      );
  }

  ngOnInit() {
  }

}
