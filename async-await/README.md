# async-await

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


### async 함수사용법

async function sum(){
    await 
}

무조건 await 가 안에 들어가야함

프로미스기반 함수를 반환하는 코드임 

프로미스 콜백함수보다 한 단계 더 높은 코드임


async loginUser1(){
     var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
   }
response 에 담기위해서는 await를 꼭 써줘야함

async loginUser1(){
  1번쨰 비동기 요청
     var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
     if(response.data.id === 1){
       2번째 비동기 요청
       var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
     }
   }
프로미스기반보다 훨씬 더 직관적인 코드가 된다.

then, catch 를 안써도 됨

실패로직은 try 로 작성



### then,catch 예외처리

then 성공로직

catch 실패로직