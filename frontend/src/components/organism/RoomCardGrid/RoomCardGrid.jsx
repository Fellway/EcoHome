import styled from "styled-components"
import RoomCard from "../../molecules/RoomCard/RoomCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 15px;

  background-color: #fff3e0;

  width: 100%;
  padding: 20px;
`

const RoomCardGrid = () => (
    <Wrapper>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
        <RoomCard title={'Bathroom'} subtext={'2 devices active'}/>
    </Wrapper>
)

export default RoomCardGrid;