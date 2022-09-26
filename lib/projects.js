import { BsYoutube } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import {
  IoIosRocket,
  IoIosTrophy,
  IoLogoGameControllerB,
} from "react-icons/io";
import { SiGitbook } from "react-icons/si";

import ArikeBG from "../public/images/project-bg/Arike.png";
import BuckBoostBG from "../public/images/project-bg/BuckBoostConverter.jpg";
import MartialArtsBG from "../public/images/project-bg/MartialArts.png";
import SmartJunctionBG from "../public/images/project-bg/SmartJunction.jpg";
import Standalone3DPositionSensorBG from "../public/images/project-bg/Standalone3DPosSensor.png";
import VITCCElectricalIssuesBG from "../public/images/project-bg/VITCCElectricalIssues.png";
//
import DocSearch from "../public/images/project-bg/docsearch.jpg";
import CodePlex from "../public/images/project-bg/codeplex.jpg";
import GPT2ML from "../public/images/project-bg/gpt2ml.jpg";
import Steganography from "../public/images/project-bg/steganography.jpeg";
import {
  platforms,
  db,
  iot,
  frameworks,
  langs,
  otherTools,
  api,
  Models,
} from "./skills";

const projects = [
  // DocSearch
  {
    title: "DocSearch - A search engine for programming documentation",
    image: DocSearch,
    timeline: "Jan `22 - April `22",
    description:
      "DocSearch is a search engine for programming documentation. It is build using neural search framework Jina and makes uses of Meta's Dense Passage Retrieval model. It is made available as a VsCode extension.",
    repository: "https://github.com/Doc-Search",
    otherLinks: [],
    tags: [
      langs.Python,
      langs.Javascript,
      langs.Typescript,
      otherTools.Vscode,
      frameworks.Tensorflow,
      Models.Transformer,
    ],
  },
  // Codeplex
  {
    title:
      "Codeplex - An Online teaching platform to teach programming effectively.",
    image: CodePlex,
    link: "http://codeplex.tech",
    timeline: "June `21 - now",
    description:
      "CodePlex is an all-in-one online code editor that helps you learn to code smarter, faster and better in a fun and engaging environment.",
    repository: "https://github.com/CodePlex-project",
    otherLinks: [
      {
        label: "Staging",
        icon: <IoIosRocket />,
        url: "http://codeplex.tech",
      },
    ],
    tags: [
      langs.Python,
      frameworks.React,
      frameworks.NextJS,
      frameworks.Tailwind,
      langs.Typescript,
      langs.HTML,
      platforms.Netlify,
      platforms.Firebase,
      platforms.AWS,
    ],
  },
  // GPT-2 Malayalam
  {
    title: "GPT-2 Malayalam -  GPT2 Fined Tuned on malayalam dataset",
    image: GPT2ML,
    link: "https://huggingface.co/ashiqabdulkhader/GPT2-Malayalam",
    timeline: "Sept `22",
    description:
      "GPT2-Malayalam is a GPT-2 transformer model fine Tuned on a large corpus of Malayalam data in a self-supervised fashion.",
    repository: "https://github.com/AshiqAbdulkhader/GPT-Malayalam",
    otherLinks: [
      {
        label: "Hugginface",
        icon: <IoIosRocket />,
        url: "https://huggingface.co/ashiqabdulkhader/GPT2-Malayalam",
      },
    ],
    tags: [
      langs.Python,
      platforms.HuggingFace,
      platforms.AWS,
      platforms.Kaggle,
      frameworks.Tensorflow,
      Models.Transformer,
      Models.GPT2,
    ],
  },
  // GPT2-Poet
  {
    title: "GPT2-Poet - A GPT2 based Poet",
    image: GPT2ML,
    link: "https://huggingface.co/spaces/ashiqabdulkhader/GPT2-Poet",
    timeline: "Sept `22",
    description:
      "GPT2-Poet is a GPT-2 transformer model fine Tuned on a large corpus of English Poems dataset in a self-supervised fashion.",
    repository: "https://github.com/AshiqAbdulkhader/GPT2-Poet",
    otherLinks: [
      {
        label: "Hugginface",
        icon: <IoIosRocket />,
        url: "https://huggingface.co/spaces/ashiqabdulkhader/GPT2-Poet",
      },
    ],
    tags: [
      langs.Python,
      platforms.HuggingFace,
      platforms.AWS,
      platforms.Kaggle,
      frameworks.Tensorflow,
      Models.Transformer,
      Models.GPT2,
    ],
  },
  // Secure Text In Image Steganography
  {
    title: "Secure Text In Image Steganography",
    image: Steganography,
    link: "https://github.com/ritikasarkar18/Secure-Text-in-Image-Steganography",
    timeline: "Apr `22",
    description:
      "A project manager tool built using React Typescript and Tailwind, as part of Global Digital Corps training - WD301 React+Typescript+Tailwind Course Capstone Project. Backend deployed on heroku, and frontend deployed on netlify.",
    repository:
      "https://github.com/ritikasarkar18/Secure-Text-in-Image-Steganography",
    otherLinks: [
      {
        label: "Paper",
        icon: <SiGitbook />,
        url: "http://ijeast.com/papers/338-342,%20Tesma0701,IJEAST.pdf",
      },
    ],
    tags: [langs.Python, langs.Javascript, langs.HTML],
  },
];

export default projects;
