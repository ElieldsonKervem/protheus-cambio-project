export default function signin() {
  return (
        <main className="signin-main flex-colum">
             <div className="header-signin flex-colum signin-header">
                    <div className="logo"></div>
                     <h1 className="display-md">Bem vindo de volta </h1>
                     <h2 className="title-large p-sm t-center">Entre com as credenciais da sua conta</h2>
             </div>

             <form action="/process-data" method="POST">
                 <fieldset className="flex-colum flex-start m-top">
                      
                       <div className="flex-start">
                           <label htmlFor="email-user">Email</label>
                           <input  type="email" id="email-user" name="email-user" autoComplete="email" required/>
                           <small className="hidden">Digite um email valido</small>
                       </div>

                 </fieldset>


                   <fieldset className="">
                      
                       <div className="">
                           <label htmlFor="password">Password</label>
                           <input type="password" id="password-user" name="password" required/>
                           <small className="hidden">Digite uma senha valida</small>
                       </div>

                 </fieldset>

                 <div className="container">
                        <a href="/forgetpassord" className="forget-password"></a>
                        <i></i>
                 </div>

                 <button className="btn-submit-login">Logar</button>
                  

                  <div>
                     <div></div>
                      <p>Ou criar conta</p>
                      <div></div>
                  </div>

                  <button className="create-count">
                    Criar conta
                  </button>
             </form>
        </main>
  );
}