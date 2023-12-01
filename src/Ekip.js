import React from "react";

function Ekip(props) {
  const { team } = props;
  return (
    <div className="container-ekip">
      <h2>Ekip Üyeleri</h2>
      {team.map((member, index) => (
        <ul className="teamContent">
          <li key="ad">Üye adı: {member.ad}</li>
          <li key="soyad">Üye soyadı: {member.soyad}</li>
          <li key="email">Üye e-maili: {member.email}</li>
          <li key="rol">Üye rolü: {member.rol}</li>
        </ul>
      ))}
    </div>
  );
}

export default Ekip;