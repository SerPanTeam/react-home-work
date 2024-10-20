import { useLang } from "../localization";
export default function SwitchLanguage() {
    const { language, switchLanguage, t } = useLang();
    return (
        <header style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={switchLanguage}>
                {t(language, "changeLanguage") + ` (${language})`}
            </button>
        </header>
    );
}