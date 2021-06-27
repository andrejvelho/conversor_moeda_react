import React , { useState } from 'react';
import './index.css';

function Conversor(props) {

    const [moedaDeValue, setMoedaDeValue] = useState('');
    const [moedaParaValue, setMoedaParaValue] = useState(0);

    function converter() {
        let dePara = props.moedaDe+"_"+props.moedaPara;
        const URL_API = 'https://free.currconv.com/api/v7/convert?q='+dePara+'&compact=ultra&apiKey=0d6223d04ea490efdc5f';
    
        fetch(URL_API)
        .then(response => {return response.json()})
        .then(json => {
            let cotacao = json[dePara];
            let conversao = props.moedaPara+' '+(cotacao * parseFloat(moedaDeValue) ).toFixed(3);
            setMoedaParaValue(conversao);
        });        
    }

    function handleMoedaDeChange(infoInput) {
        setMoedaDeValue(infoInput.target.value);
    }

    function onfocusSelectAll(event) {
        event.target.select();
    }

    function isNumber(event) {
        event = (event) ? event : window.event;
        var charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) 
                && charCode !== 46 
                && charCode !== 13 
                && charCode !== 44) {
            event.preventDefault();
        } else if(charCode === 13) {
            converter();
            return true;
        } else if (charCode === 44) {             
            setMoedaDeValue(moedaDeValue+'.');
            event.preventDefault();
        } else {
            return true;
        }
    }

    return (
        <div className="conversor">
            <h2>{ props.moedaDe } Para { props.moedaPara }</h2>
            <input type="text" value={ moedaDeValue } 
                onChange={ handleMoedaDeChange } 
                onFocus={ onfocusSelectAll }
                onKeyPress={ isNumber } 
                placeholder= {props.moedaDe} />
            <input type="button" value="Converter" onClick={ converter } className="btn_primary" />
            <h2>{ moedaParaValue }</h2> 
        </div>
    );
}

export default Conversor;