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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Variables Intro:
        - var
        - let
        - const
*/

// hallo.innerHTML = "Hallo"

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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


///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// let myArray = ["Bassam", "Ali", 10,  "Ahmad", 12, "Mohammad", "Arwa", -9, "Osama", "Ahmad", -3]

// console.log(myArray);
// // A => Z
// // small to Big
// console.log(myArray.sort());// [-3, -9, 10, 12, 'Ahmad', 'Ahmad', 'Ali', 'Arwa', 'Bassam', 'Mohammad', 'Osama']

// // other direction
// console.log(myArray.reverse()); // ['Osama', 'Mohammad', 'Bassam', 'Arwa', 'Ali', 'Ahmad', 'Ahmad', 12, 10, -9, -3]

// ***************************************************

/*
    Arrays Methods [Slicing]
    - slice(Start [opt], End [Opt] Not Including End)
        - slice() => All Array
        - If Start is Undefind => 0
        - Negative Count From End
        - If End Is Undefined || > Indexes => Slice To the End Array.length
        - Return New Array
    - splice(Start [Mand], DeleteCount [Opt][0 No Remove], The items to Add [Opt])
        - If Negative => Start From The End
*/

// let myArray = ["Bassam", "Ali", 10,  "Ahmad", 12, "Mohammad", "Arwa", -9, "Osama", "Ahmad", -3]

// console.log(myArray);//['Bassam', 'Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]
// console.log(myArray.slice());//['Bassam', 'Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]
// console.log(myArray.slice(1));//['Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]
// console.log(myArray.slice(1, 3));//['Ali', 10]
// console.log(myArray.slice(-3));//['Osama', 'Ahmad', -3]
// console.log(myArray.slice(-3, -2));//['Osama'] 
// console.log(myArray.slice(3, -2));// ['Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama']

// console.log(myArray)//['Bassam', 'Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]

// myArray.splice(0, 0, "Sameer", "Khaled")

// console.log(myArray)//['Sameer', 'Khaled', 'Bassam', 'Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]

// myArray.splice(0, 1, "Jan", "Timo")

// console.log(myArray)//['Jan', 'Timo', 'Khaled', 'Bassam', 'Ali', 10, 'Ahmad', 12, 'Mohammad', 'Arwa', -9, 'Osama', 'Ahmad', -3]

// ***************************************************

/*
    Arrays Methods [Joining]
    - concat(array, array) => Return A New Array
    - join(Separator)
*/

// let myArray = ["Bassam", "Ali", 10,  "Ahmad", 12, "Mohammad", "Arwa", -9, "Osama", "Ahmad", -3];
// let myNewArray = ["Sameer", "Khaled"];
// let myBestArray = ["Jan", "Timo"];

// let allFrinds = myArray.concat(myNewArray,myBestArray, "Gamal","Nare", [1, 2]);

// console.log(allFrinds);

// console.log(allFrinds.join(""));
// console.log(allFrinds.join(" "));
// console.log(allFrinds.join(" | "));
// console.log(allFrinds.join(" | ").toUpperCase());

// ***************************************************

/*
    Arrays Challenges
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

// console.log(my.reverse().slice(2))
// console.log(my.reverse().slice(1, -3).reverse())

// console.log(my)

// const Elzero = () => {
//     let  news = [];
//     let test = my.reverse().slice(3, -2)
//     let test2 = my.reverse().slice(1, -4)
//     console.log(test2)
//     news.push(test[0][0])
//     news.push(test[0][1]) 
//     news.push(test2[0][2]) 
//     news.push(test2[0][3]) 
//     news.push(test2[0][4]) 
//     news.push(test2[0][5]) 
//     news.join("")
//     return news.join("");
// }

// console.log(`"${Elzero()}"`)


//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Loop
    - For

    for ( [1] [2] [3] ){
        //Block off Code
    }
*/

// for (let i = 0; i < 10 ; i++){
//     console.log(i)
// }

// ***************************************************

/*
    Loop    
    - Loop On Sequences
*/

// let myArray = [1, 2, "Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// for (let i = 0; i < myArray.length; i ++) {
//     console.log(myArray[i])
// }

// let ArrayString = [];
// for (let i = 0; i < myArray.length; i ++) {
//     if (typeof myArray[i] === "string"){
//         ArrayString.push(myArray[i])
//     }
// }
// console.log(ArrayString)

// ***************************************************

/*
    Loop    
    - Nested Loops
*/

// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log('#'.repeat(10));
//     console.log(`# ${products[i]}`);
//     console.log('#'.repeat(10));
//     for(let j = 0; j < colors.length; j++){
//         console.log(`* ${colors[j]}`)
//     }
//     for(let y = 0; y < models.length; y++){
//         console.log(`- ${models[y]}`)

//     }
// } 

// ***************************************************

