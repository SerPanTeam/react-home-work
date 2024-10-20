import { useLang } from "../localization";

export default function Header() {
  const { language, t } = useLang();
  return (
    <h1>{t(language, "title")}</h1>
  );
}
