import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routerConfig/routerConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation(['main', 'about']);

    return (
        <div className={classNames([className, cls.navbar])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath[AppRoutes.MAIN]}
                    className={cls.mainLink}
                >
                    {t('mainPage.title', { ns: 'main' })}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to={RoutePath[AppRoutes.ABOUT]}
                >
                    {t('aboutPage.title', { ns: 'about' })}
                </AppLink>
            </div>
        </div>
    );
};
