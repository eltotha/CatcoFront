import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CatcoLogo from "../assets/CatcoLogo.png";
import {BtnConfirm, ButtonContainer, Card, CheckboxContainer, FormGroup, BackGround, Header, Logo, TxtBox} from "../components/Styles";

function Register (){

    const handleExternalRedirect = () => {
    window.location.href = "/";
    };
    

    return(

       <BackGround>
            <Card>
                <Header>
                    <Logo src={CatcoLogo}/>
                    <label style={{ textSizeAdjust: "5px" }}>Registro de Cuenta</label>
                </Header>

                <form>
                    <FormGroup>
                        <TxtBox
                            type="text"
                            name="Username"
                            placeholder="Usuario"
                            //Value={Username}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <TxtBox
                            type="password"
                            name="Password"
                            placeholder="Contraseña"
                            //value={password}
                            //onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <TxtBox
                            type="password"
                            name="ConfirmPassword"
                            placeholder="Confirmar Contraseña"
                            //value={confirmPassword}
                            //onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <ButtonContainer>
                        <BtnConfirm type="submit" onClick={handleExternalRedirect}>Registrarse</BtnConfirm>
                    </ButtonContainer>


                    <footer style={{ display: "flex", justifyContent: "center", marginTop: "30px"}}>
                    Ya tienes cuenta?
                    <Link to="/" style={{ color: "#FF9900" }}> Inicia Sesión!</Link>
                    </footer>

                </form>
            </Card>

        </BackGround>

    );
}


export default Register;