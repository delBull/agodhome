import clsx from 'clsx';
import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  FaTwitter, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaLinkedinIn, 
  FaDiscord 
} from 'react-icons/fa';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  const t = useTranslations('home-page.HeaderTechStack')
  return (
    <div>
      <m.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
        style={{ fontSize: '16px'}}
      >
        {t('Nuestras plataformas están diseñadas para innovar y transformar')}
      </m.p>
      <m.div
        className={clsx(
          'inline-flex items-center gap-4 p-2',
          'text-slate-500 dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.div variants={animation} className="flex gap-4 items-center">
          <FaTwitter 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#1DA1F2]',
              'cursor-pointer hover:scale-110'
            )} 
          />
          <FaInstagram 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#E4405F]',
              'cursor-pointer hover:scale-110'
            )} 
          />
          <FaTiktok 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]',
              'cursor-pointer hover:scale-110'
            )} 
          />
          <FaYoutube 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#FF0000]',
              'cursor-pointer hover:scale-110'
            )} 
          />
          <FaLinkedinIn 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#0A66C2]',
              'cursor-pointer hover:scale-110'
            )} 
          />
          <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
          <FaDiscord 
            className={clsx(
              'w-5 h-5',
              'transition duration-200 hover:text-[#5865F2]',
              'cursor-pointer hover:scale-110'
            )} 
          />
        </m.div>
      </m.div>
    </div>
  );
}

export default HeaderTechStack;
