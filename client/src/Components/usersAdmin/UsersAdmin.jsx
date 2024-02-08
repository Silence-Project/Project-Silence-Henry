import { useEffect, useState } from "react";
import IMGCLOSE from "../../img/icons/x-mark.png";
import styles from "./UsersAdmin.module.css";

const UsersAdmin = ({ handleCloseCreateProduct }) => {
  const [usuarios, setUsuarios] = useState([]);

  const toggleEstadoUsuario = (id, isActive) => {
    const newEstado = isActive ? false : true;

    fetch(`http://localhost:3001/usuarios/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive: newEstado }),
    })
      .then((response) => {
        if (response.ok) {
          setUsuarios((prevUsuarios) => {
            return prevUsuarios.map((usuario) => {
              if (usuario.id === id) {
                return { ...usuario, isActive: newEstado };
              }
              return usuario;
            });
          });
        } else {
          throw new Error("Error al cambiar el estado del usuario");
        }
      })
      .catch((error) => {
        console.error("Error al cambiar el estado del usuario:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/usuarios/")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => {
        console.error("Se produjo un error al recuperar los usuarios:", error);
      });
  }, []);

  const handleCancel = () => {
    handleCloseCreateProduct();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.btnCloseContainer}>
        <h2>Usuarios Silence:</h2>
        <img
          src={IMGCLOSE}
          alt="Close"
          className={styles.btnClose}
          onClick={handleCancel}
          style={{
            marginLeft: "99%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        />
      </div>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index} className={styles.user}>
            <div className={styles.userName}>
              <p>Nombres: {usuario.fullName}</p>
            </div>{" "}
            <br />
            <div className={styles.userState}>
              <p>
                Estado: {usuario.isActive ? "Activo" : "Inactivo"}
                <button
                  onClick={() =>
                    toggleEstadoUsuario(usuario.id, usuario.isActive)
                  }
                >
                  {usuario.isActive ? "Desactivar" : "Activar"}
                </button>{" "}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersAdmin;
