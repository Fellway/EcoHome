import NavButton from "./NavButton";
import {Eye, HouseFill} from 'react-bootstrap-icons';

export default {
    title: 'EcoHome/atoms/NavButton',
    component: NavButton
};

const Template = (args) => <NavButton {...args} />

export const HomeButton = Template.bind({});
HomeButton.args = {
    Icon: HouseFill,
    color: '#F57C00',
    isActive: true
};

export const EyeButton = Template.bind({});
EyeButton.args = {
    Icon: Eye,
    color: '#F57C00',
    isActive: true
};
