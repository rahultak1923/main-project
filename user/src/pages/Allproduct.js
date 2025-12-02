import React, { useEffect, useState } from 'react';
import { JewelleryData } from '../api/jewelleryapi';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Allproduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await JewelleryData();
      console.log("fetch jewellery", result);
      setData(result.jewellery || []);
    };

    fetchData();
  }, []);

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="row">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((jewellery) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={jewellery._id}>
                <div className="box shadow">
                  <Link to={`/jewellery/${jewellery._id}`} className="text-decoration">
                    <div className="img-box">
                      <img
                        src={
                          jewellery.image
                            ? `/${jewellery.image}`
                            : "https://via.placeholder.com/300"
                        }
                        alt={jewellery.jewelleryname}
                      />
                    </div>
                    <div className="detail-box">
                      <h6>{jewellery.jewelleryname}</h6>
                      <h6>
                        Price <span>₹{jewellery.price}</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No jewellerys available</p>
          )}
        </div>
        <div className="btn-box">
          <a href="/allproduct" className="text-decoration">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default Allproduct;
