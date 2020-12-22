import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function ScriptInfo({title, source}){
    return (
        <div className="script">
            <div className="script-left">
                <h3>{title}</h3>
            </div>
            <div className="script-right">
                <div className="view">
                    <iframe title={title} src={source}></iframe>
                </div>
                <div className="num">
                    <ul>
                        <li className="active"><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const siteData = [
    {
        id: '1',
        title: '마우스 이펙트 스크립트',
        source: [
            "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect01-jquery.html"
        ]
    },{
        id: '2',
        title: '패랠랙스 이펙트 스크립트',
        source: [
            "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect02-jquery.html"
        ]
    },{
        id: '3',
        title: '메뉴 이펙트 스크립트',
        source: [
            "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect03-jquery.html"
        ]
    },{
        id: '4',
        title: '슬라이드 이펙트 스크립트',
        source: [
            "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect04-jquery.html"
        ]
    }
]


function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Script Reference','Book','Script Reference Book']} />
                        </div>
                        <div className="scriptCont">
                            {siteData.map((site) => {
                                console.log(site.source[0])
                                return <ScriptInfo 
                                    key={site.id}
                                    title={site.title}
                                    source={site.source[0]}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Script;