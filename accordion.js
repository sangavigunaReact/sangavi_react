import React,{useState} from 'react';
import { Data } from './data';
import styled from 'styled-components';
import {IoIosArrowDropdown} from 'react-icons/io';
import {IoIosArrowDropup} from 'react-icons/io';
import { IconContext } from 'react-icons';

const Accordionsection= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
background: #fff;
`;

const Container= styled.div`
position: absolute;
text-align: center;
color: #FF00FF;
top: 30%;
box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
`;

const Wrap=styled.div`
background: #272727;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;

h1{
    padding: 2rem;
    font-size: 2rem;
}

span{
    margin-right: 1.5rem;
}
`;

const Dropdown=styled.div`
background: #1c1c1c;
color: #FF00FF;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid #FF00FF;
border-top: 1px solid #FF00FF;

p{
    font-size: 2rem;
}
`;

const Accordion = () => {
    const [clicked, setclicked]= useState(false);
    const handleclick= index =>{
        if (clicked === index){
            return setclicked(null);
        }
        setclicked(index)
    }

  return (
    <IconContext.Provider value={{color:'#fff', size: '25px'}}>
      <Accordionsection>
         
          <Container>
          <h1>Accordion</h1>
              {Data.map((item,index) => {
                  return(
                      <div>
                      <Wrap onClick={()=> handleclick(index)} key={index}>
                          <h1>{item.question}</h1>
                          <span>{clicked===index ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}</span>
                      </Wrap>
                      {clicked===index ? (
                          <Dropdown>
                            <p>{item.answer}</p>
                          </Dropdown>
                      ): null}
                      
                      </div>
                  )
              })}
          </Container>
      </Accordionsection>
    </IconContext.Provider>
  )
}

export default Accordion;
