import Link from "next/link";

export default function NotFound() {
  const linkStyle =
    "underline text-red-300 text-xl decoration-1 hover:decoration-2";
  return (
    <main className="mx-auto h-[85vh] flex flex-col justify-center">
      <h1 className="mx-auto">Erro 404: Arquivo não encontrado! :(</h1>
      <p>
        Não sei o que estava procurando, mas ele parece não existir. Em caso de
        dúvida, entre em contato com via e-mail para
        <address className="underline">suporte.ryu@gmail.com</address>
      </p>
      <hr className="my-2" />
      <div className="flex gap-2 mx-auto">
        <Link href="/" className={linkStyle}>
          Página inicial
        </Link>
        <a
          href="mailto:suporte.ryu@gmail.com?subject=Página não encotrada no Portfolio"
          className={linkStyle}
        >
          Enviar e-mail
        </a>
      </div>
    </main>
  );
}
