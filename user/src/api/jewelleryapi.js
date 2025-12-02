export const JewelleryData = async()=>{
    const response = await fetch("http://localhost:8000/jewellery/",{method:"GET",

    });
    return await response.json();
}


export const CreateJewellery = async(formData)=>
{
    console.log(formData)
    const response = await fetch("http://localhost:8000/jewellery/addjewellery",{method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
    })
    return await response.json()
}

export const DeleteJewellery = async(jewelleryId)=>{
    const response = await fetch(`http://localhost:8000/jewellery/delete/${jewelleryId}`,{
        method:"DELETE",
    });
    return await response.json()
}

export const updateJewellery = async(jewelleryId, formData)=>{
    const response = await fetch(`http://localhost:8000/jewellery/update/${jewelleryId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
    });
    return await response.json();
}


export const GetJewelleryById = async (id) => {
  const response = await fetch(`http://localhost:8000/jewellery/${id}`, {
    method: "GET",
  });

  return await response.json(); // Should return a jewellery object
};