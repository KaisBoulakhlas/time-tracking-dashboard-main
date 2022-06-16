import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
  
  :root{
    --fw-300: 300;
    --fw-400: 400;
    --fw-500: 500;
    --fs-body: 18px;
    --ff-body:'Rubik', sans-serif;
    --color-primary-blue: hsl(246, 80%, 60%);
    --color-primary-light-red: hsl(348, 100%, 68%);
    --color-primary-soft-blue: hsl(195, 74%, 62%);
    --color-primary-lime-green: hsl(145, 58%, 55%);
    --color-primary-soft-orange: hsl(43, 84%, 65%);
    --color-primary-violet: hsl(264, 64%, 52%);
    --color-neutral-very-dark-blue: hsl(226, 43%, 10%);
    --color-neutral-desatured-blue: hsl(235, 45%, 61%);
    --color-neutral-pale-blue: hsl(236, 100%, 87%);
    --color-neutral-dark-blue: hsl(235, 46%, 20%);
}

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    font-family: var(--ff-body); 
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-neutral-very-dark-blue);
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
      width:100;
      height:auto;
      display: block;
  }
`;

export default GlobalStyle;