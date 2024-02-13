import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  textoEncriptado: string =
    'SMZRGMBZHJ EW UIEHJ HP TO DEBML, LCEHZ PZA GLIÑJW DM QFRQMPZHVR ZR CMOCMYEO G ZR EQIYBIIE IYYKO KIMQTVO. VR ZWEM ZLKVV XQGKIMMZAC P PGIYW RV QVVLDWCPVW, PVQFROVLZÁG RQDKZA ZVEGID, LSJEAÍSD MAFGDSYIBKIN C AWRVVZW BCS EM NMBCWVVV MXIUZRVW. ¡AZSGÁVVXP XOIE ZQMIFTEMXP MB LR QMLRS ZRJPGQRRFGI SIQZE GS OMGTSISNQRF, HJROM QRHV HÍL BS VWKICI IEE IYPDO JSMTCMGR C XEOI VVGCMKW HV PGIGIFÁ DÁW XICKO UI YIDKISVDV EC JVVYEOMFF TJXPVQZEG!.';

  /**
   * Variables para el metodo usando funciones de angular
   */
  textoDesencriptado: string = '';
  conjuro: string = '';

  constructor() {}

  /**
   * Metodo usando funciones de javascript
   */
  getConjuro() {
    const input: any = document.getElementById('conjuro');
    let conjuro: string | null = null;
    if (input) {
      conjuro = input.value || null;
    }

    if (conjuro === 'revelio') {
      alert('El conjuro es correcto');
      const texto = this.descifrarVigenere(this.textoEncriptado, conjuro);
      document.getElementById('uncript')!.innerHTML = texto;
    } else {
      alert('El conjuro es incorrecto');
    }
  }

  /**
   * Metodo usando funciones de angular
   */
  getConjuroAngular() {
    if (this.conjuro === 'revelio') {
      alert('El conjuro es correcto');
      this.textoDesencriptado = this.descifrarVigenere(
        this.textoEncriptado,
        this.conjuro
      );
    } else {
      alert('El conjuro es incorrecto');
    }
  }

  /**
   *
   * @param cifrado
   * @param clave
   * Metodo para descifrar el mensaje
   */
  descifrarVigenere(cifrado: string, clave: string) {
    clave = clave.toUpperCase().replace(/[^A-Z]/g, '');
    let claveIndex = 0;
    return Array.from(cifrado)
      .map((char) => {
        char = char.toUpperCase();
        if (/[A-Z]/.test(char)) {
          const shift = clave.charCodeAt(claveIndex) - 65;
          const charCode = ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65;
          claveIndex = (claveIndex + 1) % clave.length;
          return String.fromCharCode(charCode);
        } else {
          return char;
        }
      })
      .join('');
  }

  ngOnInit(): void {}
}
