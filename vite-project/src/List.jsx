import React from 'react';
import { Link } from 'react-router-dom';
import './hostellist.css';

const HostelList = () => {
    const boysHostels = [
        { name: 'Boys Hostel 1', key: 'BH-1' },
        { name: 'Boys Hostel 2', key: 'BH-2' },
        { name: 'Boys Hostel 3', key: 'BH-3' },
        { name: 'Boys Hostel 4', key: 'BH-4' },
        { name: 'Boys Hostel 5', key: 'BH-5' },
        { name: 'Boys Hostel 6', key: 'BH-6' },
        { name: 'Boys Hostel 7', key: 'BH-7' },
        { name: 'Boys Hostel 7E', key: 'BH-7e' },
        { name: 'Mega Boys Hostel: Block - A', key: 'MBH-A-Block' },
        { name: 'Mega Boys Hostel: Block - B', key: 'MBH-B-Block' },
        { name: 'Mega Boys Hostel: Block - F', key: 'mega-boys-hostel-f' },
    ];

    const girlsHostels = [
        { name: 'Girls Hostel 1', key: 'girls-hostel-1' },
        { name: 'Girls Hostel 2', key: 'girls-hostel-2' },
        { name: 'Mega Girls Hostel 1', key: 'mega-girls-hostel-1' },
        { name: 'Mega Girls Hostel : Phase 2', key: 'mega-girls-hostel-phase-2' },
    ];

    return (
        <div className="mainDiv">
            <div className="hostel-names">
                <h2>We Have Ten Boys' Hostels</h2>
                <ul className="hostel-list">
                    {boysHostels.map((hostel) => (
                        <li key={hostel.key} className="hostel-item">
                            <Link to={`/${hostel.key}`}>
                                <span className="arrow">➔</span> {hostel.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hostel-names">
                <h2>We Have Four Girls' Hostels</h2>
                <ul className="hostel-list">
                    {girlsHostels.map((hostel) => (
                        <li key={hostel.key} className="hostel-item">
                            <Link to={`/${hostel.key}`}>
                                <span className="arrow">➔</span> {hostel.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HostelList;