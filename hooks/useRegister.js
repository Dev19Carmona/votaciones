import { useEffect, useState } from "react";
import * as Yup from "yup";

export const useRegister = () => {
  const candidates = [
    "Juan Carlos Upegui",
    "Albert Yordano Corredor",
    "Juan David Valderrama",
  ];
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState({});
  const [page, setPage] = useState(true)
  const initialValues = {
    identification: "",
    name: "",
    age: "",
  };
  console.log(votes);
  //console.log("users", users);
  const countCandidates = (users) => {
    const countCandidate = {};

    users.forEach((user) => {
      if (candidates.includes(user.eleccion)) {
        if (countCandidate[user.eleccion]) {
          countCandidate[user.eleccion] += 1;
        } else {
          countCandidate[user.eleccion] = 1;
        }
      }
    });
    setVotes(countCandidate)
    //console.log("------", countCandidate);
  };
  useEffect(() => {
    countCandidates(users);
  }, [users]);

  const handleChangePage = () => {
    setPage(!page)
  }

  const validationSchema = Yup.object().shape({
    identification: Yup.string().required("La cedula es requerida"),
    name: Yup.string().required("El nombre es requerido"),
    age: Yup.string().required("La edad es requerida"),
  });
  const handleRegister = (values, { resetForm }) => {
    try {
      //console.log(values);
      const userFound = users.find(
        (user) => user.identification === values.identification
      );
      const age = parseInt(values.age);
      if (age < 18)
        throw new Error("El usuario no puede votar si es menor de edad");
      if (userFound) throw new Error("Ya votaste");
      setUsers([...users, values]);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    initialValues,
    validationSchema,
    handleRegister,
    candidates,
    page,
    handleChangePage,
    votes,
  };
};
