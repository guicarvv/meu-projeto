import React, { useState } from 'react';
import './App.css';
import foto from "../src/assets/imagens/back.png"
import logo from "../src/assets/imagens/logo.png"
import bannerlogo from "../src/assets/imagens/bannerlogo"
import question from "../src/assets/imagens/question.png"
import key from "../src/assets/imagens/key.png"





function App() {
  const [section, setSection] = useState('uname');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUname, setErrorUname] = useState('');
  const [errorPwd, setErrorPwd] = useState('');

  const handleNext = () => {
    if (username === '') {
      setErrorUname('Por favor, insira um nome de usuário.');
    } else {
      setSection('pwd');
    }
  };

  const handleSignIn = () => {
    if (password === '') {
      setErrorPwd('Por favor, insira uma senha.');
    } else {
      setSection('final');
    }
  };

  return (
    <div>
      {section === 'uname' && (
        <section id="section_uname">
          <div className="auth-wrapper">
            <img src={bannerlogo} alt="Microsoft" />
            <h2 className="title mb-16 mt-16">Entrar</h2>
            <form>
              <div className="mb-16">
                <p id="error_uname" className="error">{errorUname}</p>
                <input
                  id="inp_uname"
                  type="text"
                  name="uname"
                  className="input"
                  placeholder="Email, phone, or Skype"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </form>
            <div>
              <p className="mb-16 fs-13">
                Não consegue acessar sua conta? <a href="" className="link">Crie uma!</a>
              </p>
              <p className="mb-16 fs-13">
                <a href="#" className="link">Precisa de ajuda
                  <img src={question} alt="Question img" />
                </a>
              </p>
            </div>
            <div>
              <button className="btn" id="btn_next" onClick={handleNext}>Avançar</button>
            </div>
          </div>
          <div className="opts">
            <p className="has-icon mb-0" style={{ fontSize: '15px' }}>
              <span className="icon">
                <img src={key} width="30px" />
              </span>
              Opções de entrada
            </p>
          </div>
        </section>
      )}

      {section === 'pwd' && (
        <section id="section_pwd">
          <div className="auth-wrapper">
            <img src={logo} alt="Microsoft" className="d-block" />
            <div className="identity w-100 mt-16 mb-16">
              <button className="back" onClick={() => setSection('uname')}>
              <img src={foto} width="30px" />
            
              </button>
              <span id="user_identity">{username}</span>
            </div>
            <h2 className="title mb-16">Insira a senha</h2>
            <form>
              <div className="mb-16">
                <p id="error_pwd" className="error">{errorPwd}</p>
                <input
                  id="inp_pwd"
                  type="password"
                  name="pass"
                  className="input"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div>
              <p className="mb-16">
                <a href="#" className="link fs-13">Esqueceu a senha?</a>
              </p>
            </div>
            <div>
              <button className="btn" id="btn_sig" onClick={handleSignIn}>Entrar</button>
            </div>
          </div>
        </section>
      )}

      {section === 'final' && (
        <section id="section_final">
          <div className="auth-wrapper">
            <img src={logo} alt="Microsoft" className="d-block" />
            <div className="identity w-100 mt-16 mb-16">
              <span id="user_identity">{username}</span>
            </div>
            <h2 className="title mb-16">Continuar conectado?</h2>
            <p className="p">Faça isso para reduzir o número de vezes que será solicitado a entrar.</p>
            <label className="has-checkbox">
              <input type="checkbox" className="checkbox" />
              <span>Não mostrar isso novamente</span>
            </label>
            <div className="btn-group">
              <button className="btn btn-sec" id="btn_final">Não</button>
              <button className="btn" id="btn_final">Sim</button>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <a href="#">Termos de uso</a>
        <a href="#">Privacidade e cookies</a>
        <span>.&nbsp;.&nbsp;.</span>
      </footer>
    </div>
  );
}

export default App;
