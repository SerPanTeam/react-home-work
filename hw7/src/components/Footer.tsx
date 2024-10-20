import { useLang} from "../localization";
export default function Footer() {
  const { language, t  } = useLang();
  return (
    <footer>
      <p>{t(language, "footer")}</p>
    </footer>
  );
}
