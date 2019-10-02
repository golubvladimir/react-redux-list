import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return (
        <ul>
            <li>
                <Link to={'/'}>Список</Link>
            </li>
            <li>
                <Link to={'/form-add'}>Форма добавления</Link>
            </li>
        </ul>
    )
}