/*
    Loop Control   
    - Break
    - Continue
    - Label
*/

// let products = ["Keyboards", "Mouse",10, 20, "Pen", "Pad", 30, 40, "Monitor"];
// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// for(let i = 0; i < products.length; i++){
//     if (products[i] === "Pen"){
//         break;
//     }
//     console.log(products[i]);// Keyboards Mouse
// }

// for(let i = 0; i < products.length; i++){
//     if ( typeof products[i] === "number"){
//         continue;
//     }
//     console.log(products[i]);// Keyboards Mouse Pen Pad Monitor
// }

// mainLoop:for(let i = 0; i < products.length; i++){
//     console.log(products[i]);
//     nestedLoop:for(let j = 0; j < colors.length; j++){
//         console.log(`- ${colors[j]}`)
//         if(colors[j] === "Green")
//         break mainLoop ;
//     }
// }

// ***************************************************

/*
    Loop For Advanced Example
*/


// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];


// let i = 0;

// for(; i < products.length; ){
//     console.log(products[i])
//     i++;
//     if(i === products.length) break;
// }
// console.log(i)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Productes Practice
*/

// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
// let colors = ["Red", "Green", "Black"];

// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products </h1>`);

// for(let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}]${products[i]}</h3>`)
//     for ( let j = 0; j < colors.length; j++){
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`</div>`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Loop
    - While
*/

// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
// let index = 0;

// while (index < 10) {
//     console.log(index)
//     index++;
//     if(index === 3){
//         break;
//     }
// }
// while (index < products.length) {
//     console.log(products[index])
//     index++;
    
// }

// ***************************************************

/*
    Loop
    - Do => While
*/

// let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
// let i = 0;

// while(false){
//     console.log(products[i])
//     i++
// }

// do{
//     console.log(products[i])
//     i++
// } while(false)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Function
    - What Is Function ?
    - User-Defined VS Built In
    - Syntax + Basic Usage
    - Example From Real Life
    - Practical Example
*/

// function sayHallo(userName) {
//     console.log(`Hallo ${userName}`)
// };

// sayHallo("Bassam");

// ***************************************************

/*
    Function Advanced Examples
*/

// function sayHallo(userName, age) {
//     if(age < 30 ){
//         console.log(`App is not suitable for you`)
//     } else {
//         console.log(`Hallo ${userName} your Name is ${age}`)

//     }
// }

// sayHallo("Bassam", 30);
// sayHallo("Ahmad", 40);
// sayHallo("Osama", 18);

// function generateYears(start, end, exclude){
//     for(let i = start; i <= end; i++){
//         if(i === exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }

// generateYears(1982, 2021, 2020);

// ***************************************************

/*
    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interrupting
*/

// function sayHallo(start, end) {
//     for(let i = start ; i <= end; i ++){
//         if(i === 15){
//             return `Interrupting`
//         }
//         console.log(i)
//     }
// };

// sayHallo(10, 20);

// ***************************************************

/*
    Function
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method
*/

// function sayHallo(userName = "Unknown", age = "Unknown") {
//     // if(ags === undefined){
//     //     age = "Unknown"
//     // }
//     // age = age || "Unknown"
//     return ` Hallo ${userName} your age is ${age}`
// }

// console.log(sayHallo())

// ***************************************************

/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/

// function calc(...numbers) {
//     // console.log(Array.isArray(numbers))
//     let result = 0;
//     for( let i = 0; i < numbers.length; i ++){
//         result += numbers[i] // result = result + numbeers[i]
//     }
//     return `Final Result is ${result}`
// }


// console.log(calc(10, 20, 30, 40, 50));

// ***************************************************

/*
    Function
    - Parameters
    - Default
    - Rest 
    - Loop
    - Condition
*/

// function showInfo (userName = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills){
//     document.write(`<div>`);
//     document.write(`<h2 style="text-align: center;">Welcome, ${userName}</h2>`);
//     document.write(`<p style="text-align: center;">Age: ${age} </p>`);
//     document.write(`<p style="text-align: center;">Hour Rate: ${rate} € </p>`);
//     if (show === "Yes"){
//         if(skills.length > 0 ){
//             document.write(`<p style="text-align: center;"> ${skills.join(" | ")} </p>`);
//         } else {
//             document.write(`<p style="text-align: center; color: rgb(80, 104, 106);"> No Sikills </p>`);
//         }
//     } else {
//         document.write(`<p style="text-align: center; color: rgb(80, 104, 106);"> Skills is hidden </p>`);
//     }
//     document.write(`</div>`);

// }

// showInfo("Bassam", 30, 18, "no", "HTML", "CSS", "JavaScript");

// ***************************************************

/*
    Function
    - Anonymous Function
    - Calling Named Function VS Anonymous Function
    - Task Without Name
    - SetTimeout
*/


