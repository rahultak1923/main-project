import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetJewelleryById } from '../api/jewelleryapi';

const JewelleryDetail = () => {
  const { id } = useParams(); // Get the jewellery ID from the URL
  const [jewellery, setJewellery] = useState(null); // useState to store fetched jewellery

  useEffect(() => {
    const fetchJewellery = async () => {
      try {
        const result = await GetJewelleryById(id);
        console.log("Fetched Jewellery Detail:", result);

        // Use result directly or result.jewellery based on your API response
        if (result && result._id) {
          setJewellery(result); // If API returns jewellery object directly
        } else if (result.jewellery) {
          setJewellery(result.jewellery); // If API returns { jewellery: { ... } }
        } else {
          console.error("Unexpected response structure:", result);
        }
      } catch (error) {
        console.error("Failed to load jewellery:", error);
      }
    };

    fetchJewellery();
  }, [id]);

  if (!jewellery) return <div className="text-center mt-5">Loading...</div>;

  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          {/* Image */}
          <div className="col-md-6">
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
          </div>

          {/* Detail Info */}
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>{jewellery.jewelleryname}</h2>
              </div>
              <p>Id {jewellery._id || "No description available."}</p>
              <p>{jewellery.description || "No description available."}</p>
              <h5>Price: ₹{jewellery.price}</h5>
              <h6>Available: {jewellery.quantity || 1} pcs</h6>

              <a href="/allproduct" className="btn btn-primary mt-3">
                Back to Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryDetail;
