import React, { useState } from 'react';
import LikeBtn from '../LikeBtn';

const AlbumList = () => {
  const [albums] = useState([
    { name: 'Extreme Power Metal', rDate: '2019', img: "https://dragonforce.com/wp-content/uploads/2019/07/df-extreme-power-metal-cd-cover-web-400x400.jpg.webp", alt: "album cover for Extreme Power Metal" },
    { name: 'Re-Powered Within', rDate: '2018', img: "https://dragonforce.com/wp-content/uploads/2019/02/Re-Powered-Within-400x400.jpg.webp", alt: "album cover for Re-Powered Within" },
    { name: 'Reaching Into Infinity', rDate: '2017', img: "https://dragonforce.com/wp-content/uploads/2019/02/Reaching-Into-Infinity-400x400.jpg", alt: "album cover for Reaching Into Infinity" },
    { name: 'Killer Elite', rDate: '2016', img: "https://dragonforce.com/wp-content/uploads/2019/02/Killer-Elite-400x400.jpg.webp", alt: "album cover for Killer Elite" },
    { name: 'In the Line of Fire…Larger than Live', rDate: '2015', img: "https://dragonforce.com/wp-content/uploads/2019/02/In-the-Line-of-Fire-Larger-than-Live-400x400.jpg.webp", alt: "album cover for In the Line of Fire...Larger than Live" },
    { name: 'Maximum Overload', rDate: '2014', img: "https://dragonforce.com/wp-content/uploads/2019/02/Maximum_Overload-400x400.jpg", alt: "album cover for Maximum Overload" }
  ])

  const renderRows = () => {
    return albums.map(p => 
    <tr>
      <td>{p.name}</td>
      <td>{p.rDate}</td>
      <td><img src={p.img} alt={p.alt}/></td>
      <td><LikeBtn /></td>
    </tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Release Date</th>
          <th>Image</th>
          <th>Like</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default AlbumList;
