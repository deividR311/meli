import { lazy, LazyExoticComponent } from 'react';
// OWN IMPORTS
import { NotFoundPage } from '../pages/Pages';

type JSXComponent = () => JSX.Element;

interface Route {
    path : string;
    Component : LazyExoticComponent<JSXComponent> | JSXComponent;
}

const HeaderPageLazy = lazy(() => import(/* webpackChunkName: "Header" */'../pages/Header/Header'));

export const routes : Route[] = [
    {
        path : '/*',
        Component : HeaderPageLazy
    },
    {
        path : '/Not-Found',
        Component : NotFoundPage
    }
];