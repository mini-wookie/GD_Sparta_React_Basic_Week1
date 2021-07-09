import React from 'react';

const NameCard = (props) => {
    const name = props.name;
    return(
        <div className="contents">
        <div className="intro">나는 <span className="my-name">{name}</span> 에 대해서 <br/> 얼마나 알고 있을까?
        </div>
        <input className="input" type="text" value="내 이름"></input><br/>
        <button className="start-button" type="submit" name="start" value="시작하기">시작하기</button>
        </div>
    );
}

export default NameCard;