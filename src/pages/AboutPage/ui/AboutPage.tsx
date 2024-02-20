import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation(['about']);
    return (
        <span>{t('aboutPage.title')}</span>
    );
};

export default AboutPage;
