import React, { Component } from 'react';


class Wise_Says extends Component(){
    state={
        quotes:
        [
        {
            content:"Winning and losing isn't everything. Sometimes, the journey is just as important as the outcome.",
            name:"Alex Morgan"
        },
        {
            contnet:"The hard days are what make you stronger.",
            name:"Aly Raisman"
        },
        {
            contnet:"Start where you are. Use what you have. Do what you can.",
            name:"Arthur Ashe"
        },
        {
            contnet:"We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.",
            name:"Jesse Owens"
        },
        {
            contnet:"It's okay to STRUGGLE, but it's not okay to give up on yourself or your dreams.",
            name:"Gabe Grunewald"
        },
        {
            contnet:"It's not about perfect. It's about effort. And when you bring that effort every single day, that's where TRANSFORMATION happens.",
            name:"Jillian Michaels"
        },
        {
            contnet:"There may be tough times, but the difficulties which you face will make you more DETERMINED.",
            name:"Marta"
        },
        {
            content:"Just believe in yourself. Even if you don't. pretend that you do and , at some point,  you will.",
            name:"Venus Williams"
        },
        {
            content:"When you stay consistent with working out, you start to look good, which also leads to feeling good from the inside to the outside.",
            name:"Edmond Mbiaka"
        },
        {
            content:"Every time you work out you strengthen your body. Every time you don't you weaken it.",
            name:"Toni Sorenson"
        }
        ]
    }
    handleRandom = (data) => {
        const {quotes} = this.state;
        this.setState({
            quotes:quotes[Math.floor(Math.random()*quotes.length)]
        })
    }
    render()
    {   
        return(
            <div>{this.handleRandom}</div>
        );
    }
    
}
export default Wise_Says;

// 운동 자극을 위해 명언을 메인 header에 띄어주기 위한 component 
/*
function health_saying(){
const saying=[
    {
        content:"Winning and losing isn't everything. Sometimes, the journey is just as important as the outcome.",
        name:"Alex Morgan"
    },
    {
        contnet:"The hard days are what make you stronger.",
        name:"Aly Raisman"
    },
    {
        contnet:"Start where you are. Use what you have. Do what you can.",
        name:"Arthur Ashe"
    },
    {
        contnet:"We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.",
        name:"Jesse Owens"
    },
    {
        contnet:"It's okay to STRUGGLE, but it's not okay to give up on yourself or your dreams.",
        name:"Gabe Grunewald"
    },
    {
        contnet:"It's not about perfect. It's about effort. And when you bring that effort every single day, that's where TRANSFORMATION happens.",
        name:"Jillian Michaels"
    },
    {
        contnet:"There may be tough times, but the difficulties which you face will make you more DETERMINED.",
        name:"Marta"
    },
    {
        content:"Just believe in yourself. Even if you don't. pretend that you do and , at some point,  you will.",
        name:"Venus Williams"
    },
    {
        content:"When you stay consistent with working out, you start to look good, which also leads to feeling good from the inside to the outside.",
        name:"Edmond Mbiaka"
    },
    {
        content:"Every time you work out you strengthen your body. Every time you don't you weaken it.",
        name:"Toni Sorenson"
    },
]; // saying 이라는 명언에 드가는 content와 인물이름 name이 드가는 객체 배열.
const random_say=saying[Math.floor(Math.random()*saying.length)];

const a1 = random_say.content;
const a2 = random_say.name;

}

const random = () =>{
    return (
        
    );
    
}
*/

