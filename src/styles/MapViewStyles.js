import styled from 'styled-components';

const StyledClusterMarker = styled.div`
  color: #fff;
  background: #e63946;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 55%;
  &:hover {
    cursor: pointer;
  }
`;

const StyledIncidentsContainer = styled.div`
  width: 24vw;
  height: 70vh;

  background-color: white;

  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;
const StyledScrollableIncidentContainer = styled.div`
  height: 70vh;
  overflow: auto;
  padding: 12px 4px 0;

  border: 1px solid rgb(210, 210, 210);
  boarder-top: none;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;

const StyledClearIncidentsBtn = styled.div`
  width: 22vw;
  text-align: right;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export {
  StyledClusterMarker,
  StyledScrollableIncidentContainer,
  StyledIncidentsContainer,
  StyledClearIncidentsBtn,
};
