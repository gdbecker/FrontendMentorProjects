import { FaReact as React } from "react-icons/fa";
import { FaBootstrap as Bootstrap } from "react-icons/fa";
import { SiSass as SASS } from "react-icons/si";
import { SiNextdotjs as Next } from "react-icons/si";
import { SiTailwindcss as Tailwind } from "react-icons/si";
import { FaHtml5 as HTML } from "react-icons/fa";
import { FaCss3Alt as CSS } from "react-icons/fa6";
import { BiLogoJavascript as JavaScript } from "react-icons/bi";
import { IoLogoFirebase as Firebase } from "react-icons/io5";

const details = {
  'levelLabel': {
    1: 'NEWBIE',
    2: 'JUNIOR',
    3: 'INTERMEDIATE',
    4: 'ADVANCED',
    5: 'GURU',
  },
  'levelRing': {
    1: 'ring-level1',
    2: 'ring-level2',
    3: 'ring-level3',
    4: 'ring-level4',
    5: 'ring-level5',
  },
  'levelBg': {
    1: 'bg-level1',
    2: 'bg-level2',
    3: 'bg-level3',
    4: 'bg-level4',
    5: 'bg-level5',
  },
  'levelText': {
    1: 'text-level1',
    2: 'text-level2',
    3: 'text-level3',
    4: 'text-level4',
    5: 'text-level5',
  },
  'toolLabel': {
    'React': <React />,
    'Bootstrap': <Bootstrap />,
    'SASS': <SASS />,
    'Next': <Next />,
    'Tailwind': <Tailwind />,
    'HTML': <HTML />,
    'CSS': <CSS />,
    'JavaScript': <JavaScript />,
    'Firebase': <Firebase />,
  },
  'toolText': {
    'React': 'text-react',
    'Bootstrap': 'text-bootstrap',
    'SASS': 'text-sass',
    'Next': 'text-next',
    'Tailwind': 'text-tailwind',
    'HTML': 'text-html',
    'CSS': 'text-css',
    'JavaScript': 'text-javascript',
    'Firebase': 'text-firebase',
  }
}

export default details;