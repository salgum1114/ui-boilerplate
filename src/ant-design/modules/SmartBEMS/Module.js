import Loadable from 'react-loadable';
import AppModule from '../../AppModule';

export default class Module extends AppModule {
    constructor(configurations) {
        super();
        this.configurations = configurations;
    }

    dashboardWidgets() {
        const configuration = {
            table: 'TableWidgetSchema',
        };
        this.register('dashboardWidgets', configuration);
    }

    resourceDetails() {
        const configuration = {
            bems: {
                summary: {
                    component: Loadable({
                        loader: () => import('./containers/resource/panel/SummaryPanel'),
                        loading: () => null,
                    }),
                    title: 'SmartBEMS Summary',
                },
                history: {
                    component: Loadable({
                        loader: () => import('./containers/resource/panel/SummaryPanel'),
                        loading: () => null,
                    }),
                    title: 'History',
                },
            },
        };
        this.register('resourceDetails', configuration);
    }

    // resourceSummaryDetails() {
    //     const configuration = {
    //         availability: {
    //             component: Loadable({
    //                 loader: () => import('./containers/resource/panel/summary/Availability'),
    //                 loading: () => null,
    //             }),
    //             order: 1,
    //         },
    //     };
    //     this.register('resourceSummaryDetails', configuration);
    // }

    reducers() {
        const configuration = () => import('./reducers');
        this.register('reducers', configuration);
    }
}
