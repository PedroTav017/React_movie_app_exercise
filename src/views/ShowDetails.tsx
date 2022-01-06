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

const ShowDetails = () => {
  const showID = useSelectorTyped((state) => state.show);
  const dispatch = useDispatchTyped();

  // show state management
  const [showDetails, setShowDetails] = useState<any>();
  const showHandler = (data: any) => setShowDetails(data);

  // show episodesstate management
  const [showEpisodes, setShowEpisodes] = useState<any>();
  const showEpisodesHandler = (data: any) => setShowEpisodes(data);

  // side effects (API calls)
  useEffect(() => {
    get_show(showID, showHandler);
    get_show_episodes(showID, showEpisodesHandler);
  }, [showID]);

  useEffect(() => {
    console.log(showEpisodes);
  }, [showID, showEpisodes]);

  // CSS-in-JS styles using styled-components & inline styles
  const DetailsDiv = styled.div`
    & {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    & .infoHolder {
      margin-left: 40px;
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
      color: white
    }
  `;

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
