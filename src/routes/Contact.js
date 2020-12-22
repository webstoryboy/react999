import React from 'react'
import Header from '../components/Header'

function Contact(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="contactCont">
                        <div>You are</div>
                        <div>already</div>
                        <div>doing well.</div>
                    </div>
                </section>
            </main>
            <footer id="contactInfo" role="contentinfo">
                <address className="contactInfo">
                    <div>
                        <dl>
                            <dt>Email</dt>
                            <dd>webstoryboy@naver.com</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>kakao</dt>
                            <dd>webstupids</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>Social</dt>
                            <dd>Youtube</dd>
                            <dd>Instargram</dd>
                            <dd>Github</dd>
                            <dd>Cafe</dd>
                            <dd>CSS</dd>
                        </dl>
                    </div>
                </address>
            </footer>
        </div>
    )
}

export default Contact