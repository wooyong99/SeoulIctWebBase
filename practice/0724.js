let a;          // 해당 코드는 a라는 변수를 선언하기만 하고 초기화를 하지 않았다.
let b = null;   // 해당 코드는 b라는 변수에 null값을 넣어 초기화를 했다.

console.log("a = "+a);      // a변수는 초기화를 하지 않았기 때문에 할당되지 않았다는 의미로 undefined가 출력된다 .
console.log("b = "+b);      // b변수는 null 값을 넣었기 때문에 빈 값을 나타내기 위해 null이 출력된다.
                            // 따라서 undefined = 없는 값 / null = 빈 값 이라고 할 수 있다.
                            
                            // 그리고 undefined과 null은 모두 원시 값이기 때문에 typeof로 자료형을 확인해보면
console.log(typeof(a));     // undefined는 undefined 자료형을 나타내고,
console.log(typeof(b));     // null은 object 자료형을 나타낸다. 왜냐하면 null 값은 빈 값을 참조하기 때문에 null은 object이고 참조 자료형이다.

// undefined 값이 나오는 Case
console.log("=== undefined 값이 나오는 Case ===");
// Case 1 - 값을 할당하지 않은 변수 / 초기화 되지 않은 변수
let u_case1 ;
console.log("u_case1 : "+u_case1);
// Case 2 - 함수가 값을 return 하지 않았을때
function fun1(){
    return
}
let u_case2 = fun1()
console.log("u_case2 : "+u_case2);

// null 값이 나오는 Case
console.log("=== null 값이 나오는 Case ===");
// Case 2 - 변수 초기화 시 null 값 대입
let n_case1 = null;
console.log("n_case1 : "+n_case1)
// Case 2 - 함수의 return 값이 null일때
function fun2(){
    return null;
}
let n_case2 = fun2()
console.log("n_case2 : "+n_case2)

