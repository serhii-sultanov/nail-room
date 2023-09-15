import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/utils/i18next';
import clsx from 'clsx';

export const LangButtonts: FC = () => {
  const { t } = useTranslation();
  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div>
      <button
        className={clsx(
          i18n.language === 'ua' ? 'text-white' : 'text-black opacity-50',
          'px-1 font-semibold uppercase text-sm'
        )}
        onClick={() => changeLanguage('ua')}
      >
        {t('ua')}
      </button>
      <span className='text-sand'>|</span>
      <button
        className={clsx(
          i18n.language === 'en' ? 'text-white' : 'text-black opacity-50',
          'px-1 font-semibold uppercase text-sm'
        )}
        onClick={() => changeLanguage('en')}
      >
        {t('en')}
      </button>
      <span className='text-sand'>|</span>
      <button
        className={clsx(
          i18n.language === 'ru' ? 'text-white' : 'text-black opacity-50',
          'px-1 font-semibold uppercase text-sm'
        )}
        onClick={() => changeLanguage('ru')}
      >
        {t('ru')}
      </button>
    </div>
  );
};
