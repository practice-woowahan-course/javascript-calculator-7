# javascript-calculator-precourse

# 문자열 덧셈기

> ## 문자열 덧셈 계산기

---

> ### 📌 과제 진행 요구 사항

- 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
- AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

---

> ### 🔨 기능 요구 사항
>
> 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  > 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  > 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

---

> ### 🔴 입출력 요구 사항
>
> **입력**

- 구분자와 양수로 구성된 문자열
  출력 : 덧셈 결과

```
결과 : 6
```

**실행 결과 예시**

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

---

> ### 🛠️ 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

<br>
<br>

# 기능 목록 작성

- ✅ 사용자 입력 받기
- ✅ 사용자가 입력한 문자열에서 기본 구분자(,:)를 기준으로 문자열을 나누는 메서드 작성. 추후 구분자가 동적으로 생성되도록 정규표현식 배열에 등록하여 작성
- ✅ 사용자 입력에 커스텀 구분자가 포함되어있을 경우, 커스텀 구분자를 추출하여 구분자 정규표현식에 추가
- 추출된 문자열을 숫자형으로 바꾸는 기능
- 추출된 숫자형을 합산하는 기능
- 결과를 출력하는 기능

# 개발 중 체크리스트

## 프로그래밍 체크리스트

### 필수

- ✅ Node.js 20.17.0 버전에서 실행 가능해야 한다.
- ✅ 프로그램 실행의 시작점은 App.js의 run()이다.
- ✅ package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

---

### 이후 요구사항

indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.

- 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
- 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
  3항 연산자를 쓰지 않는다.
  함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
  Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
- else를 지양한다.
  - 때로는 if/else, when문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI로직은 제외한다.
- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- 입출력을 담당하는 클래스를 별도로 구현한다.
  - 아래 `InputView`, `OutputView` 클래스를 참고하여 입출력 클래스를 구현한다.
  - 클래스 이름, 메소드 반환 유형, 시그니처 등은 자유롭게 수정할 수 있다.

---

### 개인적인 목표

- 캡슐화를 깨지 말고 객체지향적으로 프로그래밍하자. getter와 setter 사용을 지양한다.

## 기능 요구 사항 체크리스트
