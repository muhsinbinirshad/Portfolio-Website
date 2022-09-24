import { GrMysql } from "react-icons/gr";
import {
  SiArduino,
  SiC,
  SiCloudflare,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiDjango,
  SiDocker,
  SiEclipsemosquitto,
  SiEspressif,
  SiFirebase,
  SiFlutter,
  SiGnubash,
  SiGrafana,
  SiHeroku,
  SiHtml5,
  SiInfluxdb,
  SiJavascript,
  SiKeras,
  SiMarkdown,
  SiNetlify,
  SiNextdotjs,
  SiNodered,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiSentry,
  SiSqlite,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiMongodb,
  SiNvidia,
  SiKaggle,
  SiVisualstudiocode,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
import { GoRadioTower } from "react-icons/go";
import { FaAws } from "react-icons/fa";

export const langs = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    link: "https://youtu.be/x7X9w_GIm1s",
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    link: "https://youtu.be/zQnBQ4tB3ZA",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    link: "https://youtu.be/DHjqpvDnNGE",
  },
  C: {
    name: "C",
    icon: <SiC />,
    link: "https://youtu.be/U3aXWizDbQ4",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    link: "https://youtu.be/MNeX4EGtR5Y",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    link: "https://youtu.be/SPwyp2NG-bE",
  },
  MATLAB: {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    link: "https://youtu.be/ok-plXXHlWw",
  },
  Markdown: {
    name: "Markdown",
    icon: <SiMarkdown />,
    link: "https://www.markdownguide.org/",
  },
  YAML: {
    name: "YAML",
    icon: <VscJson />,
    link: "https://yaml.org/",
  },
  JSON: {
    name: "JSON",
    icon: <VscJson />,
    link: "https://www.json.org/json-en.html",
  },
  Latex: {
    name: "Latex",
    link: "https://www.latex-project.org/",
  },
};

export const frameworks = {
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    link: "https://youtu.be/mr15Xzb1Ook",
  },
  React: {
    name: "React",
    icon: <SiReact />,
    link: "https://youtu.be/Tn6-PIqc4UM",
  },
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
    link: "https://youtu.be/Sklc_fQBmcs",
  },
  Django: {
    name: "Django",
    icon: <SiDjango />,
    link: "https://www.djangoproject.com/",
  },
  Tensorflow: {
    name: "Tensorflow",
    icon: <SiTensorflow />,
    link: "https://www.tensorflow.org/",
  },
  Keras: {
    name: "Keras",
    icon: <SiKeras />,
    link: "https://keras.io/",
  },
  PyTorch: {
    name: "PyTorch",
    icon: <SiPytorch />,
    link: "https://pytorch.org/",
  },
  FastAPI: {
    name: "FastAPI",
    icon: <SiFastapi />,
    link: "https://fastapi.tiangolo.com/",
  },
  Flask: {
    name: "Flask",
    icon: <SiFlask />,
    link: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  ScikitLearn: {
    name: "Scikit-Learn",
    icon: <SiScikitlearn />,
    link: "https://scikit-learn.org/stable/",
  },
};

export const db = {
  Firestore: {
    name: "Cloud Firestore",
    icon: <SiFirebase />,
    link: "https://youtu.be/vAoB4VbhRzM",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    link: "https://www.postgresql.org/",
  },
  MySQL: {
    name: "MySQL",
    icon: <GrMysql />,
    link: "https://youtu.be/Cz3WcZLRaWc",
  },
  SQLite: {
    name: "SQLite",
    icon: <SiSqlite />,
    link: "https://www.sqlite.org/index.html",
  },
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
    link: "https://youtu.be/G1rOthIU-uo",
  },
  MongoDB: {
    name: "MongoDB",
    icon: <SiMongodb />,
    link: "https://www.mongodb.com/",
  },
};

