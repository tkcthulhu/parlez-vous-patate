import React from "react"

export function HomeButton(props) {

    let mult = props.menu.length

    let num = Math.round(Math.random() * mult)

    let special = props.menu[num]

    let nowSpecial = []

    nowSpecial.push(<div key={num} className="col-8" id={"accordion" + num}>
                        <h1>Special of the Render</h1>
                        <div className="card">
                            <div className="card-header" id={"heading" + num}>
                                <h4>{special.title}</h4>
                                <h6>${special.price}</h6>
                                <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#specialDesc" + num} role="button" aria-expanded="false" aria-controls={"specialDesc" + num}>
                                DESCRIPTION
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
                            </div>
                        </div>
                    </div>)

    console.log(num)

    return (
    <div className="container-fluid">
        <div className="row justify-content-center">  
            {nowSpecial}
        </div>
    </div>
    )
    
}

export function AppetizerButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Appetizer')))
    
    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push( <>
                        <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                            <div className="card">
                              <div className="card-header" id={"heading" + i}>
                                <h4>Le {selections[i].title}</h4>
                                <h6>${selections[i].price}</h6>
                                <p>
                                    <a className="btn btn-light" data-bs-toggle="collapse" href={"#appDesc" + i} role="button" aria-expanded="false" aria-controls={"appDesc" + i}>
                                DESCRIPTION
                                </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                      <div className="collapse multi-collapse" id={"appDesc" + i}>
                                        <div className="card card-body">
                                          {selections[i].description}
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </>)
    } return(<div className="container-fluid"><div className="container-fluid"><div className="row">{items}</div></div></div>)
}

export function BreakfastButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Breakfast')))

    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>Le {selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#breakfastDesc" + i} role="button" aria-expanded="false" aria-controls={"breakfastDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"breakfastDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row">{items}</div></div>)
}

export function BrunchButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Brunch')))

    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>Le {selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#brunchDesc" + i} role="button" aria-expanded="false" aria-controls={"brunchDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"brunchDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row">{items}</div></div>)
}

export function LunchButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Lunch')))
    
    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>Le {selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#lunchDesc" + i} role="button" aria-expanded="false" aria-controls={"lunchDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"lunchDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row">{items}</div></div>)
}

export function DinnerButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Dinner')))

    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>{selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#dinnerDesc" + i} role="button" aria-expanded="false" aria-controls={"dinnerDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"dinnerDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row">{items}</div></div>)
}

export function SidesButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Side')))

    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>{selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#sideDesc" + i} role="button" aria-expanded="false" aria-controls={"sideDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"sideDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row">{items}</div></div>)
}

export function DessertButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Dessert')))

    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push(<>    
                    <div key={i} className="col-lg-3 col-sm-6" id={"accordion" + i}>
                        <div className="card">
                          <div className="card-header" id={"heading" + i}>
                            <h4>Le {selections[i].title}</h4>
                            <h6>${selections[i].price}</h6>
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href={"#dessertDesc" + i} role="button" aria-expanded="false" aria-controls={"dessertDesc" + i}>
                            DESCRIPTION
                            </a>
                            </p>
                            <div className="row">
                                <div className="col">
                                  <div className="collapse multi-collapse" id={"dessertDesc" + i}>
                                    <div className="card card-body">
                                      {selections[i].description}
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </>)
    } return(<div className="container-fluid"><div className="row"><h1>Le Desserts</h1>{items}</div></div>)
}

export function ContactUsButton() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-4">
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
                <div className="col-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}