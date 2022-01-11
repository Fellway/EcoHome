import {default as NavbarComponent} from "./Navbar";

export default {
    title: 'EcoHome/molecules/Navbar',
    component: NavbarComponent
};

const Template = (args) => <NavbarComponent {...args} />

export const Navbar = Template.bind({});