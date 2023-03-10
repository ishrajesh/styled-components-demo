import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 2px solid #4caf60;
  background-color: ${(props) =>  props.variant === 'outline'? '#FFF' :'#4caf50' } ;
  color: ${(props) =>  props.variant === "outline"?'#4caf50': '#FFF'  } ;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover{
    background-color: ${(props) =>  props.variant !== 'outline'? '#FFF' :'#4caf50' } ;
    color: ${(props) =>  props.variant !== "outline"?'#4caf50': '#FFF'  } ;
  }
`
export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%,#fda065 100%);
    border: none;
`