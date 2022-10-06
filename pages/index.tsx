import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAssets } from '../lib/assets';
import { Viewer } from '../components/viewer';
import { Asset } from '../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const assets: Asset[] = getAssets();
  return {
    props: {
      assets,
    },
  };
}


const Home: NextPage = ({ assets }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Viewer assets={assets} />
  )
}



export default Home
