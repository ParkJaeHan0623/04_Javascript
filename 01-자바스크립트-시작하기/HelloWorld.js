console.group("MyMessage1");    //출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript1");
console.log("안녕하세요. Javascript2");
console.log("안녕하세요. Javascript3");
console.groupEnd(); //그룹으로 묶기 끝

console.group("MyMessage2");    //출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript4");

console.group("My Message2-1"); //그룹안에 하위그룹 생성
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd(); //하위 그룹으로 묶기 끝
console.groupEnd(); //그룹으로 묶기 끝

// 소스코드 실행    Ctrl + Alt + N