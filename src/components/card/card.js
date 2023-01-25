import React, { useState } from "react";
import './card.css'
import cat from './cat.png';


const Card = (props)=>{
    const [card, setCard] = useState(true);

    function onCard(){
        setCard((prevValue) => !prevValue);
    }
        return(
            <>
            <div className={`${props.disabled ? 'disabled' : null}`}>
                <div onClick={onCard} className={props.disabled ? 'disabled' : `${card ? 'card' : 'active'}`}>
                    <header>
                        <div className="triangle"></div>
                        <div className="header_content">
                        <p>Сказочное заморское яство</p>
                        </div>
                    </header>
                    <div className="content">
                        <div className="content_text">
                            <h2>Нямушка</h2>
                            <h3>с {props.after_h2}</h3>
                            <p>{props.number} проций</p>
                            <p>{props.before_img} в подарок</p>
                            {props.disabled ? <p>заказчик доволен</p> : null}
                        </div>
                        <img src={cat} alt="cat"/>
                        <div className="circle">
                            <h4>{props.num_in_circle}</h4>
                            <h5>кг</h5>
                        </div>
                    </div>
                </div>
                <footer>
                    {props.disabled ? <p className="yellow_words">Печалька, с курой закончился</p> : (card ? <p>Чего сидишь? Порадуй котэ, <a href="#a" onClick={onCard}>купи.</a></p> : <p onClick={onCard}>{props.in_footer}</p>)}
                </footer>
            </div>
            </>
        )
    } 

export default Card;
