import React, { useEffect, useState } from 'react'
import { HeroData, updateHero } from '../../api/heroapi'

const Hero = () => {
  const [data, setData] = useState([]);
  const [heroid, setHeroId] = useState(null); // Add state for ID

  const [formData, setFormData] = useState({
    herotitle: "",
    herodescription: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await HeroData();
      console.log("your data is ", result);
      const heroInfo = result.hero && result.hero[0];
      setData(result.hero || []);
      if (heroInfo) {
        setFormData({
          herotitle: heroInfo.herotitle || "",
          herodescription: heroInfo.herodescription || "",
        });
        setHeroId(heroInfo._id); // store heroid
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateHero(heroid, formData);
      console.log("Update Success:", response);
      alert("Hero section updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating hero:", error);
      alert("Failed to update hero.");
    }
  };

  return (
    <div style={{ marginLeft: "17.125rem", paddingTop: "1.2%" }}>
      {/* Display section */}
      <div className="card shadow-lg mx-4 card-profile-bottom" style={{ marginTop: "0%" }}>
        <div className="card-body p-3">
          <div className="row gx-4">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((hero, id) => (
                <div className="col-auto my-auto" key={id}>
                  <div className="h-100">
                    <h5 className="mb-1">{hero.herotitle}</h5>
                    <p className="mb-0 font-weight-bold text-sm">{hero.herodescription}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No hero data</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit form */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header pb-0 d-flex align-items-center">
                <p className="mb-0">Edit Your Hero Section</p>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">Our Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">Hero Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="herotitle"
                        value={formData.herotitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">Hero Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="herodescription"
                        value={formData.herodescription}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <button className="btn btn-success" onClick={handleUpdate}>
                      Update Hero Section
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Hero;
