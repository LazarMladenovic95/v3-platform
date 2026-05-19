// Icon registry — the only layer that imports lucide-react for UI icons.
import type { LucideIcon, LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { ActivityIcon } from "./ActivityIcon";
import { ArchiveIcon } from "./ArchiveIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { AlertCircleIcon } from "./AlertCircleIcon";
import { BadgeCheckIcon } from "./BadgeCheckIcon";
import { BarChart3Icon } from "./BarChart3Icon";
import { BarcodeIcon } from "./BarcodeIcon";
import { BlocksIcon } from "./BlocksIcon";
import { CalendarIcon } from "./CalendarIcon";
import { CheckIcon } from "./CheckIcon";
import { CheckCircleIcon } from "./CheckCircleIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { CreditCardIcon } from "./CreditCardIcon";
import { DownloadIcon } from "./DownloadIcon";
import { EyeIcon } from "./EyeIcon";
import { FacebookIcon } from "./FacebookIcon";
import { FileTextIcon } from "./FileTextIcon";
import { FolderOpenIcon } from "./FolderOpenIcon";
import { FunnelIcon } from "./FunnelIcon";
import { GiftIcon } from "./GiftIcon";
import { GithubIcon } from "./GithubIcon";
import { HeartIcon } from "./HeartIcon";
import { ImageIcon } from "./ImageIcon";
import { ImagesIcon } from "./ImagesIcon";
import { InboxIcon } from "./InboxIcon";
import { InfoIcon } from "./InfoIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LayoutGridIcon } from "./LayoutGridIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { ListIcon } from "./ListIcon";
import { ListCollapseIcon } from "./ListCollapseIcon";
import { ListOrderedIcon } from "./ListOrderedIcon";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { MessageSquareIcon } from "./MessageSquareIcon";
import { MinusIcon } from "./MinusIcon";
import { MoreHorizontalIcon } from "./MoreHorizontalIcon";
import { MousePointer2Icon } from "./MousePointer2Icon";
import { NavigationIcon } from "./NavigationIcon";
import { PackageIcon } from "./PackageIcon";
import { PackageCheckIcon } from "./PackageCheckIcon";
import { PackageOpenIcon } from "./PackageOpenIcon";
import { PanelsTopLeftIcon } from "./PanelsTopLeftIcon";
import { PaletteIcon } from "./PaletteIcon";
import { PencilIcon } from "./PencilIcon";
import { PlusIcon } from "./PlusIcon";
import { ReceiptIcon } from "./ReceiptIcon";
import { ScanBarcodeIcon } from "./ScanBarcodeIcon";
import { SearchIcon } from "./SearchIcon";
import { SearchXIcon } from "./SearchXIcon";
import { SettingsIcon } from "./SettingsIcon";
import { ShoppingBagIcon } from "./ShoppingBagIcon";
import { ShoppingCartIcon } from "./ShoppingCartIcon";
import { SparklesIcon } from "./SparklesIcon";
import { StarIcon } from "./StarIcon";
import { StoreIcon } from "./StoreIcon";
import { Table2Icon } from "./Table2Icon";
import { TagIcon } from "./TagIcon";
import { TagsIcon } from "./TagsIcon";
import { TextCursorInputIcon } from "./TextCursorInputIcon";
import { ThumbsUpIcon } from "./ThumbsUpIcon";
import { TriangleAlertIcon } from "./TriangleAlertIcon";
import { TruckIcon } from "./TruckIcon";
import { TwitchIcon } from "./TwitchIcon";
import { TwitterIcon } from "./TwitterIcon";
import { UploadCloudIcon } from "./UploadCloudIcon";
import { UserIcon } from "./UserIcon";
import { XIcon } from "./XIcon";
import { YoutubeIcon } from "./YoutubeIcon";

export type { LucideIcon, LucideProps as IconSvgProps };

export const iconComponents = {
  "activity": ActivityIcon,
  "archive": ArchiveIcon,
  "arrow-right": ArrowRightIcon,
  "alert-circle": AlertCircleIcon,
  "badge-check": BadgeCheckIcon,
  "bar-chart3": BarChart3Icon,
  "barcode": BarcodeIcon,
  "blocks": BlocksIcon,
  "calendar": CalendarIcon,
  "check": CheckIcon,
  "check-circle": CheckCircleIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "credit-card": CreditCardIcon,
  "download": DownloadIcon,
  "eye": EyeIcon,
  "facebook": FacebookIcon,
  "file-text": FileTextIcon,
  "folder-open": FolderOpenIcon,
  "funnel": FunnelIcon,
  "gift": GiftIcon,
  "github": GithubIcon,
  "heart": HeartIcon,
  "image": ImageIcon,
  "images": ImagesIcon,
  "inbox": InboxIcon,
  "info": InfoIcon,
  "instagram": InstagramIcon,
  "layout-grid": LayoutGridIcon,
  "linkedin": LinkedinIcon,
  "list": ListIcon,
  "list-collapse": ListCollapseIcon,
  "list-ordered": ListOrderedIcon,
  "loader-circle": LoaderCircleIcon,
  "message-square": MessageSquareIcon,
  "minus": MinusIcon,
  "more-horizontal": MoreHorizontalIcon,
  "mouse-pointer2": MousePointer2Icon,
  "navigation": NavigationIcon,
  "package": PackageIcon,
  "package-check": PackageCheckIcon,
  "package-open": PackageOpenIcon,
  "panels-top-left": PanelsTopLeftIcon,
  "palette": PaletteIcon,
  "pencil": PencilIcon,
  "plus": PlusIcon,
  "receipt": ReceiptIcon,
  "scan-barcode": ScanBarcodeIcon,
  "search": SearchIcon,
  "search-x": SearchXIcon,
  "settings": SettingsIcon,
  "shopping-bag": ShoppingBagIcon,
  "shopping-cart": ShoppingCartIcon,
  "sparkles": SparklesIcon,
  "star": StarIcon,
  "store": StoreIcon,
  "table2": Table2Icon,
  "tag": TagIcon,
  "tags": TagsIcon,
  "text-cursor-input": TextCursorInputIcon,
  "thumbs-up": ThumbsUpIcon,
  "triangle-alert": TriangleAlertIcon,
  "truck": TruckIcon,
  "twitch": TwitchIcon,
  "twitter": TwitterIcon,
  "upload-cloud": UploadCloudIcon,
  "user": UserIcon,
  "x": XIcon,
  "youtube": YoutubeIcon,
} satisfies Record<string, ComponentType<LucideProps>>;

export type IconName = keyof typeof iconComponents;

export {
  ActivityIcon,
  ArchiveIcon,
  ArrowRightIcon,
  AlertCircleIcon,
  BadgeCheckIcon,
  BarChart3Icon,
  BarcodeIcon,
  BlocksIcon,
  CalendarIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DownloadIcon,
  EyeIcon,
  FacebookIcon,
  FileTextIcon,
  FolderOpenIcon,
  FunnelIcon,
  GiftIcon,
  GithubIcon,
  HeartIcon,
  ImageIcon,
  ImagesIcon,
  InboxIcon,
  InfoIcon,
  InstagramIcon,
  LayoutGridIcon,
  LinkedinIcon,
  ListIcon,
  ListCollapseIcon,
  ListOrderedIcon,
  LoaderCircleIcon,
  MessageSquareIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MousePointer2Icon,
  NavigationIcon,
  PackageIcon,
  PackageCheckIcon,
  PackageOpenIcon,
  PanelsTopLeftIcon,
  PaletteIcon,
  PencilIcon,
  PlusIcon,
  ReceiptIcon,
  ScanBarcodeIcon,
  SearchIcon,
  SearchXIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StarIcon,
  StoreIcon,
  Table2Icon,
  TagIcon,
  TagsIcon,
  TextCursorInputIcon,
  ThumbsUpIcon,
  TriangleAlertIcon,
  TruckIcon,
  TwitchIcon,
  TwitterIcon,
  UploadCloudIcon,
  UserIcon,
  XIcon,
  YoutubeIcon,
};
