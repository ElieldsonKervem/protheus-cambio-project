import styles from './page.module.scss';

export default function Signin() {
  return (
        <main className="signin-main flex-colum mainContainer">
             <div className="header-signin flex-colum signin-header">
                    <div className="logo"></div>
                     <h1 className="display-md">Bem vindo de volta </h1>
                     <h2 className="title-large p-sm t-center">Entre com as credenciais da sua conta</h2>
             </div>

             <form action="/process-data" method="POST" className={`w-full flex-colum glass-card ${styles.form} m-top`}>
                 <div className= " flex-start w-full ">
                       <fieldset className="flex-colum flex-start m-top w-full">
                      
                       <div className={`flex-start ${styles.inputField}`}>
                           <label htmlFor="email-user">Email</label>
                           <input  type="email" className="mainInput " id="email-user" name="email-user" autoComplete="email" required/>
                           <small className="hidden">Digite um email valido</small>
                       </div>

                 </fieldset>


                   <fieldset className="flex-colum flex-start"> 
                      
                       <div className={`flex-start ${styles.inputField}`}>
                           <label htmlFor="password">Password</label>
                           <input type="password" id="password-user" name="password"  className="mainInput" required/>
                           <small className="hidden">Digite uma senha valida</small>
                       </div>

                 </fieldset>
                 </div>

                 <div className="container flex-center w-full ">
                        <a href="/forgetpassord" className="forgetPassword  p-left">Esqueceu a senha ?</a>
                        <i className='p-left'></i>
                 </div>

                 <button className="btn-submit-login m-top m-center">Logar</button>
                  

                  <div>
                     <div></div>
                      <p>Ou criar conta</p>
                      <div></div>
                  </div>

                  <button className={`${styles.createCount}`}>
                    Criar conta
                  </button>
             </form>
        </main>
  );
}