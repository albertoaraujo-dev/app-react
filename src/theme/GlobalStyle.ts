import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

	body {
		padding: 0;
		margin: 0;
		font-family: Lato, sans-serif;
		min-width: 320px;
		cursor: default;
		text-align: center;
		background-color: #c4bbf0;
	}

	h1, h2 {
		font-family: 'Barlow Condensed', sans-serif;
    font-weight: 500;
		text-align: center;
		margin: 0;
	}

  h3 {
    font-family: Barlow, sans-serif;
    text-align: center;
    margin: 0;
  }

	p {
	  margin: 0;
	}

  button, a {
    cursor: pointer;
  }

	/* Scroll-bar Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #4f3b78 #c4bbf0;
}

/* Scroll-bar Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #c4bbf0;
}

*::-webkit-scrollbar-thumb {
  background-color: #4f3b78;
  border-radius: 20px;
  
}
`;
