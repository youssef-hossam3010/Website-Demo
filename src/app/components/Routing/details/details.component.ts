import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {
  ID=0;
constructor(myRoute : ActivatedRoute){
  this.ID=myRoute.snapshot.params["id"];

}
}
