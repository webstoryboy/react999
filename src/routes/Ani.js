import React from 'react';


//import { useTrail, animated } from 'react-spring'
// const fast = { tension: 1200, friction: 40 }
// const slow = { mass: 10, tension: 200, friction: 50 }
// const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

// function Ani() {
//   const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
//   return (
//     <>
//       <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//         <filter id="goo">
//           <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
//           <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
//         </filter>
//       </svg>
//       <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
//         {trail.map((props, index) => (
//           <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
//         ))}
//       </div>
//     </>
//   )
// }

import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Ani() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}









// import Header from '../components/Header';
// import Title from '../components/Title';
// import Footer from '../components/Footer';

// function AniInfo({title, source}){
//     return (
//         <div className="script">
//             <div className="script-left">
//                 <h3>{title}</h3>
//             </div>
//             <div className="script-right">
//                 <div className="view">
//                     <iframe title={title} src={source}></iframe>
//                 </div>
//                 <div className="num">
//                     <ul>
//                         <li className="active"><span>1</span></li>
//                         <li><span>2</span></li>
//                         <li><span>3</span></li>
//                         <li><span>4</span></li>
//                         <li><span>5</span></li>
//                         <li><span>6</span></li>
//                         <li><span>7</span></li>
//                         <li><span>8</span></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const aniData = [
//     {
//         id: '1',
//         title: '마우스 이펙트 스크립트',
//         source: [
//             "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect01-jquery.html"
//         ]
//     },{
//         id: '2',
//         title: '패랠랙스 이펙트 스크립트',
//         source: [
//             "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect02-jquery.html"
//         ]
//     },{
//         id: '3',
//         title: '메뉴 이펙트 스크립트',
//         source: [
//             "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect03-jquery.html"
//         ]
//     },{
//         id: '4',
//         title: '슬라이드 이펙트 스크립트',
//         source: [
//             "https://webstoryboy.github.io/dothome1/effect/port/mouseEffect04-jquery.html"
//         ]
//     }
// ]


// function Ani(){
//     return (
//         <div id="wrap">
//             <Header color="white" />
//             <main id="main">
//                 <section id="scriptCont">
//                     <div className="container">
//                         <div className="titleWrap">
//                             <Title text={['animation','Reference','animation Reference Book']} />
//                         </div>
//                         <div className="scriptCont">
//                             {aniData.map((site) => {
//                                 console.log(site.source[0])
//                                 return <AniInfo 
//                                     key={site.id}
//                                     title={site.title}
//                                     source={site.source[0]}
//                                 />
//                             })}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     )
// }

export default Ani;