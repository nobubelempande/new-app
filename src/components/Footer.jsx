export default function Footer(){
    const currentYear= new Date().getFullYear();

    return <footer className="footer">
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
}