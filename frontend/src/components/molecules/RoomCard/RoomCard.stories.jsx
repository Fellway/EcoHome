import {default as RoomCardComponent} from "./RoomCard";

export default {
    title: 'EcoHome/molecules/RoomCard',
    component: RoomCardComponent
};

const Template = (args) => <RoomCardComponent{...args} />

export const RoomCard = Template.bind({});