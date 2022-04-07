import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card '+ props.className;
    return(
        <div className={classes}>{props.children}</div>
        // children : 지정된 속성, 오프닝 태그와 클로징 태그 사이의 콘텐츠
    );
}

export default Card;

















// 컴포지션 : 컴포넌트를 합치는 것
// wrapper 컴포넌트