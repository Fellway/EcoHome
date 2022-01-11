import {default as SidebarComponent} from "./Sidebar";

export default {
    title: 'EcoHome/molecules/Sidebar',
    component: SidebarComponent
};

const Template = (args) => <SidebarComponent {...args} />

export const Sidebar = Template.bind({});
