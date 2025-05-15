import { useDispatch, useSelector } from "react-redux";
import { cartrecDel, addQnty, DelQnty } from "../cartSlice";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { X } from "lucide-react";

const CartProduct = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    city: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);

  const handleShow2 = () => {
    if (validateForm()) {
      setShow(false);
      setShow2(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const mycart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartRecDel = (id) => dispatch(cartrecDel(id));
  const qtyInc = (id) => dispatch(addQnty(id));
  const qtyDec = (id) => dispatch(DelQnty(id));

  let totalAmount = 0;

  return (
    <div className="px-2 md:px-4 py-4 md:py-6">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">Cart Product</h1>
      
      {/* Mobile View Cart Items */}
      <div className="block md:hidden">
        {mycart.map((item) => {
          totalAmount += item.price * item.qnty;
          return (
            <div key={item.id} className="mb-4 border rounded-lg p-3 relative">
              <div 
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors duration-200"
                onClick={() => cartRecDel(item.id)}
              >
                <X size={16} strokeWidth={2.5} />
              </div>
              
              <div className="flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="ml-3 flex-grow">
                  <p className="font-semibold truncate">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.categorie}</p>
                  <p className="font-bold mt-1">₹{item.price}</p>
                  
                  <div className="flex items-center mt-2 justify-between">
                    <div className="flex items-center border rounded-md px-1">
                      <button 
                        onClick={() => qtyDec(item.id)}
                        className="text-blue-600 p-1"
                      >
                        <FaMinusCircle />
                      </button>
                      <span className="mx-2 font-semibold text-sm">{item.qnty}</span>
                      <button 
                        onClick={() => qtyInc(item.id)}
                        className="text-blue-600 p-1"
                      >
                        <FaPlusCircle />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Total:</p>
                      <p className="font-bold">₹{item.price * item.qnty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Desktop/Tablet View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 hidden md:block overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Product Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Total Price</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {mycart.map((item) => {
                totalAmount += item.price * item.qnty;
                return (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">
                      <img
                        src={item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`}
                        alt={item.title}
                        className="w-24 h-20 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">{item.categorie}</td>
                    <td className="p-2">₹{item.price}</td>
                    <td className="p-2">
                      <div className="flex items-center border rounded-md px-1">
                        <button 
                          onClick={() => qtyDec(item.id)}
                          className="text-blue-600 p-1"
                        >
                          <FaMinusCircle />
                        </button>
                        <span className="mx-2 font-semibold">{item.qnty}</span>
                        <button 
                          onClick={() => qtyInc(item.id)}
                          className="text-blue-600 p-1"
                        >
                          <FaPlusCircle />
                        </button>
                      </div>
                    </td>
                    <td className="p-2 font-semibold">₹{item.price * item.qnty}</td>
                    <td className="p-2">
                      <button 
                        className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full transition-colors duration-200 flex items-center justify-center"
                        onClick={() => cartRecDel(item.id)}
                      >
                        <X size={16} strokeWidth={2.5} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4"></td>
                <td className="p-2 font-semibold">Total Amount</td>
                <td className="p-2 font-bold">₹{totalAmount}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Cart Summary - Same for all views */}
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-3 border-b pb-2">CART TOTALS</h2>
          <p className="mb-2 flex justify-between">
            <span>Subtotal:</span> 
            <span className="font-bold">₹{totalAmount}</span>
          </p>
          <p className="mb-2 text-sm flex justify-between">
            <span>Shipping:</span>
            <span className="font-semibold">Free Shipping</span>
          </p>
          <div className="mb-2 text-sm">
            <p className="font-medium mb-1">Shipping to:</p>
            <p className="text-gray-700">Dashhera Medan, Ashoka Garden, Bhopal</p>
            <p className="text-blue-600 cursor-pointer text-xs mt-1">Change address</p>
          </div>
          <div className="mt-4 border-t pt-3">
            <p className="text-xl font-bold">₹{totalAmount}</p>
            <p className="text-sm text-gray-600">(includes ₹16.66 Tax)</p>
          </div>
          <button
            className="mt-4 w-full bg-black text-white py-2.5 rounded hover:bg-gray-800 transition-colors duration-200"
            onClick={handleShow}
          >PROCEED TO CHECKOUT</button>
        </div>
      </div>

      {/* Mobile Total Amount Display */}
      {/* <div className="block md:hidden mt-4 bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span className="font-bold">₹{totalAmount}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="border-t mt-2 pt-2">
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="text-lg font-bold">₹{totalAmount}</span>
          </div>
          <p className="text-right text-xs text-gray-600">(includes ₹16.66 Tax)</p>
        </div>
        <button
          className="mt-3 w-full bg-black text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors duration-200"
          onClick={handleShow}
        >PROCEED TO CHECKOUT</button>
      </div> */}

      {/* Modal 1 */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {["name", "address", "mobile", "city", "email"].map((field) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label className="capitalize">{field}</Form.Label>
                <Form.Control
                  type={field === "email" ? "email" : field === "mobile" ? "number" : "text"}
                  placeholder={`Enter ${field}`}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  isInvalid={!!errors[field]}
                />
                <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
              </Form.Group>
            ))}

            <div className="text-sm mt-3 bg-gray-50 p-3 rounded">
              <p><b>Total Amount:</b> ₹{totalAmount}</p>
              <p><b>Shipping Charges:</b> ₹100</p>
              <p><b>Total Payable Amount:</b> ₹{totalAmount + 100}</p>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleShow2}>Next</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 */}
      <Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check type="radio" name="paymentMethod" id="cod" label="Cash On Delivery" />
            <Form.Check type="radio" name="paymentMethod" id="upi" label="UPI" className="mt-2" />
            <Form.Check type="radio" name="paymentMethod" id="card" label="Credit/Debit Card" className="mt-2" />
            <Form.Check type="radio" name="paymentMethod" id="netBanking" label="Internet Banking" className="mt-2" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>Close</Button>
          <Button variant="success" onClick={() => navigate("/paycomp")}>Proceed To Payment</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartProduct;