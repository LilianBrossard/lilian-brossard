import { NextResponse, type NextRequest } from "next/server";

// Les fichiers Anvil.md, Sudoku.md et Zephire.md ont été renommés en minuscules.
// On redirige les anciennes URL (déjà partagées ou indexées) vers les nouvelles.
// La comparaison est faite ici car les redirections de next.config ignorent la casse.
const OLD_SLUG = /^\/projet\/(Anvil|Sudoku|Zephire)\/?$/;

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(OLD_SLUG);
  if (!match) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/projet/${match[1].toLowerCase()}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/projet/:slug",
};
