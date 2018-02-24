import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // define goals in this class
  // goals: any;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe( res => console.log(res.id));
  }

  ngOnInit() {
    // this._data.goal.subscribe( res=> this.goals = res);
  }

  sendMeHome(){
    // go home!
    this.router.navigate(['']);
  }

}
