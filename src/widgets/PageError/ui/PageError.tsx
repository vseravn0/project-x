import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div
            className={classNames([cls.pageError])}
        >
            <p>{t('pageError')}</p>
            <Button onClick={reloadPage}>{t('refreshPage')}</Button>
        </div>
    );
};
