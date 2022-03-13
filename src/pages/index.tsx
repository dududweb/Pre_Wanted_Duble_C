import { useState, useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import GridCardList from 'components/GridCardList/index';
import Slider from 'components/Slider/index';
import styles from 'styles/Home.module.scss';
import { API } from 'constants/api';
import { ConCategory } from 'types/interface';
import { path } from 'constants/path';
import StoreHeader from 'components/StoreHeader';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios(API.MAIN_CATEGORIES);
  return {
    props: {
      categoryLists: data.conCategory1s,
    },
  };
};

interface HomeProps {
  categoryLists: ConCategory[];
}

const Home: NextPage<HomeProps> = ({ categoryLists }) => {
  console.log(categoryLists);

  return (
    <div className={styles.main}>
      <Head>
        <title>니콘내콘</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoreHeader />
      <Slider />
      <GridCardList data={categoryLists} path={path.categories} />
      <div className={styles.eventTag}>
        <h3 className={styles.titleTag}>놓치지 마세요.</h3>
        <h2 className={styles.event}>오늘의 땡처리콘!</h2>
      </div>
    </div>
  );
};

export default Home;
