import TIL from '@/components/mdx/TIL';
import { useRouter } from 'next/router';

function Headercontent(): JSX.Element {
const { locale } = useRouter();

const agodPrep = {
  es: {
    title: 'AGOD Prep'
    },
  en: {
    title: 'AGOD Prep'
    }
};


  return (
    <>
      <TIL.Item>
        {agodPrep[locale].title}
      </TIL.Item>
      </>
  );
}

export default Headercontent;
