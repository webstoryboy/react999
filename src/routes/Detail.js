import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'

// function Detail(props){
//     console.log(props)
//     return (
//         <div>
//             <Header />
//             <div>props</div>
//         </div>
//     )
// }

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if( location.state === undefined ){
            history.push('/reference');
        }
    }

    render() {
        const { location } = this.props;
        if( location.state ) {
            return (
                <div id="wrap">
                    <Header color="white" />
                    <main id="main">
                        <section id="referCont">
                            <div className="container">
                                <div className="titleWrap">
                                    <Title text={['Reference','book','Reference book']} />
                                </div>
                                <div className="referCont">
                                    <div className="referDetail">
                                        <h3>{location.state.title}</h3>
                                        <dl>
                                            <dt>설명</dt>
                                            <dd>{location.state.desc}</dd>
                                        </dl>
                                        <dl>
                                            <dt>카테고리</dt>
                                            <dd>{location.state.category}</dd>
                                        </dl>
                                        <dl>
                                            <dt>속성</dt>
                                            <dd>{location.state.property}</dd>
                                        </dl>
                                        <dl>
                                            <dt>구조</dt>
                                            <dd>{location.state.element}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            )
        } else {
            return null;
        }
        
    }
}


export default Detail