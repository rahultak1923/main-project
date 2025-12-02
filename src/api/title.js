// src/api/title.js

export const TitleData = async () => {
  const response = await fetch("http://localhost:8000/title/", {
    method: "GET",
  });
  return await response.json();
};

export const updateTitle = async (titleid, formData) => {
  const response = await fetch(`http://localhost:8000/title/update/${titleid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });
  return await response.json();
};
