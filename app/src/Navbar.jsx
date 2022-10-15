import React from "react"
import appetizers from './img/appetizer.jpg'
import breakfast from './img/breakfast.jpg'
import brunch from './img/brunch.jpg'
import lunch from './img/lunch.jpg'
import dinner from './img/dinner.jpg'
import sides from './img/sides.jpg'
import dessert from './img/dessert.jpg'
import front from './img/restaurant-front.jpeg'

export function HomeButton(props) {

    let mult = props.menu.length;

    let num = Math.round(Math.random() * mult);

    let special = props.menu[num];

    let nowSpecial = [];

    nowSpecial.push(
      <div key={num} className="col-8 menu-background" id={"accordion" + num}>
        <h1>Le Special of the Render</h1>
        <div className="card  menu-display">
            <div className="card-header" id={"heading" + num}>
                <h4>Le {special.title}</h4>
                <h6>${special.price}</h6>
                <p>
                <a className="btn btn-light" data-bs-toggle="collapse" href={"#specialDesc" + num} role="button" aria-expanded="false" aria-controls={"specialDesc" + num}>
                Description
                </a>
                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id={"specialDesc" + num}>
                            <div className="card card-body">
                                {special.description}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-light" onClick={() => {props.setCART([special, ...props.CART]); console.log(props.CART)}}>Add to Basket</button>
            </div>
        </div>
    </div>)

    return (
    <div className="container-fluid">
        <div className="row justify-content-center">        
            {nowSpecial}
        </div>
    </div>
    )
    
}

export function ContactUsButton() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 contact-page menu-background">
                    <h1>Hours of Operation</h1>
                    <br/>
                    <h5>Mon-Thurs: 11:30 am - 9:30 pm</h5>
                    <br/>
                    <h5>Fri-Sat: 10:00 am - 10:30pm</h5>
                    <br/>
                    <h5>Sunday: Closed</h5>
                    <br/>
                    <h1>Call Us!</h1>
                    <br/>
                    <h5>1(859) 420-6969</h5>
                    <br/>
                    <h1>Please come and see us!</h1>
                    <br/>
                    <h5>Located at:</h5>
                    <br/>
                    <h5>348 East Main Street</h5>
                    <br/>
                    <h5>Lexington KY 40507</h5>
                    <br/>
                </div>
                <div className="col-md-4 col-sm-12 contact-page">
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}