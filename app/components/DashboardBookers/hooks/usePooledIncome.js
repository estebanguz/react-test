import React, { useState } from 'react';

export const usePooledIncoming = () => {
    const [aprox, setAprox] = useState('');
    const [realQty, setRealQty] = useState('');

    return [aprox, realQty, setAprox, setRealQty];
}