export function Button(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === props.search)))
    
    let items = [];

    for(let i = 0; i < selections.length; i++) {
        items.push( <>
                        <div key={i} className="col-lg-3 col-sm-6 menu-display" id={"accordion" + i}>
                            <div className="card">
                              <div className="card-header" id={"heading" + i}>
                                <h4>Le {selections[i].title}</h4>
                                <h6>${selections[i].price}</h6>
                                <p>
                                  <a className="btn btn-light" data-bs-toggle="collapse" href={"#" + props.search + "Desc" + i} role="button" aria-expanded="false" aria-controls={props.search + "Desc" + i}>
                                    Description
                                  </a>                                 
                                </p>
                                <div className="row">
                                    <div className="col">
                                      <div className="collapse multi-collapse" id={props.search + "Desc" + i}>
                                        <div className="card card-body">
                                          {selections[i].description}
                                        </div>
                                      </div>
                                    </div>
                                </div>
                                <button className="btn btn-light" onClick={() => {props.CART.push(selections[i]); console.log(props.CART)}}>Add to Basket</button>
                              </div>
                            </div>
                        </div>
                    </>)
    } return(<div className="container-fluid menu-background"><div className="row"><h1>{props.search}</h1>{items}</div></div>)
}