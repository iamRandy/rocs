import {useId} from 'react';

export default function Text() {
    const postTextAreaId = useId();

    return (
        <>
            <textarea 
                rows={95}
                cols={100}
                />
        </>
    )
}