import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CatcoLogo from "../assets/CatcoLogo.png";
import {BtnConfirm, ButtonContainer, Card, CheckboxContainer, FormGroup, BackGround, Header, Logo, TxtBox} from "../components/Styles";

function Login (){

    const handleExternalRedirect = () => {
        window.location.href = "/Home";
    };
    

    return(

        <BackGround>
            <Card>
                <Header>
                    <Logo src={CatcoLogo}/>
                    <label style={{ textSizeAdjust: "5px" }}>Inicio de Sesión</label>
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

                    <CheckboxContainer>
                        <input
                        type="checkbox"
                        name="RememberMe"
                        //checked={rememberMe}
                        //onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Recordarme
                    </CheckboxContainer>

                    <ButtonContainer>
                        <BtnConfirm type="submit" onClick={handleExternalRedirect}>Ingresar</BtnConfirm>
                    </ButtonContainer>


                    <footer style={{ display: "flex", justifyContent: "center", marginTop: "30px"}}>
                    No tienes una cuenta?
                    <Link to="/Register" style={{ color: "#FF9900" }}> Registrate!</Link>
                    </footer>

                </form>
            </Card>

        </BackGround>
        
    );
}


export default Login;