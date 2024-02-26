import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Fred here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={'/p1.jpeg'} className={styles.image} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Title</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            optio molestias ipsa, quaerat cumque repudiandae natus harum. Esse
            quis quibusdam, neque excepturi doloribus ipsam dicta sint adipisci
            laboriosam dolore!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
