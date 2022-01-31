import styled from 'styled-components';





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
  color: white;
  font-size: 25px;
  opacity: 0%;
  `

  export const Bgcolor = styled.div`
  background-color: #700000 ;
  `

  export const Grid = styled.div`
  margin: 35rem auto;
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
  justify-items: end;
  align-content: space-evenly;
  align-items: end;
  
`
export const Image1 = styled.div` {
  &:hover {
    transition: .5s ease;
    opacity: 90%;
  } 
  &:hover ${Header1} {
    transition: .5s ease;
    opacity: 200%;
    color: White ;
  }
  &:hover ${Header2} {
    transition: .5s ease;
    opacity: 200%;
    color: White ;
  }
`

export const Iborder = styled.div`
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    border-color: "Red",
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