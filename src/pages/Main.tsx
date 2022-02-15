import type { GetStaticProps } from 'next';
import axios from 'axios';
import { GetCategoryData } from 'types/interface';

const Main = ({ data }: GetCategoryData) => {
  console.log(data);
  return <div className="main">메인페이지데이터체크</div>;
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`,
  );
  // console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default Main;