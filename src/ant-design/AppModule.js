import React from 'react';
import Loadable from 'react-loadable';

class AppModule {
    constructor() {
        this.configurations = {
            dashboardWidgets: {},
            resourceDetails: {},
            resourceSummaryDetails: {},
            reducers: {},
        };
    }

    dashboardWidgets() {
        this.configurations.dashboardWidgets = {
            card: 'CardWidgetSchema',
            chart: 'ChartWidgetSchema',
        };
    }

    resourceDetails() {
        this.configurations.resourceDetails.default = {
            dashboard: {
                component: Loadable({
                    loader: () => import('./containers/resource/panel/DashboardPanel'),
                    loading: () => null,
                    render(loaded, props) {
                        const Component = loaded.default;
                        return <Component {...props} />;
                    },
                }),
                title: 'Dashboard',
            },
            summary: {
                component: Loadable({
                    loader: () => import('./containers/resource/panel/SummaryPanel'),
                    loading: () => null,
                }),
                title: 'Summary',
            },
            settings: {
                component: Loadable({
                    loader: () => import('./containers/resource/panel/SettingPanel'),
                    loading: () => null,
                }),
                title: 'Settings',
            },
        };
    }

    resourceSummaryDetails() {
        this.configurations.resourceSummaryDetails = {
            availability: {
                component: Loadable({
                    loader: () => import('./containers/resource/panel/summary/Availability'),
                    loading: () => null,
                }),
                order: 1,
            },
            metric_1: {
                component: Loadable({
                    loader: () => import('./containers/resource/panel/summary/MetricChart'),
                    loading: () => null,
                }),
                order: 2,
            },
            group: {
                key: 'group',
                component: Loadable({
                    loader: () => import('./containers/resource/panel/summary/Group'),
                    loading: () => null,
                }),
                order: 3,
            },
        };
    }

    reducers() {
        const reducers = () => import('./reducers');
        reducers().then((values) => {
            this.configurations.reducers = values;
        });
    }

    filter() {
        return this;
    }

    register(pluggableType, configuration) {
        if (pluggableType === 'reducers') {
            configuration().then((values) => {
                const newConfigurations = Object.assign({}, this.configurations[pluggableType], values);
                Object.assign(this.configurations, { [pluggableType]: newConfigurations });
            });
            return;
        }
        const newConfigurations = Object.assign({}, this.configurations[pluggableType], configuration);
        Object.assign(this.configurations, { [pluggableType]: newConfigurations });
    }
}

export default AppModule;
