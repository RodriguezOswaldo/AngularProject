import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}

//let name: string ='A name!'
//console.log(name)
// let seatCount : number = 43÷
// let isOpen: boolean;
// isOpen = false;
// console.log(isOpen);

//Enum data type! Constant Array 
// enum spiceLevel {
//   NONE = 'no spice',
//   LOW = 'barely spicy',
//   MEDIUM = 'medium spicy',
//   HIGH = 'hot'
// }
// console.log(spiceLevel.MEDIUM)
//Any data type
// let userData : any;
// userData = 22;
// console.log(userData + 22)

// userData = 'free';
// console.log(userData + "man");
//interface lets you create your own datatype or set of 
interface MyDataType {
  customerName: String,
  itemNumbers: number[],
  isComplete: boolean
}

let order1: MyDataType;
order1 = {
  customerName: 'Oswaldo',
  itemNumbers: [12,34,45],
  isComplete:true
}
//Optional datatypes out of the contract? isComplete?
interface MyDataType2 {
  customerName: String,
  itemNumbers: number[],
  isComplete?: boolean
}

let own: MyDataType2;
own = {
  customerName: 'Oswaldo',
  itemNumbers:[23]
}