import React, { Component } from "react";

export default class SubscriptionForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name" alt="first name" placeholder="First name" />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="last-name" id="last-name" alt="last name" placeholder="Last name"/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" alt="email address" placeholder="Email adress" />
                </div>
                <div>
                    <p>I would like to receive: </p>
                    <input type="checkbox" name="attractions" id="attractions" value="attractions" />
                    <label for="attractions">Attractions</label>
                    <input type="checkbox" name="volunteer-opportunities" id="volunteer-opportunities" value="volunteer-opportunities" />
                    <label for="attractions">Volunteer Opportunities</label>
                    <input type="checkbox" name="promotions" id="promotions" value="promotions" />
                    <label for="promotions">Promotions</label>

                </div>

            </form>
        )
    }
}
