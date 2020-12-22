import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'


function ReferInfo({id, title, desc, image}){
    return (
        <li>
            <Link to = {{ 
                pathname: 'reference-detail',
                state: {id, title, desc, image}
            }}>
                <span className="alpha">{id}</span>
                <span className="tag">{title}</span>
                <span className="desc">{desc}</span>
            </Link>
        </li>
    )
}


class Reference extends React.Component {
    state = {
        isLoading: true,
        refer: []
    };

    getRefer = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/reference.json")
        //console.log(refers)
        this.setState({ refer, isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 3000);
    }
    
    render () {
        const { isLoading, refer } = this.state;
        return (
            <div id="wrap">
                <Header color="white" />
                { isLoading ? (
                    <div className="loading">
                        <Loading />
                    </div>
                ) : (
                    <main id="main">
                        <section id="referCont">
                            <div className="container">
                                <div className="titleWrap">
                                    <Title text={['Reference','book','Reference book']} />
                                </div>
                                <div className="referCont">
                                    <h2>HTML</h2>
                                    <ul>
                                        {refer.map((info) => (
                                            <ReferInfo 
                                                key={info.id}
                                                id={info.id}
                                                title={info.title}
                                                desc={info.desc}
                                                image={info.image}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
                )}
                <Footer />
            </div>
        )
    }
}

export default Reference