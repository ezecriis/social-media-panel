import React from 'react';
import '../css/card.css';

function Card({ username, followers, todayFollowers, icon, name }) {
    const cardClass = `card ${name}`;
    return (
        <div>
            <article className={cardClass}>
                <p className="card-title">
                    <img src={icon} alt="" />
                    {username}
                </p>
                <p className="card-followers">
                    <span className="card-followers-number">{followers}</span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="images/icon-up.svg" alt="" />
                    {todayFollowers} Today
                </p>
            </article>
        </div>
    )
}

export default Card;