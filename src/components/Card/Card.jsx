import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={'/'}>
          <h1>{item?.title}</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis
          voluptas ipsam facere maiores iste aliquam ad repellendus sunt,
          tempore quasi, ratione maxime dicta pariatur. Sequi expedita aliquid
          natus totam.
        </p>
        <Link href={'/'} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
