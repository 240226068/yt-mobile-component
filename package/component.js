/**
 * Created by mas on 2017/9/19.
 */
import View from './view/index'
import Split from './split/index'
import Cell from './cell/index'
import CheckBox from './checkBox/index'
import Switch from './switch/index'
import Radio from './radio/index'
import Rate from './rate/index'
import Count from './count/index'
import Input from './input/index'
import Sticky from './sticky/index'
import Badge from './badge/index'
import Btn from './btn/index'
import BtnGroup from './btn/btnGroup'
import Tag from './tag/index'
import Card from './card/index'
import Grid from './grid/index'
import GridItem from './grid/gridItem'
import Header from './header/index'
import HeaderBtn from './header/headerBtn'
import Page from './page/index'
import TimeLine from './timeLine/index'
import Popup from './popup/index'
import Screen from './screen/index'
import ScreenPanel from './screen/screenPanel'
import CellSwipe from './cellSwipe/index'
import Tabbar from './tabbar/index'
import TabbarPanel from './tabbar/tabbarPanel'
import TabPanles from './tabPanles/index'
import Tabs from './tabs/index'
import TabPanel from './tabs/tabPanel'
import CheckList from './checkList/index'
import RadioList from './radioList/index'
import Collapse from './collapse/index'
import CollapseTransition from './collapse/collapseTransition'
import Pull from './pull/index'
import Spinner from './spinner/index'
import Group from './group/index'
import InlineSelect from './inlineSelect/index'
import Slider from './slider/index'
import ButtonTab from './buttonTab/index'
import Form from './form/index'
import Textarea from './textarea/index'
import Progress from './progress/index'
import File from './file/index'
import ShopCart from './shopCart/index'
import CellCall from './_call'
import CellCascader from './_cascader'
import CellSelect from './_select'
import CellTime from './_time'
import CellOpenFile from './_openFile'

const components = {
  View,
  Cell,
  Split,
  CheckBox,
  Switch,
  Radio,
  Rate,
  Count,
  Input,
  Sticky,
  Badge,
  Btn,
  BtnGroup,
  Tag,
  Card,
  Grid,
  GridItem,
  Header,
  HeaderBtn,
  ButtonTab,
  Page,
  Form,
  TimeLine,
  Popup,
  Screen,
  ScreenPanel,
  InlineSelect,
  CellSwipe,
  Tabbar,
  TabbarPanel,
  TabPanles,
  Tabs,
  TabPanel,
  File,
  CheckList,
  RadioList,
  Collapse,
  CollapseTransition,
  Slider,
  Pull,
  Group,
  Spinner,
  Textarea,
  Progress,
  CellCall,
  CellCascader,
  CellSelect,
  CellTime,
  CellOpenFile,
  ShopCart
}

export default {
  install(Vue) {
    for (let key in components) {
      Vue.component('yt' + key, components[key])
    }
  }
}
