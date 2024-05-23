import React from 'react'

function Cart({ status, oldPrice = 0, price, name, image }) {

    return (
        <div className="col-3 border mb-4 rounded position-relative" >
            <div>
                <img src={image} alt="img" width='100%' />
                {status && <span className='fs-5 fw-bold bg-warning px-4 text-uppercase position-absolute top-0 start-0'>{status}</span>}
            </div>
            <div className=''>
                <h3>{name}</h3>
                {status === 'sale' && <p><del>{`$${oldPrice}`}</del><span className='text-warning'>{` $${price}`}</span></p>}
                {status !== 'sale' && <p>{`$${price}`}</p>}
                <button className='btn btn-dark mb-3 py-2'
                    style={{ width: '100%' }}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Cart