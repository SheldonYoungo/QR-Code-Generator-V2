<h1 align="center">🔄QR Code Generator V2🔄</h1>
The QR Code Generator is a user-friendly React app that simplifies generating QR codes. By utilizing the useQrCode state management hook, it provides real-time URL validation, server-side QR code generation, and tracks of previous URL usage. Its straightforward UI and user-friendly features make it a go-to tool for generating QR codes

## 🌐Dependencies:

### 🗃 Server:
- express: ^4.18.2
- cors: ^2.8.5
- dotenv: ^16.3.1
- qr-image: ^3.2.0
- nodemon: ^3.0.1
- react-progressive-graceful-image: ^0.7.0

### 💻 Client:
- file-saver: ^2.0.5
- react: ^18.2.0
- react-dom: ^18.2.0
- standard: ^17.1.0
- validator: ^13.11.0

## 💨Initialization:
1.- Open the terminal, go to the server and install its dependencies, do the same thing with the client.

2.- Start the server:
 - Running server in dev mode:
    ```
     npm run dev
    ```
- Running server in production mode:
    ```
     npm run server
    ```
3.- Then run the client:
 - Running client in dev mode:
    ```
     npm run dev
    ```
- Running client in production mode:
    ```
     npm run build
     npm run preview
    ```

### ❗❗ Important Note: 
It is necessary to have both the server and the client running for the application to work.
