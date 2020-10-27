import { useState, useEffect } from 'react';

export const useGuestData = () => {
    const [guestName, setGuestName] = useState('');
    const [guestAge, setGuestAge] = useState('');
    const [guestProffession, setGuestProfession] = useState('');
    const [guestCompany, setGuestCompany] = useState('');
    const [guestPosition, setGuestPosition] = useState('');
    const [guestMartialStatus, setGuestMaritalStatus] = useState('');
    const [guestAddress, setGuestAddress] = useState('');
    const [guestCity, setGuestCity] = useState('');
    const [guestState, setGuestState] = useState('');
    const [guestCp, setGuestCp] = useState('');

    return [
        guestName,
        guestAge,
        guestProffession,
        guestCompany,
        guestPosition,
        guestMartialStatus,
        guestAddress,
        guestCity,
        guestState,
        guestCp,
        setGuestName,
        setGuestAge,
        setGuestProfession,
        setGuestCompany,
        setGuestPosition,
        setGuestMaritalStatus,
        setGuestAddress,
        setGuestCity,
        setGuestState,
        setGuestCp,
    ];
}