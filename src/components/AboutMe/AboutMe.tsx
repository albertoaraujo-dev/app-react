import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import { Section } from "../../consts"

const AboutMeWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`

const StyledText = styled.p`
  line-height: 24px;
`
const StyledImage = styled.img`
  width: 17rem;
  height: 17rem;
  margin-top: 40px;
  border-radius: 50%;
`

const AboutMe: React.FC = () => (
  <SectionLayout id={Section.AboutMe} title="Sobre mim">
    <AboutMeWrapper>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, doloremque. Dolorem
        doloribus perferendis cum velit maxime ut amet tenetur fugiat quaerat corporis, animi ipsa
        voluptatibus officia, praesentium dolor quasi consequuntur! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illo ab odit sapiente, optio voluptatem nemo. Ipsa quo ea
        excepturi odit laudantium illum. Aperiam placeat mollitia nisi corrupti minima assumenda
        quasi!
      </StyledText>
      <StyledImage src="https://picsum.photos/id/237/200/300" alt="foto"></StyledImage>
    </AboutMeWrapper>
  </SectionLayout>
)

export default AboutMe
