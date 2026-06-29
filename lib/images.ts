/**
 * Fotos reales del Algarve (Unsplash).
 */
export const images = {
  hero: "https://images.unsplash.com/photo-1605498039119-9fa8619353d5?q=80&w=2400&auto=format&fit=crop",
  praiaDaMarinha:
    "https://images.unsplash.com/photo-1605498039119-9fa8619353d5?q=80&w=1600&auto=format&fit=crop",
  praiaDoCarvalho:
    "https://images.unsplash.com/photo-1555881400-74d7faa85ba7?q=80&w=1600&auto=format&fit=crop",
  praiaDaFalesia:
    "https://images.unsplash.com/photo-1580734975562-b941aa8e5b31?q=80&w=1600&auto=format&fit=crop",
  saoRafael:
    "https://images.unsplash.com/photo-1569850010900-4ead725577e0?q=80&w=1600&auto=format&fit=crop",
  oldTownAlbufeira:
    "https://images.unsplash.com/photo-1585208795374-37b564064a79?q=80&w=1600&auto=format&fit=crop",
  ferragudo:
    "https://images.unsplash.com/photo-1592155931582-52266041b786?q=80&w=1600&auto=format&fit=crop",
  silves:
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1600&auto=format&fit=crop",
  portimao:
    "https://images.unsplash.com/photo-1569683096638-866a97601f9f?q=80&w=1600&auto=format&fit=crop",
  faro: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1600&auto=format&fit=crop",
  carvoeiro:
    "https://images.unsplash.com/photo-1555881400-74d7faa85ba7?q=80&w=1600&auto=format&fit=crop",
  albufeira:
    "https://images.unsplash.com/photo-1585208795374-37b564064a79?q=80&w=1600&auto=format&fit=crop",
} as const;

export type ImageKey = keyof typeof images;
