import React from 'react'

function OrderForm() {
    return (
        <div className='p-l-r-10 pd-t-5 '>
            <h1 className='text-center'>Book Your Table</h1>
            <form>
                <div className='d-flex justify-content-between'>
                    <input type='text' className='form-control' placeholder='Your Name' required />
                    <input type='text' className='form-control' placeholder='Your Email' required style={{ margin: '0 2rem 0 2rem' }} />
                    <select className='form-control' required>
                        <option value=''>Select</option>
                        <option value='Margherita'>Margherita</option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Hawaiian'>Hawaiian</option>
                    </select>
                </div>
                <textarea type="text" placeholder='Please write your order' className='form-control mt-5 mb-3' style={{ height: '200px' }} />
                <button className='btn btn-warning mb-3 py-2 fw-bold text-white '>Send Order</button>
            </form >
        </div >
    )
}

export default OrderForm