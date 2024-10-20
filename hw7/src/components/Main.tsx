import { useLang } from "../localization";

export default function Main() {
  const { language, t } = useLang();

  return (
    <main>
      <p>{t(language, "description")}</p>
    </main>
  );
}
