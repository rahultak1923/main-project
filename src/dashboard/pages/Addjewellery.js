import React, { useState } from 'react'
import { CreateJewellery } from '../../api/jewelleryapi';

const Addjewellery = () => {
  const [jewelleryname, setJewelleryname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { jewelleryname: jewelleryname, description: description, price: price, quantity: quantity };
    await CreateJewellery(formData);


    setJewelleryname("");
    setDescription("");
    setPrice("");
    setQuantity("");
  }
  return (
    <div>
      <div className='container layout_padding-120 '>
        <h1 className='mb-3'>Add Jewellery's</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Jewelleryname</label>
            <input type="text" class="form-control" id="jewelleryname" name='jewellername' aria-describedby="emailHelp" value={jewelleryname} onChange={(event) => setJewelleryname(event.target.value)} />
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" name='description'  value={description}  onChange={(event) => setDescription(event.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" name='price' value={price} onChange={(event)=> setPrice(event.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="text" class="form-control" id="quantity" name='quantity' value={quantity} onChange={(event)=> setQuantity(event.target.value)}/>
          </div>
          {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button type="submit" class="btn btn-primary">Create Jewellery</button>
        </form>
      </div>
    </div>
  )
}

export default Addjewellery
