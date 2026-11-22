const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skills = [
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Express", icon: "express/express-original.svg", invert: true },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg", invert: true },
];

const projects = [
  {
    title: "Projeto de Arquitetura",
    text: "desenvolvido com React.js. Um projeto de arquitetura residencial,.",
    image: "/projetos/arquitetura.jpg",
    href: "https://projeto-landing-page-sandy.vercel.app/",
  },
  {
    title: "Confeitaria da Júlia",
    text: "Sistema para apresentação e cadastro de bolos e doces.",
    image: "/projetos/confeitaria.jpg",
    href: "https://confeitaria-da-julia-8k3m.vercel.app/",
  },
  {
    title: "Cadastro de Coletas",
    text: "Aplicação Full Stack para cadastrar materiais de construção civil.",
    image: "/projetos/cadastro.jpg",
    href: "https://cadastro-coleta-de-material.vercel.app/",
  },
];

const links = {
  linkedin: "https://www.linkedin.com/in/felipe-maior-a4287599/",
  github: "https://github.com/FelipeeGeise",
  email: "mailto:felipe19852024@hotmail.com",
  cv: "/curriculum.pdf",
};

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#inicio" className="brand">
          <span className="brand-mark">&lt;/&gt;</span> Felipe Thiago
        </a>
        <nav aria-label="Principal">
          <a href="#inicio" className="active">
            Início
          </a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href={links.cv} download className="btn btn-outline btn-sm">
          ⬇ Baixar Currículo
        </a>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-text">
            <span className="badge">
              <i /> Desenvolvedor de Software
            </span>
            <h1>
              Felipe <span>Thiago</span>
            </h1>
            <p className="role">Desenvolvedor Full Stack</p>
            <p className="lead">
              Transformando ideias em soluções digitais através da tecnologia.
            </p>
            <div className="actions">
              <a href="#projetos" className="btn btn-primary">
                🚀 Conheça meus projetos
              </a>
              <a href="#contato" className="btn btn-outline">
                ✉ Entre em contato
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="code-window">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <pre>{`const felipe = {
  cargo: "Full Stack",
  stack: ["React", "Next.js",
          "Node.js", "PostgreSQL"],
  local: "Recife - PE",
};

export function ola() {
  return "Vamos construir algo?";
}`}</pre>
            </div>
          </div>
        </section>

        <section id="sobre" className="section about">
          <div>
            <h2 className="title">Quem sou</h2>
            <p>
              Olá, sou Felipe Thiago, um desenvolvedor apaixonado por transformar
              ideias complexas em soluções digitais elegantes e funcionais.
              Minha jornada é focada em construir aplicações web completas, do
              design da interface à arquitetura do banco de dados. Acredito que
              o bom código vai além da sintaxe; ele precisa ser limpo, escalável
              e, acima de tudo, focado na experiência do usuário. Estou sempre
              em busca de novos desafios e tecnologias que me permitam otimizar
              processos e entregar produtos de alto valor.
            </p>
            <ul className="facts">
              <li>
                <span>📍</span> Recife - PE
              </li>
              <li>
                <span>💙</span> Apaixonado por tecnologia
              </li>
            </ul>
          </div>
          <div className="about-art" aria-hidden="true">
            &lt;/&gt;
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2 className="title">Minhas habilidades</h2>
          <p className="sub">
            Conhecimentos e ferramentas que venho desenvolvendo:
          </p>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${DEVICON}/${s.icon}`}
                  alt=""
                  width="40"
                  height="40"
                  className={s.invert ? "invert" : ""}
                />
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projetos" className="section">
          <h2 className="title">Projetos desenvolvidos</h2>
          <p className="sub">
            Alguns dos projetos que desenvolvi para praticar e aplicar meus
            conhecimentos:
          </p>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    ↗ Ver projeto
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact">
          <div>
            <h2 className="title">Vamos conversar?</h2>
            <p className="sub">
              Estou aberto a novas oportunidades e desafios na área de
              tecnologia.
            </p>
            <div className="chips">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                in LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={links.email}>✉ E-mail</a>
            </div>
          </div>
          <a href={links.cv} download className="btn btn-primary btn-lg">
            ⬇ Baixar Currículo em PDF
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>Felipe Thiago • Desenvolvedor de Software</span>
        <span>❤ Obrigado por visitar meu portfólio!</span>
        <a href="#inicio" className="top" aria-label="Voltar ao topo">
          ⌃
        </a>
      </footer>
    </>
  );
}
