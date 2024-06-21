import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

function App() {
  const handleClickRegister = (values) => HTMLFormControlsCollection.log(values);
  const handleClickLogin = (values) => console.log(values);
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não esqueça do seu email").required("campo obrigatorio"),
    password: yup.string().min(8, "A senha precisa ter 8 caracteres").required("este campo é obrigatorio"),
  });
  const validationRegister = yup.object().shape({
    email: yup.string().email("Não esqueça do seu email").required("campo obrigatorio"),
    password: yup.string().min(8, "A senha precisa ter 8 caracteres").required("este campo é obrigatorio"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null], "As senhas não são iguais")
  });
  return (
    <div>
    <nav>
        <a href="/contatos.html" target="_blank" class="botao-1">CONTATOS</a>
        <a href="/galeria.html" target="_blank" class="botao-2">GALERIA</a>
        <a href="/sobrenos.html" target="_blank" class="botao-3">A ESCOLA</a>
        <a href="cursos.html" target="_blank" class="botao-4">CURSOS</a>
    </nav>
    
  
    <div className="container">
      <h1>SEU LOGIN</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin}
      validationSchema={validationLogin}>

        <Form class-name="Login-form">

<div className="login-form-group">
<Field name="email" className="form-field"
placeHolder="Email"/>

<ErrorMessage
component="spam"
name="email"
className="form-error"
/>


         </div>
         <div className="login-form-group">
<Field name="password" className="form-field"
placeHolder="Senha"/>

<ErrorMessage
component="spam"
name="password"
className="form-error"
/>
         </div>
         <button className='button' type="submit">LOGIN</button>
        </Form>
      </Formik>

    </div><br></br><br></br><br></br><br></br>
    <div className="container">
      <h1>CRIE SEU CADASTRO</h1>
      <Formik initialValues={{}} onSubmit={handleClickRegister}
      validationSchema={validationRegister}>

        <Form class-name="Login-form">

<div className="login-form-group">
<Field name="email" className="form-field"
placeHolder="Email"/>

<ErrorMessage
component="spam"
name="email"
className="form-error"
/>


         </div>
         <div className="login-form-group">
<Field name="password" className="form-field"
placeHolder="Senha"/>

<ErrorMessage
component="spam"
name="password"
className="form-error"
/>
         </div>
         
         <div className="login-form-group">
<Field name="confirmPassword" className="form-field"
placeHolder="confirma Senha"/>

<ErrorMessage
component="spam"
name="password"
className="form-error"
/>
         </div>
         <button className='button' type="submit">CADASTRE-SE</button>
        </Form>
      </Formik>
    </div>
    </div>
    
    
  );
}

export default App;
