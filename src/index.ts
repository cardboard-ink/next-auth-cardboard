import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers";
import { CardBoardProfile } from "./types";

export default function CardBoard<P extends CardBoardProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "cardboard",
    name: "CardBoard",
    type: "oauth",
    authorization: {
      url: "https://cardboard.ink/auth",
    },
    token: "https://cardboard.ink/api/v1/token",
    userinfo: "https://cardboard.ink/api/v1/users/@me",
    profile(data: CardBoardProfile) {
      return {
        id: data.id,
        name: data.name,
        avatar: data.avatar,
        banner: data.banner,
      };
    },
    options,
  };
}
