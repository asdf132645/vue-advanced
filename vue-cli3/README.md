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

### 라우터 비포엔터
beforeEnter는 인증 등을 확인할떄 쓰는 가장 흔한 방법이다.

beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);
            }
to -> 이동할 url의 라우팅 정보

from -> (어디서부터) 현재 url의 라우팅 정보

next -> next() 를 호출해야지만 해당 페이지로 이동이 가능 없으면 이동 불가능

if (to.auth ) 인증값이 있으면 이동 등 if문 걸기 가능

                if(to.auth){
                    next()
                }else{
                    인증값이 없으면 로그인페이지로 이동해라.
                    router.replace('/login');
                }

### 라우터 js에서 store js를 사용할려면 index.js 를 import 해주면 됨

import { store } from './stroe/index.js' 이렇게
store.dispatch("FETCH_LIST", this.$route.name)

### 라우터,스토어 는 main.js 에 연결 시켜줘야함 api는 연결 x

### mounted()
//인스턴스가 화면에 불려와젔을떄 나타났을때 라이프사이클 훅


### 프로미스 기반 액션 함수

FETCH_NEWS(context) {
        //api폴더에 index.js 함수 호출
        return fetchNewsList()
            .then(response => {
                // console.log(response.data);
                context.commit('SET_NEWS', response.data);
                //response는 프로미스 객체를 반환하고있기때문에 반환한 객체를 뉴스뷰에서 then 으로 체이닝 가능함
                return response;
            })
            .catch(err => {
                console.log(err);
            })
    },

### action async 함수
async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

### async 액션 함수

async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

return 을 안해주면 비동기처리 순서가 뒤죽박죽이 됨 꼭 결과값을 반환해줘야함
다음의 처리를 이어서 할수가있음 프로미스 체이닝을 하기위해
프로미스를 반환이 됨


### try catch 예외처리
컴포넌트 단이아니라 api에서 트라이 캣치문을 넣는게 훨씬 가독성이좋음

async function fetchAskList() {
    try{
        return axios.get(`${config.baseUrl}ask/1.json`);
    } catch(error){
        console.log(error);
    }
}

### 액션함수 설명

//액션에서 뮤스테이션으로 state값을 넘길수있는 구조임
    //액션은 state 값을 변경을 못함 뮤스테이션으로 값을 넘겨야함  context.commit() 이런식으로 뮤스테이션 호출
    //액션,뮤스테이션 함수는 대문자로 지어주는게 국룰


### 외부 라이브러리 모듈화 이유

1. vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함 예) 제이쿼리 라이브러리등을 결합 할 수 있어야함
2. 종류
 1) 차트
 2) 데이트 피러
 3) 데이블
 4) 스피너


 ### 컴포넌트 디자인 패턴

 1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
 2. slot - 마크업 확장이 가능한 컴포넌트
 3. Controlled - 결합력이 높은 컴포넌트
 4. Renderless - 데이터 처리 컴포넌트
