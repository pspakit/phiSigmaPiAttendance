import * as React from 'react';

export default function LoginButtons({title, handleAction}) {
    return (
        <button type="button"onClick={handleAction}>{title}</button>
    );
}