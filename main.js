// window.onload = () => {
//     document.querySelector("h3").style.color = "Blue"
// }


/*
    Output to Screen
        - window.alert()
        - document.write()
        - console.log()
*/

// window.alert("Hallo")
// document.write("<p> Test </p>")
// console.log("Hi")

//////////////////////////////////////////////////////

/*
    Console Methods

        - log
        - error
        - table

    Wab API

    Styling Console 
        - Directive %c
*/

// console.log("Bassam");
// console.error("Error");
// console.table(["Mohammad","Bassam", "Ahmad"])

// console.log(" Hallo from %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px" )

//////////////////////////////////////////////////////
/*
    ES6
*/
// var myName = "Bassam";

// console.log("Hallo " + myName) old 
// console.log(` Hallo ${myName}`) new

//////////////////////////////////////////////////////

/*
    Data Types Intro:
        - String
        - Number
        - Arrya type => object
        - object
        - Boolean
        - undefined
        - null => object
*/

// //String
// console.log("Bassam")
// console.log(typeof "Bassam")
// // Number
// console.log(typeof 5000)
// console.log(typeof 5000.10)
// // Arrya type => object
// console.log(typeof [10, 15, 17])
// console.log(typeof ["10", "15", "17"])
// //object
// console.log(typeof {Bassam: 'Bassam', age: 17, Land: 'Deutschland'})
// //Bollean
// console.log(typeof false)
// //undefined
// console.log(typeof undefined)
// //null => object
// console.log(typeof null)

//////////////////////////////////////////////////////

/*
    Variables Intro:
        - var
        - let
        - const
*/

// hallo.innerHTML = "Hallo"

//////////////////////////////////////////////////////

/*
    Var
        - Redeclare(Yes)
        - Access Scope Declare (Undefined)
        - Variable Scope Darama [Added to Window] ()
        - Block or Function Scope 

    Let 
        - Redeclare(No => Error)
        - Access Scope Declare (Error)
        - Variable Scope Darama ()
        - Block or Function Scope 

    Const
        - Redeclare(No => Error)
        - Access Scope Declare (Error)
        - Variable Scope Darama ()
        - Block or Function Scope 
*/

//////////////////////////////////////////////////////

/*
    String Syntax + Character Escope Sequences 
    \ Escape + Line Continue
    \n
*/

// // String Syntax + Character Escope Sequences 
// console.log("Bassam Ali")
// console.log("Bassam 'Ali'")
// console.log('Bassam "Ali"')
// // Escape + Line Continue
// console.log('Bassam \'Ali\'')
// console.log("Bassam \"Ali\"")
// console.log("Bassam \\\"Ali\"")
// // \n
// console.log("Bassam \n\"Ali\"")

//////////////////////////////////////////////////////

/*
    Template Literals (Template Strings)
*/

// let a = "I love"
// let b = "JavaScript"
// let c = "and "
// let d = "Programming"

// console.log(a + " \"\" " + b + 
// "\n" +c+" "+ d )

// console.log(`${a} "" '' \\ ${b}
//  ${c} ${100 * 5 }`)

// let title = "Bassam"
// let desc = "Bassam Ali"

// let  markUp = `
//     <div class="card">
//         <div class="child">
//             <h2>Title: ${title}</h2>
//             <p>Descrption: ${desc}</p>
//         </div>
//     </div>
// `;

// document.write(markUp)

//////////////////////////////////////////////////////

/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Expontiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [Post / Pre ]
    -- Decrement [Post / Pre ]
    */
   
// console.log(10 + 20)
// //String
// console.log(10 + "Bassam")

// console.log(10 - 20)
// //NaN
// console.log(10 - "Bassam")
// console.log(typeof NaN)// number

// console.log(10 * 20)
// console.log(10 * -20)

// console.log(10 / 5)
// console.log(10 / 3)

// console.log(2 ** 4)
// console.log(2 * 2 * 2 * 2)

// console.log(10 % 2)
// console.log(10 % 3)

//let num = 1;
// console.log(num++) // 1
// console.log(num)// 2

// console.log(++num)// 2

// console.log(num--)// 1
// console.log(num)// 0

// console.log(--num)// -1

//////////////////////////////////////////////////////

/*
    + Unary Plus [Return Number if its Not Number]
    - Unary Negation [Return Number if its Not Number + Negates it]

    Tests:
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - Null
    - false
    - true
    
*/

// console.log(+100)// 100
// console.log(+"100")// 100
// console.log(+"-100")// -100
// console.log(+"Bassam")// NaN
// console.log(+"10.15")// 10.15
// console.log(+0xFF)// 255
// console.log(+null)// 0
// console.log(+false)// 0
// console.log(+true)// 1

