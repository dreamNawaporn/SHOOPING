import React from "react";
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        dispatch(AddProduct(data));
        reset();
    }
    return (
        <div className="formCointainer">
            <h4 className="formTitle"> add new product</h4>
            <form className="space-y-4 text-[#534faf]"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="spacce-y-2">
                    <label>Product Name</label>
                    <input type="text" className="addProductInput" 
                     {...register( "Name",{required: true})}
                    />
                    { errors.quantity && <span>Please enter a valid quantity</span>}
                </div>
                <div className="space-y-2">
                    <label >Category</label>
                    <select className="addProductInput">
                        <option value="">Select a category</option>
                        <option value="clothing">Clothiog</option>
                        <option value="bags">Bags</option>
                    </select>
                    <div className="space-y-2">
                        <label >Image URL</label>
                        <input type="text" className="addProductInput" 
                        {...register( "Image URL",{required: true})}
                        />
                         { errors.quantity && <span>Please enter a valid quantity</span>}
                    </div>
                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label>Price</label>
                            <input type="number"
                                className="addProductInput"
                                {...register("Price",{required: true})}
                                 />
                                  {errors.quantity && <span>Please enter a valid quantity</span>}
                        </div>
                        <div className="space-y-2">
                            <label>Quantity</label>
                            <input type="number"
                                className="addProductInput"
                               {...register("Quantity",{required: true})}
                            />
                             { errors.quantity && <span>Please enter a valid quantity</span>}
                        </div>
                    </div>
                    <button type="submit"
                        className="submit bg-indigo-600 text-white">
                        Create Now!
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AddProduct