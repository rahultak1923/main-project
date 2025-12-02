// src/api/about.js

export const AboutData = async () => {
  const response = await fetch("http://localhost:8000/about/", {
    method: "GET",
  });
  return await response.json();
};

export const updateAbout = async (aboutid, formData) => {
  const response = await fetch(`http://localhost:8000/about/update/${aboutid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });
  return await response.json();
};
