import React from "react";

export default function AllSubscriptions(props) {
    return (
        <div>
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
        </div>
    )
}
