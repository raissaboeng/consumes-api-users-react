import styled from "styled-components";

export const Li = styled.li`
    margin: 0.5rem;
    display: flex;
    padding: 0.8rem;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    background-color: #474A51;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;

h3 {
    text-align: start;
    width: 30%;
    font-size: 1.1rem;
    
}
div{
    display: block;
    width: 30%;
    text-align: start;
    margin: 5px;
}
p {
    line-height: 1.5rem;
}

button {
    background: none;
    color: white;
    margin-left: 0.7rem;
    opacity: 0.8;
    margin: 5px;
    width: 10%;
}
button:hover{
    opacity: 1;
    transform: scale(1.3);
}
`;