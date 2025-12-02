export const JewelleryData = async()=>{
    const response = await fetch("http://localhost:8000/jewellery/",{
        method:"GET",
    });
    return await response.json();
}

export const CreateJewellery = async (formData) => {
    console.log("FormData in CreateJewellery:", formData); // Keep this log for debugging

    const response = await fetch("http://localhost:8000/jewellery/addjewellery", {
        method: "POST",
        body: formData, // Pass the FormData object directly as the body
        // Do NOT set the Content-Type header here; the browser will handle it
    });

    return await response.json();
};

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