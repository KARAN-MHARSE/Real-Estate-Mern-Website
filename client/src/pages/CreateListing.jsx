import React, { useState ,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector } from 'react-redux';

function CreateListing() {
    const {currentUser} = useSelector((state)=>state.user)
    const currentUserId=currentUser.user._id

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        address: "",
        type: "rent",
        parking: false,
        furnished: false,
        offer: false,
        bedRoom: 1,
        bathRoom: 1,
        regularPrice: 50,
        discountPrice: 50,
    });
    // console.log(formData)
    const formDataObj = new FormData()

    const handleChange = (e) => {
        // e.preventDefault();

        if (e.target.id === 'sell' || e.target.id === 'rent') {
            setFormData({
                ...formData,
                type: e.target.id,
            });
        } else if (e.target.id === 'parking' ||
            e.target.id === 'furnished' ||
            e.target.id === 'offer'
        ) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.checked,
            });
        } else if (e.target.type === 'text' || e.target.type === 'number') {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
            });
        }
        else if(e.target.type==='file' && e.target.files){
            console.log(e.target.id)
            console.log(e.target.files[0])
            formDataObj.append(e.target.id,e.target.files[0])
        }
    };  


    const handleSubmit = async(e)=>{
        e.preventDefault();

        setLoading(true)
        for(const key in formData){
            formDataObj.append(key,formData[key])
        }
        formDataObj.append('userRef',currentUser.user._id)
        const res = await fetch('https://real-estate-mern-website-u3yx.onrender.com/api/v2/listing/create',{
            method:'POST',
            body:formDataObj
        })

        const data = await res.json()
        if(data.success == true){
            setLoading(false)
            navigate('/profile')
        }else{
            setLoading(false)
            alert(data.message)
        }


    }

 

    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Create a Listing</h1>
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input
                        type="text"
                        placeholder='Name'
                        id='name'
                        className='border p-3 rounded-lg'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Description'
                        id='description'
                        className='border p-3 rounded-lg'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Address'
                        id='address'
                        className='border p-3 rounded-lg'
                        onChange={handleChange}
                    />
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                className='w-5'
                                id="sell"
                                onChange={handleChange}
                                checked={formData.type === "sell"}
                            />
                            <span>Sell</span>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                className='w-5'
                                id="rent"
                                onChange={handleChange}
                                checked={formData.type === "rent"}
                            />
                            <span>Rent</span>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                className='w-5'
                                id="parking"
                                onChange={handleChange}
                                checked={formData.parking}
                            />
                            <span>Parking spot</span>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                className='w-5'
                                id="furnished"
                                onChange={handleChange}
                                checked={formData.furnished}
                            />
                            <span>Furnished</span>
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type="checkbox"
                                className='w-5'
                                id="offer"
                                onChange={handleChange}
                                checked={formData.offer}
                            />
                            <span>Offer</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        <div className='flex items-center  gap-2'>
                            <input type="number" defaultValue='1' min='1'  required id="bedRoom" onChange={handleChange} className='p-3 max-w-20 rounded-lg  border-gray-700' />
                            <span>Beds</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="number" defaultValue='1' min='1'  required id="bathRoom" onChange={handleChange} className='p-3  max-w-20 rounded-lg border-gray-700' />
                            <span>Baths</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="number" defaultValue='500' min='1'  required id="regularPrice" onChange={handleChange} className='p-3 max-w-20 rounded-lg border-gray-700' />
                            <span>Regular price</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="number" defaultValue='400' min='1'  onChange={handleChange} required id="discountPrice" className='p-3 max-w-20 rounded-lg border-gray-700' />
                            <span>Discounted price</span>
                        </div>

                    </div>
                </div>
                {/* End of left form */}
                <div className='flex flex-col flex-1'>
                    <p className='font-semibold'>Images:
                        <span className='font-normal text-gray-600 ml-1'> The First image will be cover (max 6)</span>
                    </p>
                    <div className='flex my-5 gap-3'>
                        <input 
                        onChange={handleChange} 
                        type="file" 
                        id="imageUrl"
                        accept='images/*' 
                        multiple 
                        className='bg-white p-2 rounded-lg' />
                        <button className='p-3 bg-white-500 border border-green-700 text-green-700 font-semibold hover:shadow-lg rounded-lg'>UPLOAD</button>
                    </div>
                    <button className='p-3 bg-slate-700 text-white font-bold rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading?"Loading":"create listing"}</button>
                </div>

            </form>
        </main>
    );
}

export default CreateListing;
