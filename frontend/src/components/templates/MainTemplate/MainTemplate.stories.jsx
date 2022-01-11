import {default as MainTemplateComponent} from "./MainTemplate";

export default {
    title: 'EcoHome/templates/MainTemplate',
    component: MainTemplateComponent
};

const Template = (args) => <MainTemplateComponent {...args} />

export const MainTemplate = Template.bind({});
MainTemplate.args = {
    children: 'Example content'
}
