//headere de html
export const metadata = {
    title: 'Prueba',
    description: 'la pagina de mi tienda',
  }
  
  
  //body de html


  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  }