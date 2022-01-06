// components
import { Navigate } from "react-router";
import styled from "styled-components";
// custom hooks
import { useSelectorTyped } from "../hooks/useSelectorTyped";
import { Row, Col } from "antd";

const EpisodeDetails = () => {
  const episode = useSelectorTyped((state) => state.episode);

  // CSS-in-JS styles using styled-components & inline styles
  // One breakpoint used in order to develop responsivity
  const ImgDiv = styled.div`
    & {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
    }
    & img {
      @media (max-width: 768px) {
        width: 100%;
      }
  `;

  return (
    <>
      {episode.number !== "" ? (
        <>
          <Row>
            <ImgDiv>
              {episode.image ? (
                <img
                  src={episode.image.medium && episode.image.medium}
                  alt={episode.name}
                />
              ) : null}
            </ImgDiv>
          </Row>
          <Row>
            <h2>{episode.name + " - Episode " + episode.number}</h2>
          </Row>
          <Row>
            <Col span={16}>
              <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
            </Col>
          </Row>
        </>
      ) : (
        <Navigate to="/show" />
      )}
    </>
  );
};

export default EpisodeDetails;
