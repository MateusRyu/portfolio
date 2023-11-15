export default function MainFooter() {
  const currentYear = new Date().getFullYear();
  const heart = <span className="text-rose-500">&hearts;</span>;
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          {currentYear} - Desenvolvido por Mateus Ryu Yamaguchi com {heart}!
        </p>
      </aside>
    </footer>
  )
}
