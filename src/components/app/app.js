import React from 'react';
import './reset.css';
import './app.css';
import Card from '../card';

const App = ()=>{
    
    return (
        <>
            <div className='app'>
                <div className='gradient'>
                    <div className='container'>
                        <h1>Ты сегодня покормил кота?</h1>
                        <div className='cards'>
                            <Card after_h2="фуагра" number="10" before_img="мышь" num_in_circle="0,5" in_footer="Вкусная жирная печёночка."/>
                            <Card after_h2="рыбой" number="40" before_img="2 мыши" num_in_circle="2" in_footer="Головы щучьи с чесноком да свежайшая сёмгушка."/>
                            <Card after_h2="курой" number="100" before_img="5 мышей" num_in_circle="5" disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default App;