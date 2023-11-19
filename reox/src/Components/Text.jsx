import {useId} from 'react';

export default function Text() {
    const postTextAreaId = useId();

    return (
        <>
            <textarea 
                id={postTextAreaId}
                rows={95}
                cols={150}
                />
        </>
    )
}