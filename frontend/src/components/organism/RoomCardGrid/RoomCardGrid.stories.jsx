import {default as RoomCardGridComponent} from "./RoomCardGrid"

export default {
    title: 'EcoHome/organism/RoomCardGrid',
    component: RoomCardGridComponent
};

const Template = (args) => <RoomCardGridComponent {...args} />

export const RoomCardGrid = Template.bind({});
