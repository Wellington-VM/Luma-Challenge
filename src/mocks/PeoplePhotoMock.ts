export type CollagePhoto = {
  src: string;
  alt: string;
  ratio: string; // proporção da foto (classe completa do Tailwind)
  size?: string; // largura/alinhamento, só quando a foto é mais estreita que a coluna
};

export const collageColumns: CollagePhoto[][] = [
  [
    {
      src: "/ImagemQuadro.png",
      alt: "Student raising her hand in a classroom",
      ratio: "aspect-[90/134]",
      size: "ml-auto w-[75%]",
    },
    { src: "/ImagemQuadro2.png", alt: "Group of students studying together at a table", ratio: "aspect-[120/182]" },
  ],
  [
    { src: "/ImagemQuadro3.png", alt: "Girl in a hooded top reading a book", ratio: "aspect-[90/149]" },
    { src: "/ImagemQuadro4.png", alt: "Two women next to a music stand by a window", ratio: "aspect-[90/150]" },
    { src: "/ImagemQuadro5.png", alt: "Man reading a book at a desk", ratio: "aspect-[90/112]" },
  ],
  [
    { src: "/ImagemQuadro6.png", alt: "Graduate in cap and gown holding a diploma", ratio: "aspect-[90/120]" },
    { src: "/ImagemQuadro7.png", alt: "Woman working on a laptop at a small table", ratio: "aspect-[90/121]" },
    { src: "/ImagemQuadro8.png", alt: "Teacher on a video call on a desktop screen", ratio: "aspect-[90/134]" },
  ],
  [
    { src: "/ImagemQuadro9.png", alt: "Smiling woman in a yellow jacket holding books", ratio: "aspect-[113/179]" },
    {
      src: "/ImagemQuadro10.png",
      alt: "Woman in a hijab holding a phone",
      ratio: "aspect-[90/117]",
      size: "w-[80%]",
    },
  ],
];
