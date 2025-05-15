import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";

const ManCategories = () => {
  const [myData, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch=useDispatch();

  const myProducts = () => {
    const url = "http://127.0.0.1:8000/manCategories/";
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setMydata(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load products");
        setLoading(false);
      });
  };

  useEffect(() => {
    myProducts();
  }, []);

  const DataCart=(pid, title, img, categorie, price)=>{
    dispatch(addtoCart({id: pid, title:title, image:img, categorie:categorie,qnty:1,price:price}))
}

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-5 text-danger">{error}</div>;
  }

  return (
    <>
      <div style={{overflowX:"hidden"}}>
        <h1 className="text-center my-4">Man Wear's</h1>
        <div className="row row-cols-1 row-cols-md-6 g-4 p-2">
            {myData.map((item) => (
            <div className="col" key={item.id}>
                <div className="card h-100">
                <img
                    src={`http://127.0.0.1:8000${item.image}`}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Category: {item.categorie}</p>
                    <h6 className="text-success fw-bold">Price: ₹{item.price}</h6>
                </div>
                <div className="card-footer bg-white border-top-0">
                    <a href="#">
                        <button type="button" className="btn btn-outline-success w-100" onClick={()=>{DataCart(item.id, item.title, item.image, item.categorie, item.price)}}>
                            Add To Cart
                        </button>
                    </a>
                </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManCategories