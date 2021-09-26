import React from 'react';
import Days from './Days';


const Header=()=> {
        return(
            <div class="header">
                <h1><Days/></h1>
            </div>
            
        );
    
}

// 메인 머리 부분 여기서 추가로 오늘이 어떤 요일이고 어떤 운동 하는 날인지 알려줄꺼임. 
export default Header;