import React from 'react';
import styles from "./Card.module.css";
import star from "../assets/rating.svg";

interface ICard {
    url: string,
    type: string,
    title: string,
    author: string,
    reviewCount: string,
    oldPrice?: string,
    newPrice: string
}

const Card : React.FC<ICard> = ({url, type, title, author, reviewCount, oldPrice, newPrice}) => {
    return (
        <div className={styles.card}>
            <img className={styles.previewImage} src={url} alt={title} draggable={false}/>

            <span className={styles.type}>{type}</span>

            <a href="#" className={styles.title}>{title}</a>

            <a href="#" className={styles.author}>{author}</a>

            <div className={styles.ratingBlock}>
                <div className={styles.stars}>
                    <img draggable={false} className={styles.star} src={star} alt=""/>
                    <img draggable={false} className={styles.star} src={star} alt=""/>
                    <img draggable={false} className={styles.star} src={star} alt=""/>
                    <img draggable={false} className={styles.star} src={star} alt=""/>
                    <img draggable={false} className={styles.star} src={star} alt=""/>
                </div>
                <a href="#" className={styles.reviewCount}>({reviewCount})</a>
            </div>

            <div className={styles.priceBlock}>
                {
                    oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : null
                }

                <span className={styles.newPrice}>${newPrice}</span>
            </div>
        </div>
    );
};

export default Card;
