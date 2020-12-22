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
                                    <div>
                                        <div>{location.state.title}</div>
                                        <div>{location.state.desc}</div>
                                        <div>{location.state.image}</div>
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