// console.log(-100)// -100
// console.log(-"100")// -100
// console.log(-"-100")// 100
// console.log(-"Bassam")// NaN
// console.log(-"10.15")// -10.15
// console.log(-0xFF)// -255
// console.log(-null)// -0
// console.log(-false)// -0
// console.log(-true)// -1

// console.log(Number("100")) // 100

//////////////////////////////////////////////////////

/*
    Type Coercion (Type Casting)
    +
    -
    "" - 2
    false - treu
*/

// let a = "10"
// let b = 20
// let c = true

// console.log(+a +b)// 30
// console.log(+a +c)// 11
// console.log(+b +c)// 21
// console.log(a + b + c)// 1020true
// console.log(+a + b + c)// 31

// console.log(a - b)// -10
// console.log(-a -c)// -11

// console.log("" - 2)// -2
// console.log(0 - 2)// -2

// console.log(false - true)// -1


//////////////////////////////////////////////////////

/*
    Number
    - Double Precision
    - Syntactic Sugar "_"
    - e
    - **
    - With Decimal
    - Number + BigInt
    - Number Min Value
    - Number Max Value
    */
   
   // console.log(1000000);
   // console.log(1_000_000)
   // console.log(1e6)
   // console.log(10 ** 6)
   // console.log(10 * 10 * 10 * 10 * 10 * 10)
   // console.log(1000000.0)
   // // BigInt
   // console.log(Number.MIN_SAFE_INTEGER)
   // console.log(Number.MIN_VALUE)
   
   // console.log(Number.MAX_SAFE_INTEGER)
   // console.log(Number.MAX_VALUE)
   // console.log(Number.MAX_VALUE + 1)

/////////////////////////////////////////////////////

/*
    Number Methods
        - Two Dots To Call A Methods
        - toString()
        - toFixed()
        - parseInt()
        - parseFloat()
        - isInteger() [ES6]
        - isNaN() [ES6]
*/

// //toString()
// console.log((100).toString())
// console.log(100..toString())

// // toFixed()
// console.log(100.555555.toFixed());
// console.log(100.555555.toFixed(2));

// //parseInt()
// console.log(parseInt("1100")) // 1100
// console.log(parseInt("1100 Bassam")) // 1100
// console.log(parseInt("1100.55 Bassam")) // 1100
// console.log(parseInt(" Bassam 1100 Bassam")) // NaN
// console.log(Number("1100 Bassam")) // NaN
// console.log(+"1100 Bassam") // NaN

// //parseFloat()
// console.log(parseFloat("1100.5555 Bassam")) // 1100.5555

// //isInterger
// console.log(Number.isInteger("100")) // false
// console.log(Number.isInteger(100.55)) // false
// console.log(Number.isInteger(100)) // true

// //isNaN
// console.log(Number.isNaN(100)) // false
// console.log(Number.isNaN("Bassam" / 20)) // true

/////////////////////////////////////////////////////

/*
Math Object
- round()
- ceil()
- floor()
- min()
- max()
- pow()
- random()
- trunc() [ES6]
*/

// console.log(Math.round(99.2)) // 99
// console.log(Math.round(99.6)) // 100

// console.log(Math.ceil(99.6)) // 100
// console.log(Math.ceil(99.2)) // 100

// console.log(Math.floor(99.2)) // 99
// console.log(Math.floor(99.9)) // 99

// console.log(Math.min(99.9, 100, -20, 50, 100)) // -20
// console.log(Math.max(99.9, 100, -20, 50, 100)) // 100

// console.log(Math.pow(2, 4)) // 16
// console.log(2 ** 4) // 16

// console.log(Math.random()) // random Number

// console.log(Math.trunc(99.5)) // 99
// console.log(Math.trunc(99.8)) // 99
// console.log(Math.trunc(99.2)) // 99

/////////////////////////////////////////////////////

/*
    String Methods 1
    - Access With Index
    - Access With CharAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - Chain Methods()
*/

// let Name = "Bassam"
// let list = [1, 2, 3, 4, 5, 6]

// console.log(Name); // Bassam
// console.log(Name[1]); // a
// console.log(Name[6]); // undefined

// console.log(Name.charAt(1)); // a
// console.log(Name.charAt(6)); // 

// console.log(Name.length); // 6 => Number

// // let Name = "  Bassam  "
// console.log(Name.trim()); // Bassam with out Space From Front and End


// console.log(Name.toUpperCase()); // BASSAM
// console.log(Name.toLowerCase()); // bassam

// //Chain Methods
// console.log(Name.trim().charAt(4).toUpperCase()); // A

//***************************************************************

/*
    String Methods 2
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], End [Opt] Not Include End)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])
*/

// let a = "Bassam Web Developer";

