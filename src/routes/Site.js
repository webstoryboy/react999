import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import Title from '../components/Title'

function PortInfo({id, link, title, image, category}){
    return (
        <li>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="site">
                    <div className="siteImg">
                        <img src={image} alt={title} />
                    </div>
                    <div className="siteText">
                        <h2>{title}</h2>
                        <p>{category}</p>
                    </div>
                </div>
            </a>
        </li>
    )
}

class Site extends React.Component {
    state = {
        isLoading: true,
        ports: []
    };

    getSite = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json")
        //console.log(refers)
        this.setState({ ports, isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getSite();
        }, 1000);
    }

    render () {
        const { isLoading, ports } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ? (
                    <div className="loading">
                        <Loading />
                    </div>
                ) : (
                    <main id="main">
                        <section id="siteCont">
                            <div className="container">
                                <div className="titleWrap">
                                    <Title text={['Site','reference','Site reference']} />
                                </div>
                                <div className="siteCont">
                                    <ul>
                                        {ports.map((info) => (
                                            <PortInfo 
                                                key={info.id}
                                                id={info.id}
                                                title={info.title}
                                                link={info.link}
                                                image={info.image}
                                                category={info.category}
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

export default Site