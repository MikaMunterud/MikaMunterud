import Project from "../components/Project";
import { useTranslation } from "react-i18next";
import { IoBuildOutline } from "react-icons/io5";
import { useEffect } from "react";
import Aos from "aos";
import "../scss/Projects.scss";

export default function Projects() {
  const { t } = useTranslation();

  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <section className="profileSection" id="projects">
      <h1 data-aos="fade-down" data-aos-duration="800">
        {<IoBuildOutline />}
        {t("project")}
      </h1>
      <div data-aos="fade-left" data-aos-duration="1000" className="container">
        <Project
          linkWebb={"https://storyblok-hackathon-mikamunterud.vercel.app/"}
          linkGit={"https://github.com/MikaMunterud/storyblok-hackathon"}
          linkYouTube={"https://youtu.be/mvn5z2ul8uQ"}
          linkTextWebb={t("project_webb")}
          linkTextGit={t("project_gitHub")}
          linkTextYouTube={t("project_youTube")}
          imgLink={
            "https://icicathy.sirv.com/profile/storyblokHackathonHompage.png?w=600"
          }
          imgAlt={"My groups Winning Storyblok Hackathon Homepage"}
          heading={t("sassyChocolate")}
          description={t("sassyChocolate_description")}
          webbLang={"🇬🇧"}
        />
        <Project
          linkWebb={"https://mikamunterud.github.io/Adventures/"}
          linkGit={"https://github.com/MikaMunterud/Adventures"}
          linkTextWebb={t("project_webb")}
          linkTextGit={t("project_gitHub")}
          imgLink={
            "https://icicathy.sirv.com/profile/adventureHomepage.png?w=600"
          }
          imgAlt={"My Adventures Homepage"}
          heading={t("myAdventures")}
          description={t("myAdventures_description")}
          webbLang={"🇬🇧"}
        />

        <Project
          linkWebb={"https://mikamunterud.github.io/Receptbok/"}
          linkGit={"https://github.com/MikaMunterud/Receptbok"}
          linkTextWebb={t("project_webb")}
          linkTextGit={t("project_gitHub")}
          imgLink={"https://icicathy.sirv.com/profile/recipeHomepage.png?w=600"}
          imgAlt={"My recipe Homepage"}
          heading={t("myRecipeBook")}
          description={t("myRecipeBook_description")}
          webbLang={"🇸🇪"}
        />

        <Project
          linkWebb={"https://mikamunterud.github.io/Twitter-clone/"}
          linkGit={"https://github.com/MikaMunterud/Twitter-clone"}
          linkTextWebb={t("project_webb")}
          linkTextGit={t("project_gitHub")}
          imgLink={
            "https://icicathy.sirv.com/profile/twitterHomepage.png?w=600"
          }
          imgAlt={"My Twitter Homepage Clone"}
          heading={t("twitterClone")}
          description={t("twitterClone_description")}
          webbLang={"🇬🇧"}
        />

        <Project
          linkWebb={"https://mikamunterud.github.io/Pizza-restaurant/"}
          linkGit={"https://github.com/MikaMunterud/Pizza-restaurant"}
          linkTextWebb={t("project_webb")}
          linkTextGit={t("project_gitHub")}
          imgLink={"https://icicathy.sirv.com/profile/pizzaHomepage.png?w=600"}
          imgAlt={"My Pizza restaurant Homepage"}
          heading={t("pizzaRestaurant")}
          description={t("pizzaRestaurant_description")}
          webbLang={"🇬🇧"}
        />

        <Project
          linkWebb={"https://s110398.wixsite.com/whereismygarmentmade"}
          linkTextWebb={t("project_webb")}
          imgLink={
            "https://icicathy.sirv.com/profile/WhereIsMyGarmentMadeHomepage.png?w=600"
          }
          imgAlt={"My first webpage from University of Borås"}
          heading={t("wimgm")}
          description={t("wimgm_description")}
          webbLang={"🇬🇧"}
        />
      </div>
    </section>
  );
}
