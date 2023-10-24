import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Shopping Cart</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Shopping Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='vs-cart-wrapper space-top space-extra-bottom'>
          <div className='container'>
            <div className='woocommerce-notices-wrapper'>
              <div className='woocommerce-message'>Shipping costs updated.</div>
            </div>
            <form action='#' className='woocommerce-cart-form'>
              <table className='cart_table'>
                <thead>
                  <tr>
                    <th className='cart-col-image'>Image</th>
                    <th className='cart-col-productname'>Product Name</th>
                    <th className='cart-col-price'>Price</th>
                    <th className='cart-col-quantity'>Quantity</th>
                    <th className='cart-col-total'>Total</th>
                    <th className='cart-col-remove'>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='cart_item'>
                    <td data-title='Product'>
                      <a
                        className='cart-productimage'
                        href='https://html.vecurosoft.com/kiddino/demo/shop-detailis.html'
                      >
                        <img
                          width={91}
                          height={91}
                          src='assets/img/product/product1-1.png'
                          alt='product'
                        />
                      </a>
                    </td>
                    <td data-title='Name'>
                      <a
                        className='cart-productname'
                        href='https://html.vecurosoft.com/kiddino/demo/shop-detailis.html'
                      >
                        The Bubblegum Toy
                      </a>
                    </td>
                    <td data-title='Price'>
                      <span className='amount'>
                        <bdi>
                          <span>$</span>27.00
                        </bdi>
                      </span>
                    </td>
                    <td data-title='Quantity'>
                      <div className='quantity'>
                        <button className='quantity-minus qty-btn'>
                          <i className='far fa-chevron-down' />
                        </button>
                        <input
                          type='number'
                          className='qty-input'
                          step={1}
                          min={1}
                          max={100}
                          name='quantity'
                          defaultValue={11}
                          title='Qty'
                        />
                        <button className='quantity-plus qty-btn'>
                          <i className='far fa-chevron-up' />
                        </button>
                      </div>
                    </td>
                    <td data-title='Total'>
                      <span className='amount'>
                        <bdi>
                          <span>$</span>27.00
                        </bdi>
                      </span>
                    </td>
                    <td data-title='Remove'>
                      <a href='#' className='remove'>
                        <i className='fal fa-trash-alt' />
                      </a>
                    </td>
                  </tr>
                  <tr className='cart_item'>
                    <td data-title='Product'>
                      <a
                        className='cart-productimage'
                        href='https://html.vecurosoft.com/kiddino/demo/shop-detailis.html'
                      >
                        <img
                          width={91}
                          height={91}
                          src='assets/img/product/product1-2.png'
                          alt='Image'
                        />
                      </a>
                    </td>
                    <td data-title='Name'>
                      <a
                        className='cart-productname'
                        href='https://html.vecurosoft.com/kiddino/demo/shop-detailis.html'
                      >
                        Table harmoni play
                      </a>
                    </td>
                    <td data-title='Price'>
                      <span className='amount'>
                        <bdi>
                          <span>$</span>24.00
                        </bdi>
                      </span>
                    </td>
                    <td data-title='Quantity'>
                      <div className='quantity'>
                        <button className='quantity-minus qty-btn'>
                          <i className='far fa-chevron-down' />
                        </button>
                        <input
                          type='number'
                          className='qty-input'
                          step={1}
                          min={1}
                          max={100}
                          name='quantity'
                          defaultValue={13}
                          title='Qty'
                        />
                        <button className='quantity-plus qty-btn'>
                          <i className='far fa-chevron-up' />
                        </button>
                      </div>
                    </td>
                    <td data-title='Total'>
                      <span className='amount'>
                        <bdi>
                          <span>$</span>24.00
                        </bdi>
                      </span>
                    </td>
                    <td data-title='Remove'>
                      <a href='#' className='remove'>
                        <i className='fal fa-trash-alt' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6} className='actions'>
                      <div className='vs-cart-coupon'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Coupon Code...'
                        />
                        <button type='submit' className='vs-btn'>
                          Apply Coupon
                        </button>
                      </div>
                      <button type='submit' className='vs-btn'>
                        Update cart
                      </button>
                      <a href='shop.html' className='vs-btn'>
                        Continue Shopping
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div className='row justify-content-end'>
              <div className='col-md-8 col-lg-7 col-xl-6'>
                <h2 className='h4 summary-title'>Cart Totals</h2>
                <table className='cart_totals'>
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td data-title='Cart Subtotal'>
                        <span className='amount'>
                          <bdi>
                            <span>$</span>52.00
                          </bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className='shipping'>
                      <th>Shipping and Handling</th>
                      <td data-title='Shipping and Handling'>
                        <ul className='woocommerce-shipping-methods list-unstyled'>
                          <li>
                            <input
                              type='radio'
                              id='free_shipping'
                              name='shipping_method'
                              className='shipping_method'
                            />
                            <label htmlFor='free_shipping'>Free shipping</label>
                          </li>
                          <li>
                            <input
                              type='radio'
                              id='flat_rate'
                              name='shipping_method'
                              className='shipping_method'
                              defaultChecked='checked'
                            />
                            <label htmlFor='flat_rate'>Flat rate</label>
                          </li>
                        </ul>
                        <p className='woocommerce-shipping-destination'>
                          Shipping options will be updated during checkout.
                        </p>
                        <form action='#' method='post'>
                          <a href='#' className='shipping-calculator-button'>
                            Change address
                          </a>
                          <div className='shipping-calculator-form'>
                            <p className='form-row'>
                              <select className='form-select'>
                                <option value='AR'>Argentina</option>
                                <option value='AM'>Armenia</option>
                                <option value='BD' selected='selected'>
                                  Bangladesh
                                </option>
                              </select>
                            </p>
                            <p>
                              <select className='form-select'>
                                <option value>Select an option…</option>
                                <option value='BD-05'>Bagerhat</option>
                                <option value='BD-01'>Bandarban</option>
                                <option value='BD-02'>Barguna</option>
                                <option value='BD-06'>Barishal</option>
                              </select>
                            </p>
                            <p className='form-row'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Town / City'
                              />
                            </p>
                            <p className='form-row'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Postcode / ZIP'
                              />
                            </p>
                            <p>
                              <button className='vs-btn shadow-none'>
                                Update
                              </button>
                            </p>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className='order-total'>
                      <td>Order Total</td>
                      <td data-title='Total'>
                        <strong>
                          <span className='amount'>
                            <bdi>
                              <span>$</span>52.00
                            </bdi>
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className='wc-proceed-to-checkout mb-30'>
                  <a href='checkout.html' className='vs-btn'>
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
