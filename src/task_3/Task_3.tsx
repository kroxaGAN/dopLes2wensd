import React, {ChangeEvent, createRef, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type PropsType = {
    children: React.ReactNode
}

export const Task_3 = ({children}: PropsType) => {
    const [value, setValue] = useState<string | undefined>('');
    let inputText=React.createRef<HTMLInputElement>()

    const onChange = () => setValue(inputText.current?.value);
    // const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>

            {/*<InputOut/>*/}
            <input type="text" value={inputText.current?.value}  ref={inputText}/>
            {/*{children}*/}
            <SlowComponent />
        </div>
    );
};
