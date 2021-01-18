import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Welcome</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //   showMsg = true;
  //   colorName = 'green';
  //   SwitchValue = 'three';

  //   users2 = [
  //     {id: 1, name: 'john'},
  //     {id: 2, name: 'clara'}
  //   ];

  // users = [
  //   { userId: 10, firstName: 'Clara'},
  //   { userId: 20, firstName: 'Pepe'},
  //   { userId: 30, firstName: 'Juan'},
  //   { userId: 40, firstName: 'Tete'},
  //   { userId: 50, firstName: 'ClaPipira'}
  // ]
  // readMe() {
  //   console.log("button clicked");
  // }
  // clsClaraName = 'one';
  // clsJuanName = 'two';
  // subTitle = 'Subtítulo';
  // epNum = 17;
  // user =
  //   {
  //     userId: 201,
  //     userName: 'ARC',
  //     status: 'Active'
  //   };
  // colorVal = 'red';
  // hrefVal = 'http://google.com';
  // updatedLink = 'https://oracle.com';

  // showAlert(id) {
  //   alert("hello there" + id);
  // };
  // consoleLog() {
  //   console.log("From the input focus");
  // };
  // firstname = '';

  // readFirstname() {
  //   console.log(this.firstname)
  // };

// user =  {
//   userId: 20,
//   firstName: 'ARC',
//   lastName: 'Tutorials',
//   DOB: '07/23/1991',
//   salary: 12000.56
// }

title = 'MyProject';
users = [{
  firstName: 'Clarichi',
  city: 'Zaragoza',
  cityCode: 'ZGZ'
},
{
  firstName: 'Juanicho',
  city: 'Tenerife',
  cityCode: 'TNF'
}

];
} 
