# WS - Ariketa: File Upload - Multer

## Sarrera

Fitxategiak zerbitzarira igotzeko `multer` liburutegiaren erabilera fitxategiak kudeatzen ikasteko.

## Build

### Betebeharrak

- *npm*
- *Node.js*

### Nola eraiki

Biltegia klonatu:

```bash
git clone https://github.com/Josu-A/ws-file-upload-multer.git
cd ws-file-upload-multer
```

npm dependenziak instalatu:

```bash
npm install
```

Sare aplikazioa hasieratu defektuzko 3000 portuan:

```bash
npm start
```

### Portu zehatzean hasieratu

Portu zehatz batean hasieratzeko, *x* portu zenbakia izanik:

<details><summary>Linux / MacOS</summary>

```bash
set PORT=x & npm start
```

</details>

<details><summary>Windows Command Prompt</summary>

```cmd
set PORT=x & npm start
```

</details>

<details><summary>Windows PowerShell</summary>

```ps
$env:PORT='x'; npm start
```

</details>

### Debugging moduan hasieratu

<details><summary>Linux / MacOS</summary>

```bash
DEBUG=express-multer:* npm start
```

</details>

<details><summary>Windows Command Prompt</summary>

```cmd
set DEBUG=express-multer:* & npm start
```

</details>

<details><summary>Windows PowerShell</summary>

```ps
$env:DEBUG='express-multer:*'; npm start
```

</details>
