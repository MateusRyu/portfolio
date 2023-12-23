import Image from 'next/image'

function getAge(birthday: Date): number {
  const today = new Date();
  const year = today.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();
  const dateDifference = today.getDate() - birthday.getDate();

  let age = year - birthday.getFullYear();

  if (monthDifference < 0 || (monthDifference === 0 && dateDifference < 0)) {
    age--;
  }

  return age;
}

export default function Home() {
  const birthday = new Date('1999-08-02');
  const age = getAge(birthday);

  return (
    <main>
      <section className="hero bg-base-100 py-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className="frame md:w-1/2 bg-base-100 p-4 flex flex-col justify-center"> 
            <h1 className="text-center text-primary">
              Ryu
            </h1>
            <h3 className="text-center text-secondary">
              Desenvolvedor Full-Stack
            </h3>
            <p className="py-6">
              Desenvolvendo tecnologia com equilibrio entre uma boa experiência, 
              boa performance e segurança!
            </p>
            <a href="#contate-me" className="bg-accent text-accent-content text-center">
              Entre em contato
            </a>
          </div>
        </div>
      </section>
      <section className='p-4 bg-base-200'>
        <h3 className="text-primary">
          Quem sou eu?
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <img src="https://placehold.co/150x170?text=Avatar" />
          <div>
            <p>
              Meu nome é Mateus Ryu Yamaguchi, tenho {age} anos e sou um desenvolvedor 
              Full-Stack com graduação como <a className="link link-secondary" target="_blank" rel="noopener noreferrer"  href="https://www.unifesp.br/campus/san7/graduacao/cursos/bacharelado-interdisciplinar-em-ciencia-e-tecnologia-do-mar">
              Bacharel em Interdisciplinar em 
              ciências e Tecnologia do mar</a> (BICT-mar), pela prestigiada <a className="link link-secondary" target="_blank" rel="noopener noreferrer" href="https://www.unifesp.br/">Universidade Federal de São Paulo</a> (UNIFESP) 
              em 2023. Durante a minha graduação que me proporcionou uma base 
              sólida para realizar pesquisa cientifica, acabei descobrindo minha 
              vocação para o desenvolvimento de software. Além de gostar de 
              trabalhar com programação, também gosto de jogar xadrez, assistir 
              animes e tocar violino!
            </p>
            <a href="/contato" className="bg-primary text-primary-content text-center p-1">
              Leia mais sobre mim
            </a>
          </div>
        </div>
      </section>
      <section className='bg-base-300'>
        <h3 className="text-primary">
          Como posso te ajudar?
        </h3>
        <div>
          <p>
            Desenvolvendo páginas pessoais, institucionais, lojas virtuais, 
            blogs, landing pages, banco de dados, API’s, jogos e entre outros 
            softwares! 
          </p>
        </div>
      </section>
    </main>
  )
}
