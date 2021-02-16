/* 이벤트 버스 초기화 뷰인스턴스 생성후 이 인스턴스를 독립적인 각 컴포넌트끼리 통신 할때 중간지로 활용 */
import Vue from 'vue';

export default new Vue();
//exprot 내보내기 방식 1
/*
export const bus = new Vue();

App.vue 에서 불러올떄
import { bus } from './bus.js'; 
위에처럼 가능

*/


/*
    export default new Vue(); 
    이방식은 
    
    App.vue 
    import Bus from './bus.js';
    이렇게 가능
*/