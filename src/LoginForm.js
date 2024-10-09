import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const unReq = "Insira um endereço de email, número de telefone ou nome Skype válido.";
  const pwdReq = "Digite a senha da sua conta Microsoft.";

  const [view, setView] = useState('uname');
  const [unameVal, setUnameVal] = useState('');
  const [pwdVal, setPwdVal] = useState('');
  const [unameError, setUnameError] = useState('');
  const [pwdError, setPwdError] = useState('');

  const [unameValid, setUnameValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

  const validate = () => {
    if (view === 'uname') {
      if (unameVal.trim() === '') {
        setUnameError(unReq);
        setUnameValid(false);
      } else {
        setUnameError('');
        setUnameValid(true);
      }
    } else if (view === 'pwd') {
      if (pwdVal.trim() === '') {
        setPwdError(pwdReq);
        setPwdValid(false);
      } else {
        setPwdError('');
        setPwdValid(true);
      }
    }
  };

  useEffect(() => {
    validate();
  }, [unameVal, pwdVal]);

  const handleNext = () => {
    validate();
    if (unameValid) {
      setView('pwd');
    }
  };

  const handleSignIn = () => {
    validate();
    if (pwdValid) {
      setView('final');
    }
  };

  const handleBack = () => {
    setView('uname');
  };

  return (
    <div>
      {view === 'uname' && (
        <div id="section_uname">
          <input
            id="inp_uname"
            className={unameError ? 'error-inp' : ''}
            type="text"
            value={unameVal}
            onChange={(e) => setUnameVal(e.target.value)}
            placeholder="Insira seu nome de usuário"
          />
          <div id="error_uname" className="error">{unameError}</div>
          <button id="btn_next" onClick={handleNext}>
            Próximo
          </button>
        </div>
      )}

      {view === 'pwd' && (
        <div id="section_pwd">
          <input
            id="inp_pwd"
            className={pwdError ? 'error-inp' : ''}
            type="password"
            value={pwdVal}
            onChange={(e) => setPwdVal(e.target.value)}
            placeholder="Digite sua senha"
          />
          <div id="error_pwd" className="error">{pwdError}</div>
          <button id="btn_sig" onClick={handleSignIn}>
            Entrar
          </button>
          <button className="back" onClick={handleBack}>
            Voltar
          </button>
        </div>
      )}

      {view === 'final' && (
        <div id="section_final">
          <p>Bem-vindo, {unameVal}!</p>
          <button id="btn_final" onClick={() => window.close()}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
