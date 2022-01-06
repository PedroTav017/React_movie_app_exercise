// components
import { useState, useEffect } from "react";
import ArrOfObjList from "../components/ArrOfObjList";
import { Row, Col } from "antd";
import styled from "styled-components";
// custom hooks
import { useSelectorTyped } from "../hooks/useSelectorTyped";
import { useDispatchTyped } from "../hooks/useDispatchTyped";
// actions
import { episodeActions } from "../store/episode/episode";
// services
import get_show from "../services/get_show";
import get_show_episodes from "../services/get_show_episodes";

// initialShowStateType
type initShowState = {
  name: string;
  summary: string;
  image: { medium: string; original: string };
};

// CSS-in-JS styles using styled-components & inline styles
// One breakpoint used in order to develop responsivity
const DetailsDiv = styled.div`
  & {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  & img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  & .infoHolder {
    margin-left: 40px;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const EpisodesDiv = styled.div`
  & li {
    background-color: #001529;
    margin-bottom: 2px;
  }
  & li:hover {
    background-color: #0b345c;
  }
  & li a {
    color: white;
  }
`;

const ShowDetails = () => {
  const showID = useSelectorTyped((state) => state.show);
  const dispatch = useDispatchTyped();

  // show state management
  const [showDetails, setShowDetails] = useState<initShowState>();
  const showHandler = (data: initShowState) => setShowDetails(data);

  // show episodesstate management
  const [showEpisodes, setShowEpisodes] = useState<[]>();
  const showEpisodesHandler = (data: []) => setShowEpisodes(data);

  // side effects (API calls)
  useEffect(() => {
    get_show(showID, showHandler);
    get_show_episodes(showID, showEpisodesHandler);
  }, [showID]);

  return (
    <>
      {showDetails && showEpisodes && (
        <>
          <Row>
            <Col span={24}>
              <DetailsDiv>
                <img src={showDetails.image.medium} alt={showDetails.name} />
                <div className="infoHolder">
                  <h1>{showDetails.name}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: showDetails.summary }}
                  />
                </div>
              </DetailsDiv>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <EpisodesDiv>
                <h2>{"Episodes (" + showEpisodes.length + ")"}</h2>
                <ArrOfObjList
                  data={showEpisodes}
                  url={"/show/episode"}
                  action={(episode: any) =>
                    dispatch(episodeActions.changeEpisode(episode))
                  }
                />
              </EpisodesDiv>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ShowDetails;
