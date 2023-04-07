import {Fragment} from 'react';
import ReactDom from 'react-dom';
import './Models.css';

const Backdrop=(props)=>{
return <div></div>
}

const ModelOverLay=(props)=>{
    return (
      <div>
        <div>{props.children}</div>
      </div>
    );
}

const PortElement=document.getElementById('overlays');
const Models = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, PortElement)}
      {ReactDom.createPortal(<ModelOverLay>{props.children}</ModelOverLay>, PortElement)}
    </Fragment>
  );
}

export default Models;