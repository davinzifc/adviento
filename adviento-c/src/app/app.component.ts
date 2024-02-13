import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor() {
    this.boobstrap(1); // Esto es un ejemplo
  }

  ngOnInit(): void {
    this.boobstrap(2); // Esto es un ejemplo
  }

  // Esta funcion es un ejemplo
  public boobstrap(index: number) {
    console.log('Hello World!' + index);
  }

  public revelio(){
    console.log("funcion revelio");
    
    const textoDecifrado = document.getElementById("textoDecifrado")
    let palabraMagica = (document.getElementById("palabraMagica") as any).value
    const cifrado = 'SMZRGMBZHJ EW UIEHJ HP TO DEBML, LCEHZ PZA GLIÑJW DM QFRQMPZHVR ZR CMOCMYEO G ZR EQIYBIIE IYYKO KIMQTVO. VR ZWEM ZLKVV XQGKIMMZAC P PGIYW RV QVVLDWCPVW, PVQFROVLZÁG RQDKZA ZVEGID, LSJEAÍSD MAFGDSYIBKIN C AWRVVZW BCS EM NMBCWVVV MXIUZRVW. ¡AZSGÁVVXP XOIE ZQMIFTEMXP MB LR QMLRS ZRJPGQRRFGI SIQZE GS OMGTSISNQRF, HJROM QRHV HÍL BS VWKICI IEE IYPDO JSMTCMGR C XEOI VVGCMKW HV PGIGIFÁ DÁW XICKO UI YIDKISVDV EC JVVYEOMFF TJXPVQZEG!.';
    console.log(palabraMagica);
    if (palabraMagica == 'revelio'){
      if (textoDecifrado){
      textoDecifrado.innerHTML = "Has revelado la siguiente frase: "+this.descifrarVigenere(cifrado, palabraMagica);
    }
    
  }
  else{
    console.log("asdkajd " + textoDecifrado);
    if (textoDecifrado){
    textoDecifrado.innerHTML = "intenta de nuevo";
    }
  }
}

  private descifrarVigenere(cifrado: string, clave: string) {
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



}
