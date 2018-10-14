import React from 'react';
import {render} from 'react-dom';
import {EscapeInput, DangerousHTML} from './components/index';

render(
    <div>
        <hr/>
     <EscapeInput/>
     <hr/>
     <DangerousHTML/>
    </div>,
    document.getElementById('root')
);