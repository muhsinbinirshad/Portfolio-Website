import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const abouts = [
  {
    timeline: "May `21 - Jul `22",
    icon: <BiCode />,
    title: "Head of Programming",
    subtitle: "Technocrats Robotics,VIT Chennai",
    description: "College Robotics Team specializing in competive robotics",
    link: "https://technocratsrobotics.in/",
  },
  {
    timeline: "Nov `19 - May `21",
    icon: <BiCode />,
    title: "Research Intern",
    subtitle: "International Institute of Information Technology, Hyderabad",
    description: "Worked on adversarial machine learning and deep learning",
    link: "https://www.iiit.ac.in/",
  },
  {
    timeline: "Aug `21 - Nov `21",
    icon: <BiCode />,
    title: "Chatbot Developer",
    subtitle: "Chat With Nerd,Gurgaon",
    description: "Startup specializing in financial budgeting chatbots.",
    link: "https://chatwithnerd.com/",
  },
  {
    timeline: "2019 - 2023",
    icon: <FaGraduationCap />,
    title: "B.Tech Computer Science and Engineering",
    subtitle: "Vellore Institute of Technology",
    now: true,
  },
  {
    timeline: "Contact me at",
    icon: <MdEmail />,
    title: "mail@ashiqabdulkhader.dev",
    link: "mailto:mail@ashiqabdulkhader.dev",
  },
];

export default abouts;
