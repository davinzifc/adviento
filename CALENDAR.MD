# Calendario de Adviento Mágico - Pruebas Diarias

¡Bienvenidos al Calendario de Adviento Mágico!

Aquí, en este README, podrás encontrar las pruebas diarias del Calendario de Adviento Mágico. Cada día, presentaremos una nueva prueba relacionada con JavaScript, TypeScript, HTML o CSS. Estas pruebas van desde lo sencillo hasta lo más complejo, pero todas están diseñadas para desafiar y mejorar tus habilidades de programación, mientras exploramos temas mágicos.

---

## Día 1: [Fecha]

### La carta de Hogwarts perdida

Historia: Hoy es un día emocionante. Recibes una misteriosa carta que te invita a asistir a Hogwarts, la famosa escuela de magia y hechicería. Pero hay un problema: la dirección solo es posible que la vea un mago. ¿Qué hacer?

- **Tema:** Extraccion de datos del DOM
- **Tipo de Prueba:** cliente
- **Descripción:** Reto del día: Tu misión es crear una página web simple utilizando HTML y JavaScript que simule la búsqueda de la dirección de Hogwarts. La página debe contener un campo de entrada donde puedas ingresar la dirección que crees que es la correcta y un botón para verificar si es la correcta.
- **Instrucciones:**

1. Crea un archivo HTML básico con un campo de entrada para la palabra mágica y un botón para descifrar.
2. Utiliza JavaScript para verificar si la palabra ingresada es la correcta.
3. Si la palabra ingresada es "revelio", decodifica el mensaje cifrado en base64 y muestra su contenido.
4. Si la palabra ingresada no es correcta, muestra un mensaje de error.

- **Solución:** [pendiente]
- **Materiales** - **Palabra**: `revelio` - **Texto**:
  `text 
    SMZRGMBZHJ EW UIEHJ HP TO DEBML, LCEHZ PZA GLIÑJW DM QFRQMPZHVR ZR CMOCMYEO G ZR EQIYBIIE IYYKO KIMQTVO. VR ZWEM ZLKVV XQGKIMMZAC P PGIYW RV QVVLDWCPVW, PVQFROVLZÁG RQDKZA ZVEGID, LSJEAÍSD MAFGDSYIBKIN C AWRVVZW BCS EM NMBCWVVV MXIUZRVW. ¡AZSGÁVVXP XOIE ZQMIFTEMXP MB LR QMLRS ZRJPGQRRFGI SIQZE GS OMGTSISNQRF, HJROM QRHV HÍL BS VWKICI IEE IYPDO JSMTCMGR C XEOI VVGCMKW HV PGIGIFÁ DÁW XICKO UI YIDKISVDV EC JVVYEOMFF TJXPVQZEG!.
    `

      - **poder**: Ya tienes el poder solo falta la palabra magica.
      ``` typescript
      descifrarVigenere(cifrado: string, clave: string) {
      clave = clave.toUpperCase().replace(/[^A-Z]/g, '');
      let claveIndex = 0;
      return Array.from(cifrado).map(char => {
          char = char.toUpperCase();
          if (/[A-Z]/.test(char)) {
              const shift = clave.charCodeAt(claveIndex) - 65;
              const charCode = ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65;
              claveIndex = (claveIndex + 1) % clave.length;
              return String.fromCharCode(charCode);
          } else {
              return char;
          }
      }).join('');

  }
  ```

Tienes todo lo que necesitas para poder leer la carta.

No dudes en buscar informacion si no sabes hacer algo pero recuerda esto es para que practiques intenta no usar IA ni buscar soluciones completas, solo temas concretos.

---
