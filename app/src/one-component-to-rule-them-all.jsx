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