export const HeroData  = async()=>{
    const response = await fetch("http://localhost:8000/hero/",{
        method:"GET"
    });
    return await response.json();
}

export const updateJewellery = async(heroid, formData)=>{
    const response = await fetch(`http://localhost:8000/hero/update/${heroid}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
    });
    return await response.json();
}