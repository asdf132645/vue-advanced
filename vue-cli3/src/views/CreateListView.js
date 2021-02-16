import ListView from './ListView.vue';
import bus from '../utils/bus.js';

//하이오더 컴포넌트 만들기 만든이유는 뉴스,에스크,잡스 뷰에서 하는 행돌이 같았기때문에 재사용하기위한 코드들
// 이거 스면 뉴스,에스크,잡스 뷰 사용안해도됌


//export default  로 펑션 꺼내기
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        //created 재활용
        created() {
            bus.$emit('start:spinner');
            /* 
                프로미스 체이닝 가능 액션 js 에서 리턴값으로 리스폰스 넘기면 아래와같이 then catch 쓸 수있음
                연결연결해서 데이터값이 다 넘어온 후에 then으로 체이닝 걸어서 스피너를 끄는 방식임 
             */
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                // 데이터값을 다불러왔을때 덴으로 bus.$emit('endLspinner'); 적용
                .then(() => {
                    console.log('fetched');
                    //end:spinner에 이벤트 이름 내보내기 두번째 인수에는 이벤트가 발생했을 때 같이 내보내고싶은 데이터를 설정가능
                    bus.$emit('end:spinner');
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        //render 함수로 컴포넌트를 로딩
        render(createElement) {
            return createElement(ListView);
        }

    }
}