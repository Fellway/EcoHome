import MainTemplate from "../MainTemplate/MainTemplate";
import styled from "styled-components";
import Header from "../../atoms/Header/Header";

const WelcomeMessageBox = styled.div`
  max-width: 800px;
  padding: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 50px;
`;

const StyledParagraph = styled.p`
  text-indent: 50px;
  text-align: justify;
  font-size: 1.6rem;
  margin: 0 auto;
`;

const Regards = styled.p`
  width: fit-content;
  justify-self: right;
`;

const StyledHeader = styled(Header)`
  font-size: 3rem;
`

const SolarSystemTemplate = () => (
    <MainTemplate>
        <WelcomeMessageBox>
            <StyledHeader>Welcome to EcoHome</StyledHeader>
            <StyledParagraph>
                It&apos;s nice to see you here! We are glad that you are using our application. As you know,
                the application is in early access stage. A lot of functionality and solutions may not be
                fully operational yet. However, please be patient. Our team works to provide the highest
                quality solutions.
            </StyledParagraph>
            <Regards>
                Best Regards,
                <br />
                EcoHome Team
            </Regards>
        </WelcomeMessageBox>
    </MainTemplate>
);

export default SolarSystemTemplate;