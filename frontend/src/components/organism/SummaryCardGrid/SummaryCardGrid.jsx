import SummaryCard from "../../molecules/SummaryCard/SummaryCard";
import styled from "styled-components";
import {SummaryCardData} from "./dummyData";
import PowerSummaryCard from "../../molecules/PowerSummaryCard/PowerSummaryCard";
import {PowerSummaryData} from "../../molecules/PowerSummaryCard/dummyData";
import {Component} from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  grid-gap: 50px;

  box-sizing: border-box;

  background-color: #f8f9fa;

  width: 100%;
  padding: 20px;
`

class SummaryCardGrid extends Component {
    render() {
        return (
            <>
                <PowerSummaryCard data={PowerSummaryData} />
                <Wrapper>
                    {SummaryCardData.map((card) => {
                        return <SummaryCard uppercase={true} data={card.data} title={card.title}/>
                    })}
                </Wrapper>
            </>
        );
    }
}

export default SummaryCardGrid;