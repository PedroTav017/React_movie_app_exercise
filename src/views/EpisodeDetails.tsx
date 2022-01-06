// components
import { Navigate } from "react-router";
// custom hooks
import { useSelectorTyped } from "../hooks/useSelectorTyped";
import { Row, Col } from "antd";

const EpisodeDetails = () => {
  const episode = useSelectorTyped((state) => state.episode);

  return (
    <>
      {episode.number !== "" ? (
        <>
          <Row>
            {episode.image ? (
              <img
                src={episode.image.medium && episode.image.medium}
                alt={episode.name}
                style={{ marginBottom: "20px" }}
              />
            ) : null}
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
