# vue-charts

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


### 각 컴포넌트에 있는 익스폴트 디폴트 설명

export default {
  
}

는 콤포넌트 속성 && 인스턴스 옵션을 정하는 구간 이걸 지우고 하면 싱글컴포넌트 기반이 무너지기때문에 에러뜸

### 차트라이브러리
1. 차트라이브러리 npm 으로 설치
2. app.vue 에서 로딩
3. mounted () 라이프 사이클 훅에서 차트를 그림
4. 차트를 컴포넌트화
5. 컴포넌트의 플러그인화
6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합


### vue 에서 돔 잡는 방법

<div ref = "app"></div>

this.$refs.app;


### import 공용으로 쓰기 방법 (플러그인으로 생성한 후 install 메서드 만들면 됨 src\plugins\ChartPlugin.js)

Vue.prototype = > 특정 객체의 속성을 확장하는 것

import Chart from 'chart.js'; 라이브러리를 로딩해서 차트에 담아둔걸 모든 컴포넌트에서 
this.$_Chart 를 쓰면 import Chart from 'chart.js'; 를 굳이 안써도됨 

공용으로 쓰겠다 하는것임

Vue.JS 플로그인은 install 메소드를 노출해야 합니다. install 함수는 전달인자로 첫번째 전달인자는 Vue 생성자, 두번째 전달인자로 옵션을 가집니다.






