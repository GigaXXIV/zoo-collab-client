import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { topics } from "../utils/topics";

export default function SubscriptionForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(
    { ...register("firstName") },
    { ...register("lastName") },
    { ...register("email") }
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  const { reset } = useForm();

  // subscription topics
  const [checkedState, setCheckedState] = useState(
    new Array(topics.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <div className="modal__backdrop">
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
                      value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
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
                      value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
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
                {errors.email && (
                  <p className="error-msg">{errors.email.message}</p>
                )}
              </div>
              <div className="topics-container">
                <label>I would like to receive: </label>
                <div>
                  <ul className="topics">
                    {topics.map((topic, index) => {
                      return (
                        <li key={index}>
                          <label
                            htmlFor={`checkbox-${index}`}
                            className="option"
                          >
                            {topic}
                            <input
                              type="checkbox"
                              id={`checkbox-${index}`}
                              name={topic}
                              value={topic}
                              checked={checkedState[index]}
                              onChange={() => handleOnChange(index)}
                            />
                            <span class="checkmark"></span>
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
    </>
  );
}

{
  /* <div>
          <h1> These are the current subscriptions</h1>
          {props.subscriptions.map((subscriptions) => {
            return (
              <div key={subscriptions.id}>
                <p>
                  {subscriptions.first_name}, {subscriptions.last_name},{" "}
                  {subscriptions.email}, {subscriptions.topics}
                </p>
              </div>
            );
          })}
        </div> */
}
