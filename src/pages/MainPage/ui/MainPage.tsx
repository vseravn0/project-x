import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation(['main']);
    return (
        <span>{t('mainPage.title')}</span>
    );
};

export default MainPage;