// //indexOf(Value [Mand], Start [Opt] 0)
// console.log(a.indexOf("Web")); // 7 => Number
// console.log(a.indexOf("Web", 8)); // -1 => Number // 
// console.log(a.indexOf("e")); // 8 => Number

// //lastIndexOf(Value [Mand], End [Opt] Not Include End)
// console.log(a.lastIndexOf("e")) // 18

// //slice(Start [Mand], End [Opt] Not Include End)
// console.log(a.slice(0)) //Bassam Web Developer
// console.log(a.slice(0, 8)) //Bassam W
// console.log(a.slice(0, -2)) //Bassam Web Develop 
// console.log(a.slice(-2)) //er
// console.log(a.slice(-5, -3)) //lo

// //repeat(Times) [ES6]
// console.log(a.repeat(5)) //Bassam Web Developer * 5

// //split(Separator [Opt], Limit [Opt])
// console.log(a.split()) // => ['Bassam Web Developer'] as Array
// console.log(a.split("")) // => ['B', 'a', 's', 's', 'a', 'm', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] as Array
// console.log(a.split(" ")) // => ['Bassam', 'Web', 'Developer'] as Array
// console.log(a.split(" ", 2)) // => ['Bassam', 'Web'] as Array
// console.log(a.split("", 6)) // => ['B', 'a', 's', 's', 'a', 'm'] as Array

//***************************************************************

/*
    String Methods 3
    - substring (Start [Mand], End [Opt] Not Including End)
        Start > End will Swap
        Start < 0 it Start From 0
        Use Langht to Get last Character
    - substr (Start [Mand], Characters to Extract)
        Start <= Langht = ""
        Nagative Start From End
    - includes(Value [Mand], Start [Opt] Default 0) [ES6]
    - startsWith(Value [Mand], Start [Opt] Default 0 ) [ES6]
    - endsWith(Value [Mand], Lenght [Opt] Default Full Length) [ES6]
*/

// let a = "Bassam Web Developer";

// console.log(a.substring(2, 7));//ssam
// //Swap
// console.log(a.substring(7, 2));//ssam

// console.log(a.substring(-10, 7));// Bassam

// console.log(a.length)// 20
// console.log(a.substring(a.length - 1));// r
// console.log(a.substring(a.length - 5, a.length - 2));// lop

// console.log(a.substr(0));//Bassam Web Developer

// console.log(a.includes("Web"));// true
// console.log(a.includes("Web", 7));// true
// console.log(a.includes("Web", 8));// false

// console.log(a.startsWith("B"));// true
// console.log(a.startsWith("b"));// false
// console.log(a.startsWith("sam", 3));// true
// console.log(a.startsWith("sam", 4));// false

// console.log(a.endsWith("a"));// false
// console.log(a.endsWith("r"));// true
// console.log(a.endsWith("m", 6));// true
// console.log(a.endsWith("m", 7));// false

/////////////////////////////////////////////////////

/*
Conditional (Ternary) Operator
*/

// let name = "Bassam";
// let gander = "Male";
// let age = 30;

// if(gander === "Male"){
    //     console.log("Mr")
    // } else {
    //     console.log("Mrs")
    // }
    
    // // Condition ? If True : If False
    
    // gander === "Male" ? console.log("Mr") : console.log("Mrs");
    // let result = gander === "Male" ? "Mr" : "Mrs";
    
    // console.log(result)
    
    // console.log(`Hallo ${gander === "Male" ? "Mr" : "Mrs"} ${name}`)
    
    // age < 20 
    // ? console.log(20)
    // : age > 20 && age < 60
    // ? console.log("20 To 60")
    // : age > 60 
    // ? console.log("Larger Then 60")
    // : console.log("Unkown")
    

/////////////////////////////////////////////////////

/*
    Logical Or ||
        - Null + undefined + Any Falsy Value
    Nullish Coalescing Optrator ?? 
        - Null + Undefined
*/

// let price = null ;


// // 0
// console.log(`The Price Is ${price || 200}`); // 200
// // null
// console.log(`The Price Is ${price || 200}`); // 200
// // ""
// console.log(`The Price Is ${price || 200}`); // 200
// // false
// console.log(`The Price Is ${price || 200}`); // 200

// //Nullish Value
// // ""
// console.log(`The Price Is ${price ?? 200}`); // 
// // 0 
// console.log(`The Price Is ${price ?? 200}`); // 0
// // null
// console.log(`The Price Is ${price ?? 200}`); // 200
// // false
// console.log(`The Price Is ${price ?? 200}`); // flase

/////////////////////////////////////////////////////

/*
    Switch Stetement
    switch(expression){
        Case 1:
            // Code Block
            break;
        Case 2:
            // Code Block
            break;
        Default:
            // Code Block
    }
    - Default Ordering
    - Multiple Match
    ===
*/

// let day = 2;

