import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <span>404: Not found! ⚠️</span>
      <GoBackBtn onClick={() => navigate(-1)}>&#10094; Go back</GoBackBtn>
    </StyledNotFound>
  );
}

export default NotFound;

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const GoBackBtn = styled.button`
  background-color: #42414d;
  border: 2px solid #42414d;
  padding: 0.3rem 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #2b2a33;
  }
`;
