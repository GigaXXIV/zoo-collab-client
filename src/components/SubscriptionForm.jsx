import React from 'react';
import { useForm } from 'react-hook-form';

export default function SubscriptionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log({ ...register("firstName") }, { ...register("lastName") }, { ...register("email") })

    const onSubmit = (data) => {
        console.log(data);
    };

    const { reset } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label>First Name</label>
                <input
                    type="text"
                    name="first-name"
                    placeholder='First name'
                    {...register("firstName", {
                        required: "First name is required.",
                        pattern: {
                            value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
                            message: "Must contain only letters."
                        }
                    })}
                />
                { errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
            </div>
            <div className="form-control">
                <label>Last Name</label>
                <input
                    type="text"
                    name="last-name"
                    placeholder='Last name'
                    {...register("lastName", {
                        required: "Last name is required.",
                        pattern: {
                            value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
                            message: "Must contain only letters."
                        }
                    })}
                />
                { errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}

            </div>
            <div className="form-control">
                <label>Email Address</label>
                <input
                    type="text"
                    name="email"
                    placeholder='Email address'
                    {...register("email", {
                        required: "Email is required.",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid."
                        },
                    })}
                />
                { errors.email && <p className='error-msg'>{errors.email.message}</p>}

            </div>
            <div className="form-control">
                <button type="submit">Subscribe</button>
            </div>

        </form>
    )
}
