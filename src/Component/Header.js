import React from 'react';
import Days from './Days';
import "./Header.css";

const Header=()=> {
        return(
            <div class="header">
                <h1>오늘의 헬스</h1>
                <p>오늘은 {<Days/>} 임으로 {} 운동을 하러 갑시다</p>
            </div>
            
        );
    
}

// 메인 머리 부분 여기서 추가로 오늘이 어떤 요일이고 어떤 운동 하는 날인지 알려줄꺼임. 
export default Header;