import { classNames } from 'shared/lib/classNames/classNames';
import { Preloader } from 'shared/ui/Preloader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Preloader />
    </div>
);

export default PageLoader;
