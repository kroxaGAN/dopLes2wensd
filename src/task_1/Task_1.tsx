import {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import {Input} from "./Input";

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task 1
// If change value on input Title component not re-render
// If change value on input Task_1 component not re-render

export const Task_1 = () => {
    console.log("Task1")
    const [value, setValue] = useState('');

    const handleChange = useCallback((value:string) => {
        setValue(value);
    },[setValue])

    return (
        <div style={{...CONTAINER_STYLES} as any}>
            <Input />
            {/*<Input value={value} onChange={handleChange} />*/}
            <Title title="I am a title" />
        </div>
    );
}

const Title =memo((props: { title: string }) => <h3>{props.title}</h3>)

// const Input: FC<PropsType> = memo(({value, onChange}) => {
//   console.log("input")
//   return (
//       <input type="text" placeholder="Placeholder" value={value} onChange={onChange} />
//   );
// })
