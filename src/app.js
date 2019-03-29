import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


// const Layout = (props) => {
//     return (
//         <div>
//             <p>This is just a functional component.</p>
//             {props.children}
//         </div>
//     )
// }

// let template = (
//     <div>
//         <h1>Page Title</h1>
//     </div>
//     );

// ReactDOM.render(<Layout>
//     <div>
//         <h1>Page Title coming from Children</h1>
//     </div> 
//     </Layout>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ----------------------------------
    // TRANSFORM CLASS PROPERTIES
    // =============================
    // class oldSyntax {
    //     constructor(){
    //         this.name = 'Anmol'
    //         this.getGreeting = this.getGreeting.bind(this);
    //     }
    //     getGreeting() {
    //         return `Hello ${this.name}` ;
    //     }
    // }
    // const obj = new oldSyntax();
    // console.log(obj.getGreeting());

    // class newSyntax {
    //     name = 'Khatri';
    //     greeting = () =>{
    //         return `hi ${this.name}`;
    //     }
    // }
    // const obj2 = new newSyntax();
    // console.log(obj2.greeting());

// ----------------------------------

// class Options extends React.Component {    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((item)=>{
//                     return <Option key={item} optionText={item}/>
//                 }
//             )}                
//             </div>
//         ); 
//     }
// }


// functional components

// const User = (props) => {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h2>Age: {props.age}</h2>
//         </div>
//     );
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                Options: {this.props.optionText}
//             </div>
//         )
//     }    
// }

// class Action extends React.Component {    
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 >
//                         What Should I Do Now..??
//                 </button>
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

















































// // import './utils.js';
// import {square, add} from './utils.js';
// import senior, {isAdult, canDrink} from './person.js';
// import validator from 'validator';

// console.log('app.js running from src folder');

// console.log(square(5));

// console.log(add(3, 7));

// let adult = isAdult(16);
// let drink = canDrink(22);

// if(adult){
//     console.log('He/She is adult');
// } else {
//     console.log('He/She is minor');
// }

// if(drink) {
//     console.log('He/She is allowed to drink');
// } else {
//     console.log('He/She is not allowed to drink');
// }

// let isSenior = senior(65);

// if(isSenior){
//     console.log('He is senior');
// } else {
//     console.log('Not senior');
// }

// let mail = 'njda@mdn.com';

// console.log(`your email is ${validator.isEmail(mail)}`);