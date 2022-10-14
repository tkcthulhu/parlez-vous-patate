export function CartButton(props) {
    
    let items = [];

    let total = [];

    let finalTotal = 0;

    let Cart = [...props.CART]

    function removeItem(cart, item) {
        cart.splice(item, 1)
        return cart;
    }
    
    for (let i = 0; i < props.CART.length; i++) {

        items.push(
            <>
                <div className="card">
                    <h3 className="card-header">
                        {props.CART[i].title}
                    </h3>                
                    <p className='card-body'>
                        ${props.CART[i].price}
                    </p>
                    <div className="row card-body justify-content-end">
                        <div className="col-3">  
                            <button className="btn btn-light" onClick={() => {props.setCART(removeItem(Cart, [i]))}}>
                                Remove
                            </button>
                        </div> 
                    </div>
                </div>
            </>
        )

        total.push(props.CART[i].price)
        console.log(total)
    }

    function addTotal(total) {
        
        for (let i = 0; i < total.length; i++) {
            let num = +total[i]
            finalTotal += num 
        }
        return (finalTotal).toFixed(2)
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">               
                <div className="col-8 menu-background">                
                    <h3>Your Basket</h3><br/>
                    {items}
                    <div className="card">
                        <h5 className="card-header">Total</h5>
                        <p className="card-body">${addTotal(total)}</p>
                        <h5 className="card-header">Tax</h5>
                        <p className="card-body">${(finalTotal * .06).toFixed(2)}</p>
                        <h5 className="card-header">Final Total</h5><br/>
                        <p className="card-body">${(finalTotal * 1.06).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}