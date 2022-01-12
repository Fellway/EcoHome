import styled from "styled-components";
import MainTemplate from "../MainTemplate/MainTemplate";
import SummaryCardGrid from "../../organism/SummaryCardGrid/SummaryCardGrid";

const Wrapper = styled.div`
    `;

const DashboardTemplate = () => (
    <Wrapper>
        <MainTemplate>
            <SummaryCardGrid/>
        </MainTemplate>
    </Wrapper>
);

export default DashboardTemplate;