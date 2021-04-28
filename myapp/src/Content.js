import React,{Component} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';

class Content extends Component{
    render() {
        return(
            <main>
                <div class="content">
                    <div class="content-left">
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/1.jpg" />
                            </div>
                            <div>
                                <h3>iPhone 11 Pro
                                Starting at $999
                                </h3>
                            </div>
                        </div>
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/2.jpg" />
                            </div>
                            <div>
                                <h3>
                                iPhone 11
                                Starting at $699
                                </h3>
                            </div>
                        </div>
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/3.jpg" />
                            </div>
                            <div>
                                <h3>iPhone 11
                                Starting at $700
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="content-left">
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/4.jpg" />
                            </div>
                             <div>
                                <h3>iPhone 11
                                Starting at $100
                                </h3>
                            </div>
                        </div>
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/5.jpg" />
                            </div>
                            <div>
                                <h3>iPhone 11
                                Starting at $999
                                </h3>
                            </div>
                        </div>
                        <div> 
                            <div  class="left-aside">
                                <img src="/img/6.png" />
                            </div>
                            <div>
                                <h3>iPhone 11
                                Starting at $300
                                </h3>
                            </div>
                        </div>
                    </div>   
                    <div class="content-right"> 
                            <div>
                                <img src="/img/5.jpg" />  
                                <h3>Popular Products: </h3>
                                <h3>iPhone 11
                                Starting at $999<br />
                                Dual-camera system (Ultra Wide, Wide)<br />
                                Up to 17 hours of video playback1<br />
                                Water resistant to a depth of 2 meters for up to 30 minutes2<br />
                                6.1” Liquid Retina HD display3<br />
                                </h3>
                                <Button variant="primary">Learn more</Button>
                            </div>                                                        
                    </div>
                </div>
            </main>
        );
    }
}
export default Content;