import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="text-white bg-black h-screen">
      {/* <Navbar /> */}
      <div className="w-3/4 m-auto pt-20 text-center">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUmhP////8Aev/p9P8egf/5/f9goP/s9v/F2P9hpP8Gff8XgP9ElP+PuP+x0P/K4f+FtP/a6f+nyP+rzP9vp/85jv/g7v+Tvf8mhv+71v/S5P9Znv8uif/F3P9Pmf/0+P+cw/96hTX9AAACjElEQVR4nO3da0/bMBSA4Th12s1umzsUCmP//1cOiiZNwnYk1uPTuO/z/Uh+lfQSSOOqAgAAAAAAAAAAAAAAAACgANY7V+finLeZ+7zbH45tv8mjb4+HvfM5+6qub0xeTd9V2Rr91GfO+9RPmRLdoNL3YXBZAlu1QGPaDImqgTkSvd4p+mkQfi36STnQGOm3G5130X/1on2+0+5710keRKd/CN8PouCbjd3n/iYT0uzlvqP6g3bdxUHuNHVH7biLo9xpqvxp/5fgp379oB130ddyhRvtuIsNhRRSqI5CCimMa8KuPqNU2IzTNuIxNrZ5jI1MYyJSp3A3OxvjTk/BmadTYmbe3VZhM6euaKx9Dsw829R1np+jR1GlcEx/3bfnwMw5fSHrxpsqnBYuu+3XA9IsjUT/rKdR2GyXlvv1VbVbGtnGTlMK/wOFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBhZfWGz8JuC9d+LsfQTrTp8I9WaCvuX5D1R55u6J+pbheZ1dj5yW5v3v95igSsqNG/j9DOsi56i6yr8JgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKZQrXHxK3OmKgTqFC49ucr9XX2iGOnGeuui/c1dUaIbZujD/0l3zVaj3bJNd+yPs9drPQOP5NBRSqI9CCinURyGFFOqjkEIK9UkW3sLGAcY8yBWW/0z28p+rX/7eCOXvb1H+HiV3sM9M+XsF3cN+T8Xv2aX+qV/81nI5Au9g/8M72MPyDvYhrcrfS/ZD6fsBAwAAAAAAAAAAAAAAAAAg4g/cAln6U+DzaQAAAABJRU5ErkJggg=="
          alt="Trello Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold mt-8">Trello? Trel...no</h1>
        <p className="text-lg mt-4">
          Trellno es una aplicación de gestión de proyectos basada en tableros,
          que te permite organizar tus tareas de forma visual y colaborativa.
          Con Trello, puedes crear tableros para proyectos, añadir listas de
          tareas y tarjetas.
        </p>
        <p className="text-lg mt-4">
          Trellno sirve para organizar y gestionar proyectos de todo tipo. Su
          interfaz intuitiva y sus potentes características lo convierten en una
          herramienta indispensable para la gestión de proyectos.
        </p>
      </div>
    </main>
  );
}
