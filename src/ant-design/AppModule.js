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
        this.configurations.resourceDetails.dashboard = {
            component: Loadable({
                loader: () => import('./containers/resource/panel/DashboardPanel'),
                loading: () => null,
                render(loaded, props) {
                    const Component = loaded.default;
                    return <Component {...props} />;
                },
            }),
        };
        this.configurations.resourceDetails.summary = {
            component: Loadable({
                loader: () => import('./containers/resource/panel/SummaryPanel'),
                loading: () => null,
            }),
        };
        this.configurations.resourceDetails.settings = {
            component: Loadable({
                loader: () => import('./containers/resource/panel/SettingPanel'),
                loading: () => null,
            }),
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
                component: Loadable({
                    loader: () => import('./containers/resource/panel/summary/Group'),
                    loading: () => null,
                    render(loaded, props) {
                        const Component = loaded.default;
                        return <Component {...props} />;
                    },
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
                // Object.keys()
                // this.configurations.reducers
            });
            return;
        }
        const newConfigurations = Object.assign({}, this.configurations[pluggableType], configuration);
        Object.assign(this.configurations, { [pluggableType]: newConfigurations });
    }
}

export default AppModule;
