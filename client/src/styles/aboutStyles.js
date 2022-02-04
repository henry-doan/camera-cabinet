import { Image } from 'react-bootstrap';
import styled from 'styled-components';

export const DarkBackground = styled.body`
background: #292929;

`



export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`
export const Header1 = styled.div`
  color: white;
  font-size: 40px;
  opacity: 0%;
   }
  `
  export const Header2 = styled.div`
  color: #292929;
  font-size: 25px;
  opacity: 0%;
  font: Montserrat;
  `
  export const Header3 = styled.div`
  color: white;
  font-size: 48px;
  font: Montserrat;
  margin: auto;
  margin-left: 475px ;
 font-weight: 700;
 position: relative;
 
 
   
  `

  export const Bgcolor = styled.div`
  background-color: #700000 ;
  `

  export const Grid = styled.div`
  margin: 60rem auto;
  width: min(100%, 10rem);
  display: grid;
  grid-template-columns: 600% 600%;
  grid-template-rows: auto;
  box-sizing: border-box;
  width: 100px;
  height: 300px;
  margin-left: 1px ;
  margin-right: auto;
  justfiy-content: space-evenly;
  align-content: space-evenly;
  align-items: end;
  justify-items: end;
  position: relative;
  flex-grow: 1;
  `

  export const Grid2 = styled.div`
  
  margin: auto;
 width: 50%;
 padding: 10px;
  flex-grow: 1;
  `
  export const Padding = styled.div`
  padding: 10px;
  `

export const Image1 = styled.div` {
  
  &:hover {
    transition: .5s ease;
    opacity: 90%;
    
  } 
  &:hover ${Header1} {
    margin: auto;
 
 padding: 10px;
    transition: .5s ease;
    opacity: 200%;
    color: #E61F25 ;
  }
  &:hover ${Header2} {
    transition: .5s ease;
    opacity: 200%;
    color:  White;
  }
`

export const Iborder = styled.div`
${Image} {
border: solid 2px red;
border-radius: 50%
}
`
  

 export const TopMargin = styled.div`
 margin: 5rem auto;
 align-items: center;
 `

export const Middle = styled.div`

  transition: .5s ease;
  opacity: 100%;
  text-color: #700000 ;
  `

// export 

// export const Container:hover .image {
//   opacity: 0.3;
// }

// .container:hover .middle {
//   opacity: 1;
// }




// <div class="container">
//   <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
//   <div class="middle">
//     <div class="text">John Doe</div>
//   </div>
// </div>


// border-radius: 50%;
//   opacity: 1;
//   display: block;
//   width: 100%;
//   height: auto;
//   transition: .5s ease;
// backface-visibility: hidden;