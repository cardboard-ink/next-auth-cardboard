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
    token: "https://cardboard.ink/api/v2/token",
    userinfo: "https://cardboard.ink/api/v2/users/@me",
    profile(data: CardBoardProfile) {
      return {
        id: data.id,
        name: data.name,
        avatar: data.avatar,
        banner: data.banner,
        subdomain: data.subdomain,
        aliases: data.aliases,
        userStatus: data.userStatus,
        moderationStatus: data.moderationStatus,
        aboutInfo: data.aboutInfo,
        userTransientStatus: data.userTransientStatus,
      };
    },
    options,
  };
}