export const iot = {
  // Protocols
  MQTT: {
    name: "MQTT",
    icon: <GoRadioTower />,
    link: "https://mqtt.org/",
  },
  HTTP: {
    name: "REST",
    icon: <AiFillApi />,
    link: "https://youtu.be/-MTSQjw5DrM",
  },
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp32",
  },
  ESP8266: {
    name: "ESP-8266",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp8266",
  },
  STM32: {
    name: "STM-32",
    icon: <SiStmicroelectronics />,
    link: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
  },
  arduinoUno: {
    name: "Arduino Uno",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/uno-rev3/",
  },
  arduinoMega: {
    name: "Arduino Mega",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/mega-2560/",
  },
  arduinoMini: {
    name: "Arduino Mini",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/retired/getting-started-guides/ArduinoMini",
  },
  arduinoMicro: {
    name: "Arduino Micro",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/micro",
  },
  arduinoNano: {
    name: "Arduino Nano",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/nano",
  },
  RaspberryPi4: {
    name: "Raspberry Pi 4",
    icon: <SiRaspberrypi />,
    link: "https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html",
  },
  RaspberryPiPico: {
    name: "Raspberry Pi Pico",
    icon: <SiRaspberrypi />,
    link: "https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",
  },
  JetsonNano: {
    name: "Jetson Nano",
    icon: <SiNvidia />,
    link: "https://developer.nvidia.com/embedded/jetson-nano-developer-kit",
  },
};

export const platforms = {
  Vercel: {
    name: "Vercel",
    icon: <SiVercel />,
    link: "https://vercel.com/",
  },
  Firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    link: "https://youtu.be/vAoB4VbhRzM",
  },
  Heroku: {
    name: "Heroku",
    icon: <SiHeroku />,
    link: "https://www.heroku.com/",
  },
  Netlify: {
    name: "Netlify",
    icon: <SiNetlify />,
    link: "https://www.netlify.com/",
  },
  Cloudflare: {
    name: "Cloudflare",
    icon: <SiCloudflare />,
    link: "https://www.cloudflare.com/",
  },
  AWS: {
    name: "AWS",
    icon: <FaAws />,
    link: "https://aws.amazon.com/",
  },
  HuggingFace: {
    name: "HuggingFace",
    link: "https://huggingface.co/",
  },
  Kaggle: {
    name: "Kaggle",
    icon: <SiKaggle />,
    link: "https://www.kaggle.com/",
  },
};

export const otherTools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    link: "https://youtu.be/Gjnup-PuquQ",
  },
  Mosquitto: {
    name: "Mosquitto",
    icon: <SiEclipsemosquitto />,
    link: "https://mosquitto.org/",
  },
  Simulink: {
    name: "Simulink",
    link: "https://www.mathworks.com/products/simulink.html",
  },
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
    link: "https://www.postman.com/",
  },
  Vscode: {
    name: "Vscode",
    icon: <SiVisualstudiocode />,
    link: "https://code.visualstudio.com/",
  },
  github: {
    name: "GitHub",
    icon: <AiFillApi />,
    link: "https://docs.github.com/en/rest",
  },
};

export const Models = {
  Transformer: {
    name: "Transformer",
    link: "https://arxiv.org/abs/1706.03762",
  },
  CNN: {
    name: "CNN",
    link: "https://en.wikipedia.org/wiki/Convolutional_neural_network",
  },
  RNN: {
    name: "RNN",
    link: "https://en.wikipedia.org/wiki/Recurrent_neural_network",
  },
  GPT2: {
    name: "GPT2",
    link: "https://openai.com/blog/better-language-models/",
  },
  BERT: {
    name: "BERT",
    link: "https://arxiv.org/abs/1810.04805",
  },
  GAN: {
    name: "GAN",
    link: "https://arxiv.org/abs/1406.2661",
  },
  LSTM: {
    name: "LSTM",
    link: "https://en.wikipedia.org/wiki/Long_short-term_memory",
  },
  Autoencoder: {
    name: "Autoencoder",
    link: "https://en.wikipedia.org/wiki/Autoencoder",
  },
};
