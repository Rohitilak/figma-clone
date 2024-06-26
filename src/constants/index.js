import rectangle from '../assets/rectangle.svg'
import circle from '../assets/circle.svg'
import triangle from '../assets/triangle.svg'
import line from '../assets/line.svg'
import image from '../assets/image.svg'
import freeform from '../assets/freeform.svg'
import select from '../assets/select.svg'
import text from '../assets/text.svg'
import del from '../assets/delete.svg'
import reset from '../assets/reset.svg'
import comment from '../assets/comments.svg'
import front from '../assets/front.svg'
import back from '../assets/back.svg'
import alignLeft from '../assets/align-left.svg'
import alignHorizontal from '../assets/align-horizontal-center.svg';
import alignVertical from '../assets/align-vertical-center.svg';
import alignTop from '../assets/align-top.svg'
import alignBottom from '../assets/align-bottom.svg';
import alignRight from '../assets/align-right.svg';

export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];


export const shapeElements = [
  {
    icon: `${rectangle}`,
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: `${circle}`,
    name: "Circle",
    value: "circle",
  },

  {
    icon: `${triangle}`,
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: `${line}`,
    name: "Line",
    value: "line",
  },
  {
    icon: `${image}`,
    name: "Image",
    value: "image",
  },
  {
    icon: `${freeform}`,
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navElements = [
  {
    icon: `${select}`,
    name: "Select",
    value: "select",
  },
  {
    icon: `${rectangle}`,
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: `${text}`,
    value: "text",
    name: "Text",
  },
  {
    icon: `${del}`,
    value: "delete",
    name: "Delete",
  },
  {
    icon: `${reset}`,
    value: "reset",
    name: "Reset",
  },
  {
    icon: `${comment}`,
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: `${select}`,
  name: "Select",
  value: "select",
};

export const directionOptions = [
  { label: "Bring to Front", value: "front", icon: `${front}` },
  { label: "Send to Back", value: "back", icon: `${back}` },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Brush Script MT", label: "Brush Script MT" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "500",
    label: "Semibold",
  },
  {
    value: "600",
    label: "Bold",
  },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: `${alignLeft}` },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: `${alignHorizontal}`,
  },
  { value: "right", label: "Align Right", icon: `${alignRight}` },
  { value: "top", label: "Align Top", icon: `${alignTop}` },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: `${alignVertical}`,
  },
  { value: "bottom", label: "Align Bottom", icon: `${alignBottom}` },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];