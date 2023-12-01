import { useState } from "react";
import Ekip from "./Ekip.js";
function Form() {
  const [member, setMember] = useState({
    ad: "",
    soyad: "",
    email: "",
    rol: "",
  });
  const [team, setTeam] = useState([]);

  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTeam([...team, member]);
    resetForm();
  }

  function resetForm() {
    setMember({
      ad: "",
      soyad: "",
      email: "",
      rol: "",
    });
  }

  console.log(
    "adı:",
    member.ad,
    "soyadı:",
    member.soyad,
    "email:",
    member.email,
    "rol:",
    member.rol
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="ad">Adı : </label>
        <input
          type="text"
          id="ad"
          name="ad"
          value={member.ad}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="soyad">Soyadı : </label>
        <input
          type="text"
          id="soyad"
          name="soyad"
          value={member.soyad}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="email">E-mail : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={member.email}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="rol">Rolünüzü seçiniz : </label>
        <select name="rol" id="rol" value={member.rol} onChange={handleChange}>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Full Stack Web Developer">
            Full Stack Web Developer
          </option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Game Developer">Game Developer</option>
        </select>
        <br />
        <br />
        <button type="submit">Gönder</button>
        <button type="button" onClick={resetForm}>
          Formu sıfırla
        </button>
      </form>
      <Ekip team={team} />
    </div>
  );
}

export default Form;
