import bus from '../utils/bus.js';

export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created(){
        /* 이벤트 보내기 이벤트 버스 */
        /* 자식에서 부모로 데이터를 전송하는 방법 */
        bus.$emit('start:spinner');
        /* 
            프로미스 체이닝 가능 액션 js 에서 리턴값으로 리스폰스 넘기면 아래와같이 then catch 쓸 수있음
            연결연결해서 데이터값이 다 넘어온 후에 then으로 체이닝 걸어서 스피너를 끄는 방식임 
         */
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            // 데이터값을 다불러왔을때 덴으로 bus.$emit('endLspinner'); 적용
            .then(()=> {
                console.log('fetched');
                //end:spinner에 이벤트 이름 내보내기 두번째 인수에는 이벤트가 발생했을 때 같이 내보내고싶은 데이터를 설정가능
                bus.$emit('end:spinner');
            })
            .catch((err) => {
                console.log(err);
            });
    }

}