// function calc(num1 , num2 ){
    //     return num1 + num2;
    // }
    
// let calculator = function (num1 , num2 ){
//     return num1 + num2;
// }

// console.log(calculator(10, 20));

// ***************************************************

/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example 1
// function sayMessage (fName, lName) {

//     let message = `Hallo`;
//     //nested Function
//     function concatMsg() {
//         message = ` ${message} ${fName} ${lName}`
//     }

//     concatMsg()

//     return message;
// }

// console.log(sayMessage("Bassam", "Ali"))

// // Example 2
// function sayMessage (fName, lName) {

//     let message = `Hallo`;
//     //nested Function
//     function concatMsg() {
//         return ` ${message} ${fName} ${lName}`
//     }

//     return concatMsg();
// }

// console.log(sayMessage("Bassam", "Ali"))

// Example 3
// function sayMessage (fName, lName) {

//     let message = `Hallo`;
//     //nested Function
//     function concatMsg() {
//         function getFullName(){
//             return `${fName} ${lName}`
//         }
//         return ` ${message} ${getFullName()} `
//     }

//     return concatMsg();
// }

// console.log(sayMessage("Bassam", "Ali"))

// ***************************************************

/*
    Function
    - Arrow Function
    - Regular VS Arrow [Param + No Param]
    - Multiple Lines
*/

// let print = function () {
//     return 10;
// }

// let print = () => {
//     return 10;
// }

