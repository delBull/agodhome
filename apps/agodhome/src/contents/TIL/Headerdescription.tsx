import { useRouter } from 'next/router';

function Headerdescription(): JSX.Element {
const { locale } = useRouter();

const agodPrep = {
  es: {
    description: 'Preparar el ecosistema con las plataformas existentes para la salida al mercado.'
    },
  en: {
    description: 'Prepare the ecosystem with existing platforms for market launch.'
    }
};


  return (
    <>
        {agodPrep[locale].description}
      </>
  );
}

export default Headerdescription;
