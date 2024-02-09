import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LocaleSwitcher } from 'widgets/LocaleSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames([className, cls.Sidebar], { [cls.collapsed]: collapsed })}
        >
            <Button onClick={onToggle}>{t('toggle')}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LocaleSwitcher />
                <BugButton />
            </div>
        </div>
    );
};
