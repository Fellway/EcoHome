import {default as DashboardTemplateComponent} from "./DashboardTemplate"

export default {
    title: 'EcoHome/templates/Dashboard',
    component: DashboardTemplateComponent
};

const Template = (args) => <DashboardTemplateComponent {...args} />

export const Dashboard = Template.bind({});