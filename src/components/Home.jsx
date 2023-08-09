import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import { supabase } from "../api";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut(); // Código para cerrar la sesión
    navigate("/");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrdenes();
  }, []);

  if (!user) {
    return (
      <>
        <button onClick={() => navigate("/")}>
          ir a inicio de sesion
        </button>
      </>
    );
  }

  async function getOrdenes() {
    const { data } = await supabase.from("Ordenes").select("*");
    setData(data);
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>; // Puedes mostrar un spinner o mensaje de carga
  }

  // The user is authenticated
  return (
    <div>
      <h1>Welcome, {user && user.email}</h1>
      <button onClick={signOut}>Sign Out</button>

      <ul>
        {data && data.map((data) => <li key={data.id}>{data.clientes}</li>)}
      </ul>
    </div>
  );
};

export default Home;
