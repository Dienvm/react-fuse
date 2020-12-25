import React from 'react'
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

/**
 * Lazy load Dashboard
 */

const DashboardConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/dashboard',
            component: React.lazy(() => import('./Dashboard'))
        }
    ]
};

export default DashboardConfig;
