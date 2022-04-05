import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  onRegistrar(){
    try {
      this.router.navigate(['registrar'])
    } catch (error) {
      console.error("Algo salió mal 😰")
      console.error(error)
    }
  }

}

/* https://smiley.cool/es/emoji-list.php */