// switch(day) {
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("Monday");
//         break;
//     default:
//         console.log("Unknown Day")
// }

/////////////////////////////////////////////////////

/*
    Arrays
    - Create Arrays [Tow Methods] new Array () + []
    - Access Arrays Elements
    - Nested Arrays
    - Change Arrays Elements
    - Check For Array Array.isArray(arr);
*/

// let myArray = ["Bassam", "Ali", "Ahmad", ["Mohammad", "Arwa"]];

// console.log(`Hallo ${myArray[1]}`)// Ali
// console.log(`Hallo ${myArray[2]}`)// Ahmad
// console.log(`Hallo ${myArray[2][1]}`)// h

// console.log(`Hallo ${myArray[3]}`)// Mohammad,Arwa
// console.log(`Hallo ${myArray[3][1]}`)// Arwa
// console.log(`Hallo ${myArray[3][1][2]}`)// w

// console.log(myArray)
// myArray[1] = "Mahmoud"
// console.log(myArray)
// myArray[3] = "Sameh"
// console.log(myArray)
// myArray[3] = ["Sameh","Amien", "Ameer"]
// console.log( typeof myArray)//object
// console.log( Array.isArray(myArray)) // true

// ***************************************************

/*
    Arrays Methods
        - Length
*/

// let myArray = ["Bassam", "Ali", "Ahmad", ["Mohammad", "Arwa"]];

// console.log(myArray.length);//4

// // macht leer index dann fügt die Value on the 7 index
// myArray[7] = "Gamal" ;
// console.log(myArray);

// console.log(myArray.length);//8

// //after last index new Value einfügen
// myArray[myArray.length] = "Ossama" ;
// console.log(myArray);

// //last index change
// myArray[myArray.length -1] = "saife" ;
// console.log(myArray);

// ***************************************************

/*
    Arrays Methods [Adding And Removing]
        - unshift("", "") Add Element To the First
        - push("", "") Add Element To the End
        - shift() Remove First Element From Array
        - pop() Remove Last Element From Array
*/

// let myArray = ["Bassam", "Ali", "Ahmad", ["Mohammad", "Arwa"]];

// console.log(myArray);
// //Add to the First
// myArray.unshift("Nabil", "Younas")//['Nabil', 'Younas', 'Bassam', 'Ali', 'Ahmad', Array(2)]

// console.log(myArray);
// //end to the End
// myArray.push("Samah", "Jan")//['Nabil', 'Younas', 'Bassam', 'Ali', 'Ahmad', Array(2), 'Samah', 'Jan']

// console.log(myArray);

// //Remove First Element
// myArray.shift("Samah", "Jan")//['Younas', 'Bassam', 'Ali', 'Ahmad', Array(2), 'Samah', 'Jan']
// let myShiftelement = myArray.shift("Samah", "Jan")

// console.log(myShiftelement);// Younas
// console.log(myArray);

// //Remove last Element
// myArray.pop("Samah", "Jan")//['Younas', 'Bassam', 'Ali', 'Ahmad', Array(2), 'Samah']
// let mypopelement = myArray.pop("Samah", "Jan")

// console.log(myArray);
// console.log(mypopelement);//Samah

// ***************************************************

/*
    Arrays Methods [Search]
        - indexOf(Search Element, From, Index [Opt])
        - lastIndexOf(Search Element, From Index [Opt])
        - includes(ValueToFind, fromIndex [Opt] [ES7])
*/

// let myArray = ["Bassam", "Ali", "Ahmad","Mohammad", "Arwa", "Osama", "Ahmad"];

// console.log(myArray);
// console.log(myArray.indexOf("Ahmad", ));// 2
// //Start Search ab index 1
// console.log(myArray.indexOf("Ahmad", 1));// 2
// //Start Search from last to first
// console.log(myArray.lastIndexOf("Ahmad"));// 6

// console.log(myArray.includes("Ahmad"));// true
// console.log(myArray.includes("Ahmad", 3));// true

// if(myArray.indexOf("Nahar") === -1) {
//     console.log("Not Found");
// }

// ***************************************************

/*
    Arrays Methods [Sort]
        - sort(Function [Opt])
        - reverse
*/

let myArray = ["Bassam", "Ali", 10,  "Ahmad", 12, "Mohammad", "Arwa", -9, "Osama", "Ahmad", -3]

console.log(myArray);
// A => Z
// small to Big
console.log(myArray.sort());// [-3, -9, 10, 12, 'Ahmad', 'Ahmad', 'Ali', 'Arwa', 'Bassam', 'Mohammad', 'Osama']

// other direction
console.log(myArray.reverse()); // ['Osama', 'Mohammad', 'Bassam', 'Arwa', 'Ali', 'Ahmad', 'Ahmad', 12, 10, -9, -3]
