import {ChangeEvent, FC, memo, useCallback, useState} from "react";

type PropsType={

}


export const Input: FC<PropsType> =memo(({}) => {
    console.log("input")
    const [value, setValue] = useState('');

    const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
    );
})
