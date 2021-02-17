# vue-cli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 데이터 호출 시점

1. 컴포넌트 라이프 사이클 훅
-  created : 컴포넌트가 생성 되자마자 호출되는 로직

2. 라우터 네비게이션 가드
- 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
- created 보다 먼저 데이터 호출 할건지 가능함 

### 라우터 네비게이션 가드
- 사이트 참고
https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/

### 액션
//액션에서 뮤스테이션으로 state값을 넘길수있는 구조임
//액션은 state 값을 변경을 못함 뮤스테이션으로 값을 넘겨야함  context.commit() 이런식으로 뮤스테이션 호출
//액션,뮤스테이션 함수는 대문자로 지어주는게 국룰


### 뮤스테이션
//뮤스테이션은 스테이트값으로 넘김 state를 첫인자로 무조건 받음
//news에 액션에서 담아준(인자) 배열이 담김
//액션에서 스테이트값에 도달하기 위해서는 뮤스테이션이 필요함



### 이벤트 버스

/* 자식에서 부모로 데이터를 전송하는 방법 */
//end:spinner에 이벤트 이름 내보내기 두번째 인수에는 이벤트가 발생했을 때 같이 내보내고싶은 데이터를 설정가능
//bus.$emit('end:spinner');


/* 부모가 자식 이벤트 받아오기는 on */
/* 자식에서 부모로 데이터를 받는 방법 자식에서 보낸 이벤트 명 , 두번째 인수에는 콜백함수를 지정*/
    bus.$on('start:spinner', this.startSpinner);


### porps 
Vue를 사용할 때 부모 컴포넌트에 있는 data를 자식 컴포넌트에서 필요로할 때가 있습니다(또는 넘겨줘야 할 경우가 있습니다). 그럴 경우 어떻게 부모 컴포넌트의 data를 자식 컴포넌트에게 넘겨줄 수 있을까요? 그럴 땐 props옵션을 사용하면 됩니다.