// let print = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(print(100, 50));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Scope
    - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function showText(){
//     var a = 10;
//     let b = 20;       
//     console.log(`Function - From Local ${a}`)
//     console.log(`Function - From Local ${b}`)
// }
// console.log(`From Global ${a}`)
// console.log(`From Global ${b}`)

// showText()

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Higher order Functions
    -> is a function that accepts functions es parameters and/or returns a function.

    Map 
    - method create a new array
    - populted with the results of calling a provided function on every element
    - in the calling array

    Syntax map(callBackFunction(Element, Index, Array) {}, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array => The Current Array

    Notes
    - Map Return A New Array

    Examples
    - Anonymous Function
    - Namend Function
*/

// let myNums = [1, 2, 3, 4, 5, 6]

// let myNewArray = [];

// for (let i = 0; i < myNums.length; i++){
//     myNewArray.push(myNums[i] + myNums[i] )
// }

// console.log(myNewArray);

// let addSelf = myNums.map(function(element, index, arr){
//     console.log(`Current Element => ${element}`);
//     console.log(`Current Index => ${index}`);
//     console.log(`Array => ${arr}`);
//     console.log(`This => ${this}`);
// }, 10)

// ***************************************************

/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Bollean Value
*/

// let swappingCases = "bASSAm";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ingoreNumbers = "1aLi213";

// let sw = swappingCases.split("").map((ele) =>{
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
// }).join("")


// console.log(sw)


// let inv = invertedNumbers.map((ele) =>{
//     return -ele
// });

// console.log(inv)

// let img = ingoreNumbers.split("").map((ele) => {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// console.log(img)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Filter
    - method create a new Array
    - with all elements that üass the test implemented by the provided function.

    Syntax filter(callBackFunction(Element, Index, Array) {}, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the Array.
    - Array => The currant Array
*/

// // Get Frinds With Name Starts with A
// let Frind = ["Ahamd", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// // // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10]

// // //Test Map VS Filter

// // let addMap = numbers.map((ele) =>  {
// //     return ele + ele;
// // });

// // console.log(addMap);

// // let addFilter = numbers.filter((ele) =>  {
// //     return ele + ele;
// // });

// // console.log(addMap);

// let filterFriends = Frind.filter((ele) => {
//     return ele.startsWith("A")
// })

// console.log(filterFriends)

// let evenNumbers = numbers.filter((ele) => {
//     return ele % 2 === 0 ? true : false;
// })

// console.log(evenNumbers)


// ***************************************************

/*
    Filter
    - Filter Longest Word By Number
*/

// //Filter Words More Then 4 Characters
// let sentence = "I Love Foo0d Code Too Playing Much";

// let smallWords = sentence.split(" ").filter((ele) => {
//     return ele.length <= 4;
// }).join(" ")

// console.log(smallWords);

// // // Ignore Numbers
// // let ignoreNumbers = "Bas213sa1m"

// // let ing = ignoreNumbers.split("").filter((ele) => {
// //     return isNaN(parseInt(ele));
// // }).join("")

// // console.log(ing);

// // Ignore Numbers
// let ignoreNumbers = "Bas213sa1m"

// let ing = ignoreNumbers.split("").filter((ele) => {
//     return !isNaN(parseInt(ele));
// }).map((ele) => {
//     return ele * ele;
// }).join("")

// console.log(ing);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Reduce
    - method executes a reducer function on each element of the Arrray,
        resulting in a single output value.
    
    Syntax
    - reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) {}, initialValue)
    - Accumulator => the accummulated value previously returned in the last invocation
    - Index => The index of the current element being processed in the Array.
        - Starts from index 0 if an initialValue is provided.
        - Otherwise, it starts from index 1.
    - Array => The Current Array

*/

// let nums = [10, 20, 15, 30]

// let add = nums.reduce((accumulator, currant, index, arr) => {
//     console.log(`Accumulator => ${accumulator}`);
//     console.log(`Currant Element => ${currant}`);
//     console.log(`Currant Element index => ${index}`);
//     console.log(`Array => ${arr}`);
//     console.log(accumulator + currant);
//     console.log(`##################`);
//     return accumulator + currant;
// }, 5);

// console.log(add);

// ***************************************************

/*
    Filter
    - Longest Word
    - Remove Chracters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce((accumulator, currant) => {
//     console.log(`Accumulator => ${accumulator}`);
//     console.log(`Currant Element => ${currant}`);
//     console.log(accumulator.length > currant.length ? accumulator : currant);
//     console.log(`##################`);
//     return accumulator.length > currant.length ? accumulator : currant ;
// });
// console.log(check);

// let removeChars = ["B", "@", "@", "a", "s", "@", "@", "s", "a", "@", "m"];

// let finalString = removeChars.filter((ele) => {
//     return !ele.startsWith("@")
// }).reduce((acc, cur) => {
//     return `${acc}${cur}`
// })

// console.log(finalString)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    ForEach
    - method executes a provided function once for each array element.

    Syntax forEach (callBackFuncktion(Element, index, Array) {}, thisArg)
    - Element => The currant element being processed in the array.
    - index => The index of the current element being proccessed in the array.
    - Array => The Current Array

    Note 
    - Doesnt Return Anything [Undefined]
    - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div")

// allLis.forEach( function (ele) {
//     ele.onclick = function ()  {
//         // Remove Active
//         allLis.forEach( function (ele) {
//             ele.remove("active")
//         });
//         this.classList.add("active");
//         // Hide all Divs

//         allDivs.forEach(function(ele) {
//             ele.style.display = 'none';
//         })
//     };
// });


// console.log(allLis);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Object
    - Intro and What is Object
    - Testing Window Object
    - Accessing Object
    
*/

// let user = {
//     // Properties
//     theName: "Bassam",
//     thwAge: 30,
//     // Methods
//     sayHallo: function () {
//         return `Hallo`
//     }
// };

// console.log(user.theName)
// console.log(user.thwAge)
// console.log(user.sayHallo())

// ***************************************************

/*
    Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

// let myCuountry = "country";

// let user = {
//     theName: "Osama",
//     "country of": "Deutschland",
//     country: "Deutschland",
// };

// console.log(user.theName)
// console.log(user["country of"])
// console.log(user[myCuountry])

// ***************************************************

/*
    Object
    - Nested Object and Trainings
*/

// let user = {
//     name: "Bassam",
//     age: 30,
//     skills: ["JavaScript", "HTML", "CSS"],
//     available: false,
//     addresses: {
//         Syr: "Darra",
//         Deutschland: {
//             one: "Dortmund",
//             tow: "Korne"
//         },
//     },
//     chackAv: function () {
//         if(this.available === true) {
//             return `Free For Work`
//         }else {
//             return `Not Free`
//         }
//     },
// };

// console.log(user.name);// Bassam
// console.log(user.age);// 30
// console.log(user.skills.join(" | "));//JavaScript | HTML | CSS
// console.log(user.skills[1]);// HTML
// console.log(user.addresses.Syr);// Darra
// console.log(user.addresses.Deutschland.tow);// Korne
// console.log(user["addresses"].Deutschland.one);// Dortmund
// console.log(user["addresses"]["Deutschland"]["tow"]);// Korne
// console.log(user.chackAv());// Not Free


// ***************************************************

/*
    Object
    - Create eith New KeyWord new Object();
*/

// let user = new Object();

// console.log(user);

// user.age = 30;
// user["country"] = "Deutschland";

// user.sayHello = function () {
//     return ` Hallo `
// }

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

// ***************************************************

/*
    Object
    - Create with New KeyWord new Object();
*/


// let user = {
//     age: 20,
//     doubleAge: function () {
//         return this.age * 2;
//     },
// }
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 30;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// ***************************************************

/*
    Object
    - Create Object With assign Method
*/

// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//         return this.prop1;
//     },
// };

// let obj2 = {
//     prop2: 1,
//     meth2: function () {
//         return this.prop2;
//     },
// };

// let targetObject = {
//     prop1: 100,
//     prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 400;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, {props5: 5, prop6: 6})

// console.log(newObject);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    DOM
    - What is DOM
    - Dom Selectors
        - Find Element By ID
        - Find Element By Tag Name
        - Find Element By Class Name
        - Find Element By CSS Selectors
        - Find Element By Collection
            - title
            - body
            - image
            - forms
            - links
*/

// let myIdElement = document.getElementById("my-div")
// let myTagElement = document.getElementsByTagName("p")
// let myClassElement = document.getElementsByClassName("my-Span")
// let myQueryElement = document.querySelector(".special")
// let myQueryAllElement = document.querySelectorAll(".my-Span")

// console.log(myIdElement);
// console.log(myTagElement[1]);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

// ***************************************************

/*
    DOM [Get / Set Elements Content And Attributes]
    - innerHTML
    - textContent
    - Change Attributes Directly
    - Change Attributes With Methods
        -getAttribute
        -setAttribute
    Search
    - innerText
*/

// let myElement = document.querySelector(".js")

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text from <span> main.js</span>";
// myElement.textContent = "Text from <span> main.js</span>";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "pict";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://de.de");
// myLink.setAttribute("title", "X");

// ***************************************************

/*
    DOM [Check Attributes]
    - Element.attributes
    - Element.hasattribute
    - Element.hasattributes
    - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if(myP.hasAttribute("data-src")) {
//     if(myP.getAttribute("data-src" === "")){
//         myP.removeAttribute("data-src");
//     }else {
//         myP.setAttribute("data-src", "New Value")
//     }
// }else {
//     console.log("Nor found");
// }

// if(myP.hasAttribute()){
//     console.log(`Has Attributes`)
// }

// if(document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log(`Has Attributes`);
// } else {
//     console.log(`Div has no Attributes`);
// }

// ***************************************************

/*
    DOM [Create Elements]
    - createElement
    - createComent
    - createTextNode
    - createAttribute
    - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// //Append comment to Element
// myElement.appendChild(myComment);

// //Append Text to Element
// myElement.appendChild(myText);

// //append Element to Body
// document.body.appendChild(myElement)

// console.log(myElement);


// ***************************************************

/*
    DOM [Create Elements]
    - Practice Product With Heading And Paragraph
*/


// for(let i = 0; i < 100; i++){
//     let myElementDiv = document.createElement("div");
//     let myElementH2 = document.createElement("h2");
//     let myElementP = document.createElement("p");
    
//     let myHeadingText = document.createTextNode("Product Title");
//     let myParagraphText = document.createTextNode(`Product Description ${i + 1}`);
// //Add Heading Text 
// myElementH2.appendChild(myHeadingText);

// //Add Heading to div Element
// myElementDiv.appendChild(myElementH2);

// // Add Paragraph Text
// myElementP.appendChild(myParagraphText);

// // Add paragrapg to Element Div
// myElementDiv.appendChild(myElementP);

// myElementDiv.className = "product";
// document.body.appendChild(myElementDiv);
// console.log(myElementDiv);
// }

// ***************************************************

/*
    DOM [Deal With Childrens]
    - childeren
    - childNodes
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);


// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

// ***************************************************

/*
    DOM [Events]
    - Use Enents on HTML
    - Use Enents on JS
        - onclick
        - oncontextmenu
        - onmouseenter
        - onmouseleave

        - onload
        - onscroll
        - onresize

        - onfocus
        - onblur
        - onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onclick = () => {
//     console.log("Clicked")
// }
// myBtn.oncontextmenu = () => {
//     console.log("Clicked")
// }

// ***************************************************

/*
    DOM [Events]
    - Validate From Practice
    - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// console.log(userInput)

// document.forms[0].onsubmit = (event) => {
//     let userValid = false;
//     let ageValid = false;

//     // console.log(userInput.value);
//     // console.log(userInput.value.length);

//     if(userInput.value !== "" && userInput.value.length <= 10){
//         userValid = true;
//     }

//     if(ageInput.value !== ""){
//         ageValid = true;
//     }

//     if( userValid === false || ageValid === false){
//         event.preventDefault();
//     }
// };

// document.links[0].onmouseenter = (event) => {
//     console.log(event);
//     event.preventDefault();
// };
// document.links[0].onclick = (event) => {
//     console.log(event);
//     event.preventDefault();
// };

// ***************************************************

/*
    DOM [Events Simulation]
    - click
    - focus
    - blur
*/

// let two = document.querySelector(".two");
// let one = document.querySelector(".one");

// window.onload =  () => {
//     two.focus();
// }

// one.onblur =  () => {
//     document.links[0].click();
// }

// ***************************************************

/*
    DOM [Class List]
    - classList
        - length
        - contains
        - item(index)
        - add
        - remove
        - toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("0"));

// element.onclick = () => {
//     element.classList.add("add-one", "add-two")
// }

// element.onclick = () => {
//     element.classList.remove("one", "two")
// }

// element.onclick = () => {
//     element.classList.toggle("Bassam")
// }

// ***************************************************

/*
    DOM [CSS]
    - style
    - cssText
    - removePropoerty(propertyName) [inline, Stylesheet]
    - setProperty(proportyName, value, priority)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.backgroundColor = "green";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color")
// element.style.setProperty("color", "blue")
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height")
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red")

// ***************************************************

/*
    DOM [Deal with Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String]
    - prepend [Element || String]
    - remove 
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// // element.before("Hello From JS");
// element.append(createdP);
// element.prepend(createdP);

// // element.remove();

// ***************************************************

/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/

// let span = document.querySelector(".two");

// // console.log(span.nextSibling);
// // console.log(span.nextElementSibling);
// // // console.log(span.nextElementSibling.remove());
// // console.log(span.nextElementSibling);
// // console.log(span.previousElementSibling);
// console.log(span.parentElement);

// span.onclick = function () {
//     span.parentElement.style.opacity = '0';
// }

// ***************************************************

/*
    DOM [Cloning]
    - cloneNode(Deep)
*/

// let myp = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");


// myp.id = `${myp.id}-clone`;

// myDiv.appendChild(myp)

// ***************************************************

/*
    DOM [Add Event Listener]
    - addEventListner
    - Use without On
    - Attach Multiple Events
    - Error Test

    Search
    - Capture & Bubbling JavaScript
    - removeEvantListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one () {
//     console.log("Message From OnClick 1");
// }
// function two () {
//     console.log("Message From OnClick 2");
// }

// myP.addEventListener("click", function() {
//     console.log("Message From AddEvent");
    
// })

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.onclick = function () {
//     let newP = myP.cloneNode(true);
//     newP.className = "clone";
//     document.body.appendChild(newP);
// };

// // let cloned = document.querySelector(".clone"); //Error

// // cloned.onclick = function () {
// //     console.log("iam Cloned");
// // }

// document.addEventListener("click", (e) => {
//     if(e.target.className === "clone") {
//         console.log("Iam Cloned")
//     }
// })

// ***************************************************

/*
    BOM [Browser Object Model]
    - Interoduction
        - Window object Is The Browser Window
        - Window Contain The Document Object
        - All Global Veriables And Objects And Function Are Nembers Of Window Object
            - Test Document And Console
    What can we Do With Window Object ?
        - Open Window
        - Close Window
        - Move Window
        - Resize Window
        - Print Document
        - Run code After Period Of Time Once or More
        - Fully Control The URL
        - Save Date Inside Browser To Ise Later
*/

// console.log("Good");
// window.console.log("Good");
// window.document.write("Good");
// window.document.title = "Hallo Js";

// ***************************************************

/*
    BOM [Browser Object Model]
    - alert(Message) => Need No Response Only Ok Available
    - confirm(Message) => Need Response And Return a Boolean
    - prompt(Message, Defaulte Message) => Collect Data
*/

// window.alert("Test");
// this.alert("Test");
// alert("Test");
// console.log("Test");

// let confirmMasg = confirm("Are you Sure ?");

// console.log(confirmMasg);

// if(confirmMasg == true) {
//     console.log("Item  Deleted");
// }else {
//     console.log("Item Not Deleted");
// }
// let promptMsg = prompt("Good Day to You!", "00.00.0000");

// console.log(promptMsg);

// ***************************************************

/*
    BOM [Browser Object Model]
    - setTimeout(Function, Timeout, Additional Params)
    - clearTimeout(Identifier)
*/

// setTimeout(() => {
//     console.log("Hallo")
    
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg () {
//     console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Bassam", 30);

// function sayMsg (user, age) {
//     console.log(`Iam Message  for ${user} His Age Is: ${age}`);
// }

// let counter = setTimeout(sayMsg, 3000, "Bassam", 30);

// function sayMsg (user, age) {
//     console.log(`Iam Message  for ${user} His Age Is: ${age}`);
// }

// let btn = document.querySelector("button");

// btn.onclick = () => {
//     clearTimeout(counter);
// }

// ***************************************************

/*
    BOM [Browser Object Model]
    - setInterval(Function, Millseconds, Additional Params)
    - clearInterval(Identifier)
*/

// setInterval(() => {
//     console.log("Hallo")
    
// }, 3000);

// setInterval(sayMsg, 3000);

// function sayMsg () {
//     console.log(`Iam Message`);
// }

// setInterval(sayMsg, 3000, "Bassam", 30);

// function sayMsg (user, age) {
//     console.log(`Iam Message  for ${user} His Age Is: ${age}`);
// }


// function sayMsg (user, age) {
    //     console.log(`Iam Message  for ${user} His Age Is: ${age}`);
    // }
    
    
    
    // let div = document.querySelector("div"); 

    // function countDown() {
    //     div.innerHTML -= 1;
    //     if(div.innerHTML === "0") {
    //         clearInterval(counter)
    //     }
    // }

    // let counter = setInterval(countDown, 1000);

    // ***************************************************

/*
    BOM [Browser Object Model]
    - Location Object
        - herf Get / Set [Url || File || Mail]
        - host
        - hash
        - protocol
        - reload()
        - replace()
        - assign()
*/

// console.log(location);
// console.log(location.href);
// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript#see_also";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol)

// console.log(location.hash);

// window.location.reload();

// location.replace("https://google.com"); // no history
// location.assign("https://google.com"); // with history

    // ***************************************************

/*
    BOM [Browser Object Model]
    - Open(URL [Opt], window Name Or Target Attr [Opt], Win Features [Opt], History Replace)
    - close()
    -Window Features
        - width [Num]
        - height [Num]
        - left [Num]
        - top [Num]

    Search
        - Window.Open window Features
*/

// setTimeout(function () {
//     //_self
//     window.open("https://google.com","_blank", "width=400, height=400, left=500, top=400")
// }, 2000)

   // ***************************************************

/*
    BOM [Browser Object Model]
    - History API
        - Properties
            - length
        - Methods
            - back()
            - forward()
            - go(Delta) => Position In History

    Search [For Advanced Knowledge]
        - pushState() + replaceState()
*/

// console.log(history);
// console.log(history.length);

// history.back();
// history.go(0);
// history.go(-2);

   // ***************************************************

/*
    BOM [Browser Object Model]
    - stop()
    - print()
    - focus()
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Options)
*/

// window.print()

// let myNewWindo = window.open("https://google.com","_blank","width=400, height=400")
// myNewWindo.focus();

// window.scrollTo(500, 200);
// window.scrollBy(500, 200);

// window.scrollTo({
//     left: 500,
//     top: 200,
//     behavior: "smooth"
// })

   // ***************************************************

/*
    BOM [Browser Object Model]
    - Practice => Scroll To Top
    - scrollX [Alias => PageXOffset]
    - scrollY [Alias => PageXOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

// let myBtn = document.querySelector("button");

// window.onscroll = function () {
//     if (window.scrollY >= 600) {
//         console.log(`Scrolling Y Value Is ${window.scrollY}`);
//         myBtn.style.display = "block";
//     }else {
//         myBtn.style.display = "none"
//     }
// }

// myBtn.onclick =  () => {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth"
//     });
// }

   // ***************************************************

/*
    BOM [Browser Object Model]
    
    Local Storage 
    - setItem
    - getItem
    - removeItem
    - clare
    - key

    Info
    - No Expiration Time 
    - HTTP and HTTPS
    - Private Tab 
*/

// //set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage['fontSize'] = "20px";

// // get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color)
// console.log(window.localStorage["color"])

// //remove One
// window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear()

// //get Key
// console.log(window.localStorage.key(0));

// //set color in Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");


// console.log(window.localStorage);
// console.log(typeof window.localStorage);


   // ***************************************************

/*
    BOM [Browser Object Model]
    
    Local Storage Praxis
    
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// // window.localStorage.clear();

// if (window.localStorage.getItem("color")) {// If There is Color in Local Storage
//     // [1] Add Color to div
//     exp.style.background = window.localStorage.getItem("color");
//     // [2] remove default Active Class for a li [red]
//     lis.forEach ((li) => {
//         li.classList.remove("active");
//     })
//     // Add Active Class to  Current color
//     document.querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`).classList.add("active");

// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         // remove Active Class fro a li
//         lis.forEach ((li) => {
//             li.classList.remove("active");
//         })
//         // Add Active Calss to current Element
//         e.currentTarget.classList.add("active");

//         // Add Currant Color to Local Storage
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);

//         //Change Div Background Color
//         exp.style.background = e.currentTarget.dataset.color

//     } )
// })

   // ***************************************************

/*
    BOM [Browser Object Model]
    Session Storge
        - setItem    
        - getItem    
        - removeItem
        - clear
        - key

    Info
        - New Tab = Copy Session
        - Duplicate Tab = Copy Session
        - New Tab With Same Url = New Session
    
*/

// // window.localStorage.setItem("color", "red");
// // window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//     // console.log(this.value);
//     window.localStorage.setItem("input-Name", this.value);
//     window.sessionStorage.setItem("input-Name", this.value);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Destructuring
    " Is a JavaScript expression that allows us to extract data from arrays,
        objects, and maps and set them into new, distinct variables.
        - Destructuring Array
    "
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFrinds = ["Jan", "Timo", "Mousa", "Ali"];

// // [a, b, c, d] = myFrinds;
// [a = "A", b, c, d, e = "Bassam"] = myFrinds;
// // [a, b, c] = myFrinds;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// let [x, y, ,z] = myFrinds;
// console.log(x);
// console.log(y);
// console.log(z);

// ***************************************************

/*
    Destructuring
    - Destructuring Array Advanced Examples
*/

// let myFriends = ["Mousa", "Timo", "Ali", ["Jan", "Amr", ["Mohamad", "Gamal"]]];

// // console.log(myFriends[3][2][1]);

// let [, , ,[a, ,[,b]]] = myFriends;

// console.log(a);//Jan
// console.log(b);//Gamal

// ***************************************************

/*
    Destructuring
    - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // // Save Book Value in Stash
// // let stash = book; //Video

// // // Change Book Value
// // book = video; //Book

// // //Change Video Value
// // video = stash; //Video

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

// ***************************************************

/*
    Destructuring
    - Destructuring Object
*/

// const user = {
//     theName: "Bassam",
//     theAge: 30,
//     theTitle: "Developer",
//     theCountry: "Deutschland"
// };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName =  user.theName;
// // let theAge =  user.theAge;l
// // let theTitle =  user.theTitle;
// // let theCountry =  user.theCountry;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// // const { theName, theAge, theTitle, theCountry } = user;
// const { theName, theAge, theTitle, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ***************************************************

/*
    Destructuring
    - Destructuring Object
        - Naming The Variables
        - Add New Property
        - Nested Object
        - Destructuring The Nested Object Only
*/

// const user = {
//     theName: "Bassam",
//     theAge: 30,
//     theTitle: "Developer",
//     theCountry: "Deutschland",
//     theColor: "Black",
//     skills: {
//         html:70,
//         css:80,
//     },
// };

// // const { theName, theAge, theTitle, theCountry } = user;
// const { theName: n, theAge: a, theCountry, theColor: co = "Red", skills: { html: h, css } } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}` );
// console.log(`My CSS Skill Progress Is ${css}` );

// const {html: skillOne, css: skillTwo} = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}` );
// console.log(`My CSS Skill Progress Is ${skillTwo}` );

// ***************************************************

/*
    Destructuring
    - Destructuring Function Parameters
*/

// const user = {
//     theName: "Bassam",
//     theAge:30,
//     skills: {
//         html: 70,
//         css: 80
//     },
// };

// showDetails(user);

// // function showDetails(obj) {
// //     console.log(`Your Name Is ${obj.theName}`);
// //     console.log(`Your Age Is ${obj.theAge}`);
// //     console.log(`Your CSS Skill Progress Iss ${obj.skills.css}`);
// // }

// function showDetails({theName: n, theAge: a, skills: {css: c}} = user) {
//     console.log(`Your Name Is ${n}`);
//     console.log(`Your Age Is ${a}`);
//     console.log(`Your CSS Skill Progress Iss ${c}`);
// }

// ***************************************************

/*
    Destructuring
    - Destructuring Mixed Content
*/

// const user = {
//     theName: "Bassam",
//     theAge: 30,
//     skills: ["HTML", "CSS", "JavaScript"],
//     addresses: {
//         Deutschalnd: "Dortmund",
//         Syria: "Darra"
//     },
// }

// const {theName: n, theAge: a, skills: [one, two, three], addresses: {Deutschalnd: d}} = user;

// console.log(`Your Name is : ${n}`);
// console.log(`Your Age is : ${a}`);
// console.log(`Your Skills is : ${one}, ${two}, ${three}`);
// console.log(`Your Adress is : ${d}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Set Data Type
        Syntax: new Set(Iterable)
            - Object to Store Unique Values
            - Cannot Access Elements By Index

        Properties:
        - Size

        Methods:
        - add
        - delete
        - clear
        - has
*/

// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueDate = new Set([1, 1, 1, 2, 3]);
// // let myUniqueDate = new Set(myData);
// // let myUniqueDate = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueDate = new Set();

// myUniqueDate.add(1).add(1).add(1);
// myUniqueDate.add(2).add(3).add("A");

// console.log(myData);
// console.log(myUniqueDate);

// console.log(myUniqueDate.size);

// console.log(myData[0]);
// console.log(myUniqueDate[0]);// undefined

// // myUniqueDate.delete(2)
// console.log(myUniqueDate.delete(2))
// console.log(myUniqueDate);
// console.log(myUniqueDate.size);

// console.log(myUniqueDate.has("A"));//true
// console.log(myUniqueDate.has("a".toUpperCase()));//true

// // myUniqueDate.clear();

// console.log(myUniqueDate);
// console.log(myUniqueDate.size);
