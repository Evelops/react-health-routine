import React, { Component } from 'react';

class Days extends Component{
    state={
        date:new Date()
    }
    render(){
        const {date}=this.state;
        return(
            <h5> 오늘은 {date.getDay()===0
                ? "일요일, 휴식날 "
                :date.getDay()===1
                ? "월요일, 밀기운동 하는 날"
                :date.getDay()===2                    
                ? "화요일, 하체운동 하는 날"
                : date.getDay()===3
                ? "수요일, 휴식날"
                :date.getDay()===4
                ? "목요일, 당기는 운동 하는 날"
                :date.getDay()===5
                ? "금요일, 하체 운동 하는 날"
                :"토요일,  밀기 운동 하는 날"}
                입니다
                </h5>
        );
    }

}
export default Days;