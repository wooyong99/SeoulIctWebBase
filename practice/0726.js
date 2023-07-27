var person = {
    name: '홍길동',      // 이름 프로퍼티를 정의함.
    birthday: '030219',  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: '1234567',      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return birthday + pId;
    },
};

// Q . this.를 안 붙이면 reference Erorr가 뜨는데 위에 선언을 했음에도 불구하고 왜 에러가 뜨는지 원인 찾아보기
// A. 우선 JavaScript에서 this가 무슨 역할을 하는 지 알아보자. 
// JavaScript에서 this는 1. 단독으로 사용하는 경우, 2. 함수 내에서 사용하는 경우, 3. 메소드 내에서 사용하는 경우 등 여러가지가 있습니다. 
// 위 코드를 살펴보면 person이라는 객체 안에 이름,생일,나이,id 변수가 있고, 내부에 메소드가 존재한다. 그리고 메소드 안에서 생일과 id를 더한 값을 return하도록 작성되어있다.
// 그렇기 때문에 객체 내부에서 호출하기 위해서는 this.를 붙여야하기 때문에 안붙이면 에러가 발생하는 것이었다. 
// 만약 this.를 안붙이면 객체 내부의 변수를 호출하는게 아니라 전역으로 사용되는 변수를 호출한다는 것이고, reference Erro가 발생하지 않는다면
// 전역 지역에 해당 변수가 선언된 적이 있다면 reference Error 발생하지 않는 것이다.

