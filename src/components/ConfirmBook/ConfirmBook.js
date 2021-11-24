import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './ConfirmBook.css';

const ConfirmBook = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const onSubmit = information => {
        alert('Your Booking Successfull');
        console.log(information)
    };
    return (
        <div className="confirmBook-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input className="bg-info" type="submit" />
            </form>
        </div>
    );
};

export default ConfirmBook;