import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  xxs: "250px", // Very very small size devices
  xs: "320px", // Extra small devices (phones)
  sm: "768px", // Small devices (tablets)
  md: "992px", // Medium devices (desktops)
  lg: "1200px", // Large devices (desktops)
  xl: "1440px", // Extra large devices (desktops)
};

const GlobalStyles = createGlobalStyle`
html {
  scrollbar-gutter: stable;
  font-size: 60%;

  @media screen and (min-width: ${breakpoints.xxs})  {
    font-size: 70%;
  }

  @media screen and (min-width: ${breakpoints.xs})  {
    font-size: 100%;
  }
}

body {
  background-color:  hsla(223, 42%, 8%, 1);
  min-height: 100dvh;
  color: white;
  font-family: "Barlow", sans-serif;
  position: relative;

}

@keyframes circleing {
  to {
    height: 150%;
    width: 150%;
    opacity: 0;
  }
}

/* ///////////////// */
/* //Reset// */
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  overflow-wrap: break-word;
  hyphens: auto;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  transition: color 0.3s, background-color 0.3s;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  -webkit-text-decoration-skip: ink;
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

/* select:disabled,
input:disabled {
    background-color: gray;
    color: gray;
} */

button {
  cursor: pointer;
}

button:has(svg) {
  line-height: 0;
}

*:disabled {
  cursor: not-allowed;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    -webkit-animation-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: 0.01ms !important;
    -o-transition-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyles;
