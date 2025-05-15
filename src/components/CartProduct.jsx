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
    <div className="px-4 py-6">
      <h1 style={{marginBottom:"50px"}} className="text-2xl font-bold text-center mb-6">Cart Product</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
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
                        className="w-24 h-20 object-cover"
                      />
                    </td>
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">{item.categorie}</td>
                    <td className="p-2">₹{item.price}</td>
                    <td className="p-2 flex items-center">
                      <button onClick={() => qtyDec(item.id)}><FaMinusCircle /></button>
                      <span className="mx-2 font-semibold">{item.qnty}</span>
                      <button onClick={() => qtyInc(item.id)}><FaPlusCircle /></button>
                    </td>
                    <td className="p-2">₹{item.price * item.qnty}</td>
                    <td className="p-2">
                      

                      <X className="bg-gray-600 text-white text-xs  py-1 rounded"
                        onClick={() => cartRecDel(item.id)}></X>
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

        <div className="border p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">CART TOTALS</h2>
          <p className="mb-1">Subtotal: <span className="font-bold">₹{totalAmount}</span></p>
          <p className="mb-1 text-sm">Shipping: <span className="font-semibold">Free Shipping</span></p>
          <p className="mb-1 text-sm">Shipping to: <span className="font-medium">Dashhera Medan, Ashoka Garden, Bhopal</span></p>
          <p className="text-xs text-blue-600 cursor-pointer">Change address</p>
          <p className="mt-4 text-xl font-bold">₹{totalAmount} <span className="text-sm font-normal">(includes ₹16.66 Tax)</span></p>
          <button
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            onClick={handleShow}
          >PROCEED TO CHECKOUT</button>
        </div>
      </div>

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

            <div className="text-sm mt-3">
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
