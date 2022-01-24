import React from "react";
import styled, { css } from "styled-components";
import { useSnapshot } from "valtio";
import store, { actions } from "../store/store";

const Lesson = () => {
  const state = useSnapshot(store);

  const Lessons = state.course.lessons;
  const videoUrl = state.nowPlaying;

  const dispatch = (action) => {
    actions(action);
  };

  // useEffect(() => {}, [Lessons]);
  const play = (video, locked, cover) => {
    if (locked) {
      return;
    }
    dispatch({
      type: "NOW_PLAYING",
      payload: { video: video, canPlay: true, cover: cover },
    });
  };

  return (
    <div>
      {Lessons &&
        Lessons.map(({ thumbnail, title, video, locked, cover }, index) => (
          <Item
            key={index}
            onClick={() => {
              play(video, locked, cover);
            }}
            nowPlaying={videoUrl == video ? true : false}
            locked={locked}
          >
            {videoUrl == video && <Playing src={"/images/now_playing.png"} />}

            <Image src={thumbnail} />
            <div>
              <Title>{title}</Title>
              <Subtitle>
                {index + 1}/{Lessons.length} Lessons
              </Subtitle>
            </div>
          </Item>
        ))}
    </div>
  );
};

export default Lesson;

const Playing = styled.img`
  width: 12px;
  height: 13px;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 125px;
  height: 63px;
  border-radius: 15px;
  margin-right: 20px;
  object-fit: cover;
`;

const Title = styled.p`
  width: 146px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const Subtitle = styled.span`
  font-size: 12px;
  color: rgba(225, 225, 225, 0.8);
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;

  background: ${(props) => (props.nowPlaying ? "rgba(49, 61, 86, 0.5)" : "")};
  padding: ${(props) => (props.nowPlaying ? "20px 40px 20px 18px" : "")};

  opacity: ${(props) => (props.locked ? 0.2 : 1)};
  cursor: ${(props) => (props.locked ? "default" : "pointer")};

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
