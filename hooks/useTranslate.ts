import { useRouter } from "next/router";
import getLangDict from "language/getLangDict";

const useTranslate = () => {
  const { locale } = useRouter();
  return locale === "ja" ? getLangDict("ja") : getLangDict("en");
};

export default useTranslate;
