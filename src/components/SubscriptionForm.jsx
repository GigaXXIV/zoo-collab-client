import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SubscriptionForm(props) {
  const SUBSCRIPTION_URL = `http://localhost:3000/subscriptions.json`;

  // useRef to control the display of the Modal "Subscription Form"
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      topics: '',
    }
  });

  console.log(
    { ...register("firstName") },
    { ...register("lastName") },
    { ...register("email") },
    { ...register("topics") }
  );

  const onSubmit = (data) => {
    console.log(data);
    axios.post(SUBSCRIPTION_URL, { first_name: data.firstName, last_name: data.lastName, email: data.email, topics: data.topics.join(', '), subscribed: true }).then((response) => {
      console.log(response.data,);
    })
  };

  const { reset } = useForm();

  const topics = ['Attractions', 'Promotions', 'Latest Events', 'Volunteer Opportunities', 'Sponsorship News', 'Marketing']

  return (
    <div className="modal__backdrop" style={{display: 'none'}} ref={formRef.current}>
      <div className="modal__container">
        <div class="form-container">
          <div>
            <h3>
              ZOO<span>Newsletter</span>
            </h3>
          </div>
          <div className="enterinfo">
            <p>Please enter your information and preferences below.</p>
          </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label>First Name</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required.",
                    pattern: {
                      value: /[A-ZÀ-ÿa-z]+[ ]/,
                      message: "Must contain only letters.",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="error-msg">{errors.firstName.message}</p>
                )}
              </div>
              <div className="form-control">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last name is required.",
                    pattern: {
                      value: /[A-ZÀ-ÿa-z]+[ ]/,
                      message: "Must contain only letters.",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="error-msg">{errors.lastName.message}</p>
                )}
              </div>
              <div className="form-control">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                />
                {errors.email && <p className="error-msg">{errors.email.message}</p>}
              </div>
              <div className="topics-container">
                <label>I would like to receive: </label>
                <div>
                  <ul className="topics" >
                    {topics.map((topic, index) => {
                      return (
                        <li key={index}>
                          <label htmlFor={`checkbox-${index}`} className="option">
                            {topic}
                            <input
                              type="checkbox"
                              id={`checkbox-${index}`}
                              name={topic}
                              value={topic}
                              {...register("topics")}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="form-control">
                <button type="submit">Subscribe</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
