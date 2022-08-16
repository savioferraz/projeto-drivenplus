import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";
import Input from "../styles/Input";

export default function UserPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("drivenplususer"));

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   getUser(userId)
  //     .then((answer) => {
  //       console.log(answer);
  //       setUser(answer.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //       alert(`Opa, algo deu errado... ${error.message}`);
  //     });
  // }, []);

  return (
    <Wrapper>
      <ion-icon name="arrow-back" onClick={() => navigate(`/home`)}></ion-icon>
      <form>
        <Input
          width="100%"
          background="#EBEBEB"
          placeholder={userData.userData.name}
          disabled
        />
        <Input
          width="100%"
          background="#EBEBEB"
          placeholder={userData.userData.cpf}
          disabled
        />
        <Input
          width="100%"
          background="#EBEBEB"
          placeholder={userData.userData.email}
          disabled
        />
        <Button
          type="submit"
          width="100%"
          onClick={() => navigate(`/users/${userId}/update`)}
        >
          ATUALIZAR
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20vh;
  button {
    margin: 16px auto 24px auto;
  }
  ion-icon {
    position: fixed;
    font-size: 36px;
    top: 3%;
    left: 6%;
    color: #ffffff;
  }
`;
