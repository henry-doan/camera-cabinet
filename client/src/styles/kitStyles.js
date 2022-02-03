import styled from 'styled-components';

export const ShowPara = styled.div`
  position: relative;
  left: 830px;
  top: 100px;
  font-family: 'Montserrat', sans-serif;
  color: #fe2712;
`;

export const ImgContainer = styled.div`
  position: absolute;
  left: 300px;
  top: 100px;
`;

export const CompContainer = styled.div`
  position: absolute;
  top: 450px;
  left: 300px;
`

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

export const Font = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

export const RedFont = styled.div`
  color: #fe2712;
  
`;

export const WhiteFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
`;
export const Grid = styled.div`
  margin: 12rem auto;

  display: grid;
  grid-template-columns: 37% 37%;
  width: 1120px;
  height: 200px;
  margin-left: 220px;
  margin-right: auto;
  justify-items: end;
  align-content: space-evenly;
  align-items: end;
`

export const DarkBackground = styled.div`
background: #292929;
overflow: hidden;
position: absolute;
left: 0%;
`

// export const Grid = styled.div`

// `;
// export const Row = styled.div`
//   display: flex; 
// `;

// const media ={
//   xs: (styles) => `
//     @media only screen and (max-width: 480px){
//       ${styles}
//     }
//   `,
// }

// export const Col = styled.div`
//  flex: ${(props) => props.size};
//  ${(props) => props.collapse && media[props.collapse](`
//   display: none;
//   `)}
// `;

export const Header1 = styled.div`
  color: Black;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  margin: 30px;
  left: 30px;
`;

export const Header3 = styled.div`
  color: white;
`;
export const Header4 = styled.div`
  color: white;
`;

export const Para1 = styled.div`
  color: #606060;
  font-family: 'Montserrat', sans-serif;
  margin: 30px;
  left: 40px;
`;

export const KitContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center; 
  border: solid white;
`;

export const FormContainer = styled.div`
  width: 50vw;
`

export const BtnContainer = styled.div`
  position: absolute;
  top: 390px;
  left: 300px;
`
