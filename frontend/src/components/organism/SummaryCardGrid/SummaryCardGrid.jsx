import SummaryCard from "../../molecules/SummaryCard/SummaryCard";
import styled from "styled-components";
import {SummaryCardData} from "./dummyData";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 50px;

  background-color: #ffffff;

  width: 100%;
  padding: 20px;
`

const SummaryCardGrid = () => (
    <Wrapper>
        {SummaryCardData.map((card) => {
            return <SummaryCard data={card.data} title={card.title}/>
        })}
    </Wrapper>
)

export default SummaryCardGrid;