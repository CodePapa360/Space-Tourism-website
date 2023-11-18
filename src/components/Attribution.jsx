import styled from "styled-components";

const StyledAttribution = styled.div`
  padding: 1.5rem 1rem;
  background-color: #111527;
  text-align: center;

  a {
    margin-inline: 0.25rem;
    color: #2394f7;

    &:hover {
      color: #a5d2fa;
    }
  }
`;

function Attribution() {
  return (
    <StyledAttribution>
      <p>
        <span>
          Coded by
          <a
            href="https://twitter.com/CodePapa360"
            target="_blank"
            rel="noreferrer"
          >
            Alamin,
          </a>
        </span>
        <span>
          Challenge by
          <a
            href="https://www.frontendmentor.io/profile/CodePapa360"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </span>
      </p>
    </StyledAttribution>
  );
}

export default Attribution;
