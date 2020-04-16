import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
})
export class AppComponent  {
  name = 'Angular';

  angka = document.getElementById("a1");
  angkaa = document.getElementById("a2");
  angka1=2;
  angka2=3;
  pangkat = Math.pow(this.angka1,this.angka2);

if(pangkat%2==0)
{
  genap : boolean = true;
}
else
{
  ganjil: boolean = false;
}
}



