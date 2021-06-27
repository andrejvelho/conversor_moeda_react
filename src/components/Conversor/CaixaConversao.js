import React from 'react';
import styled from 'styled-components';
import Conversor from './Conversor';

const Main = styled.main`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 40px;
`;

function CaixaConversao(propos) {
    return (
      <>
        <Main>
            <Conversor moedaDe={ propos.moeda1 } moedaPara={ propos.moeda2} />
            <Conversor moedaDe={ propos.moeda2 } moedaPara={ propos.moeda1} />
        </Main>
      </>
    );
  }

export default CaixaConversao;