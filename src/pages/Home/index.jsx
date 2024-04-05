import styled from 'styled-components';

import { HTMBlockWidget } from '@sitecore-search/react';
import { PAGE_EVENTS_HOME } from '../../data/constants.js';
import withPageTracking from '../../hocs/withPageTracking.jsx';
import { HighlightedWrapper, PageSection } from '../../components/Common/index.jsx';
import HomeFAQ from '../../components/HomeFAQ/index.jsx';
import HomeHighlighted from '../../widgets/HomeHighlighted/index.jsx';
import { Darken, HeroContainer, HeroContentWrapper, HeroRow, HeroWrapper, HeroContentRow, HeroAlignCenter } from './styled.js';

const HighlightedArticles = styled(PageSection)`
  background: url(https://wwwsitecorecom.azureedge.net/assets/images/Sitecore_3D-Composition_Neutral_Scene04.jpg);
  background-size: cover;
  background-position: left;
  opacity: 0.9;
`;

const Home = () => {
  return (
    <>
    <HeroContainer>
      <HeroRow>
      <HeroWrapper>
        <Darken />
        <HeroContentWrapper>
          <HeroContentRow>
            <HeroAlignCenter>
              <h1>HKEX powered by Sitecore Search</h1>
            </HeroAlignCenter>
          </HeroContentRow>
      </HeroContentWrapper>
      </HeroWrapper>
      
      </HeroRow>
    </HeroContainer>
      {/* <HTMBlockWidget rfkId="home_hero" /> */}
      <HomeFAQ />
      <HighlightedArticles>
        <HighlightedWrapper>
          <HTMBlockWidget rfkId="highlight_title2" />
          <HomeHighlighted rfkId="search_home_highlight_articles" />
        </HighlightedWrapper>
      </HighlightedArticles>
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
