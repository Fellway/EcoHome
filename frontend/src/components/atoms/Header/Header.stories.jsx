import {default as HeaderComponent} from "./Header";

export default {
    title: 'EcoHome/atoms/Header',
    component: HeaderComponent
};

const Template = (args) => <HeaderComponent {...args} />

export const Header = Template.bind({});
Header.args = {
    children: "Power consumption"
}