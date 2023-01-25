import React from 'react';
import s from './style.module.css';

export default function User({id,  firstname, lastname, email, name}) {
  return (
    <div className={s.card}>
    <p>{firstname}</p>
    <p>{lastname}</p>
    <p>{name}</p>
    <a href={email}>{email}</a>
    </div>
  )
}
