import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   this.getData()
  }

public getData(){
  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((resp: any)=>{
    console.log(resp);
    this.data = resp
  })
}
}
