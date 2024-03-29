import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import baseUrl from '../../../baseUrl';

// function to fetch data
const getData = async (page, cat) => {
  const res = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ''}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  // console.log(posts);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => {
          return <Card key={item._id} item={item} />;
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
