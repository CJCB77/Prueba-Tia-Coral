# Prueba-Tia-Coral
Prueba Tecnica Token Virtual para Almacenes Tia

<h2>Aplicacion web que genera un Token Virtual temporal cada 60 segundos</h2>
Las tecnologias utilizadas para la app fueron Nodejs,Express,PostgreSQL,React y Tailwind.css

<h4>Autenticacion de usuario</h4>
<p>
La app cuenta con autenticacion de usuario utilizando JWT tokens y cookies  
</p>

![Captura de pantalla 2024-10-27 211004](https://github.com/user-attachments/assets/969d0270-2828-41d6-bc5e-7ee7e24365e3)

<p>Tambien un registro para creacion de usuario</p>


![Captura de pantalla 2024-10-27 211704](https://github.com/user-attachments/assets/4072b10b-8521-43c6-acb7-414c8ecf8eaf)

<p>Dashboard principal con botones para abrir clave temporal o consultar tokends generados y usados</p>

![image](https://github.com/user-attachments/assets/74aa7a8f-38e6-40d8-bd41-6e85aa9517ff)

<h4>Token Virtual</h4>
<p>Al abrir la vista de la clave temporal se mostrara la clave con una barra progresiva demostrando cuanto tiempo queda de los 60 segundos, al llegar a 0 se refrescara y generara otro token</p>

![image](https://github.com/user-attachments/assets/4e669b65-f686-43c9-b347-fcce343dd77c)

![image](https://github.com/user-attachments/assets/e9d91710-3c94-4dbe-b796-eb85bb1ed7e4)

<p>Esta clave se utilizaria para validar transacciones, aqui hay ua simulacion del endpoint de "/usarToken/", donde si la clave genrada aun es valida(no ha expirado) el servidor responde con un mensaje exitoso</p>

![image](https://github.com/user-attachments/assets/1da115af-c9d1-46ab-a40b-2fef1a909153)

<h4>Tabla de uso y generacion de token</h4>
<p>El otro boton del dashboard nos lleva a un listado de todos los tokens generados por el usuario, contiene informacion del token, fecha y tiempo de generacion,expiracion y uso</p>

