// Number      5
// BigInt      1n
// String      "Hello"
// Symbol
// Boolean     false
// Null
// Undefined   let x =
//    Object      { }

// typeof x / typeof (x)

// исключения
// typeof function / function
// typeof null / object
// typeof NaN / number
// ---------------
//    false
// '', 0, null, undefined, NaN, false
// true
// { }, [], function

//    console.log(1 + "2") / "12"
// console.log(" " + 1 + 0) / "10"
// console.log(" " - 1 + 0) / -1
// console.log("3" * "8") / 24
// console.log(10 + 4 + "px") / '14px'
// console.log("px" + 5 + 10) / "px510"
// console.log("42" - 40) / 2
// console.log("42px" - 1) / NaN
// console.log(Null + 1) / 1
// console.log(Undefined + 1) / NaN

//    == vs ===
//    console.log(2 == '2') / true
// console.log(2 === '2') / false
// console.log(undefined == null) / true
// console.log(undefined === null) / false
// исключения
// console.log('0' == false) / true
// console.log('0' == 0) / true

// ----------
//    console.log(false == '') / true
// console.log(false == []) / true
// console.log(false == {}) / false
// console.log('' == 0) / true
// console.log('' == []) / true
// console.log('' == {}) / false
// console.log(0 == []) / true
// console.log(0 == {}) / false
// console.log(0 == null) / false



// Замыкания - функция которая имеет доступ к переменным из вышестоящего скоупа
// function sayHello(name) {
//    let message = "Hello" + name;
//    return function () {
//       console.log(message)
//    }
// }

// let helloYuna = sayHello('Yuna');
// console.log(helloYuna())