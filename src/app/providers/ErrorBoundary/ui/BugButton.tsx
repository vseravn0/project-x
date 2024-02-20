import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const { t } = useTranslation();
    const [hasError, setError] = useState(false);

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    }, [hasError]);

    return (
        <Button onClick={() => setError((prevState) => !prevState)}>{t('bugButton')}</Button>
    );
};
