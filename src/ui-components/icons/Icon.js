import {
  Activity, ArrowRight, ArrowUp, Award, Building2, Calendar, CalendarCheck, Check,
  ChevronDown, ChevronLeft, ChevronRight, Clock, CreditCard, Droplet, Eye, Feather,
  FileText, Gauge, Globe, Heart, Info, Lock, Mail, MapPin, Mars, Menu, MessageCircleHeart,
  MessageSquare, Mic, Minus, Moon, Phone, Pill, Plane, Plus, Quote, RefreshCw, Search,
  Share2, ShieldCheck, SlidersHorizontal, Smile, Sparkles, Star, Stethoscope, Sun,
  Thermometer, TriangleAlert, Upload, User, Users, Venus, Video, Wind, X,
} from "lucide-react";

/**
 * Design-system icon set (24px grid · 1.75px stroke · rounded caps).
 * Names match the labels in clinicyza-ui-design.pdf → "Icon set".
 */
const LINE_ICONS = {
  logo: MessageCircleHeart, video: Video, phone: Phone, mail: Mail, pin: MapPin,
  shield: ShieldCheck, lock: Lock, globe: Globe, heart: Heart, pill: Pill, doc: FileText,
  clock: Clock, calendar: Calendar, calcheck: CalendarCheck, star: Star, check: Check,
  arrow: ArrowRight, down: ChevronDown, right: ChevronRight, left: ChevronLeft, up: ArrowUp,
  user: User, users: Users, search: Search, menu: Menu, x: X, plus: Plus, minus: Minus,
  message: MessageSquare, upload: Upload, stetho: Stethoscope, thermo: Thermometer,
  droplet: Droplet, sun: Sun, wind: Wind, sparkle: Sparkles, activity: Activity,
  smile: Smile, moon: Moon, gauge: Gauge, plane: Plane, feather: Feather, venus: Venus,
  mars: Mars, mic: Mic, info: Info, alert: TriangleAlert, sliders: SlidersHorizontal,
  card: CreditCard, building: Building2, award: Award, eye: Eye, quote: Quote,
  refresh: RefreshCw, share: Share2,
};

export const ICON_NAMES = Object.keys(LINE_ICONS);

export default function Icon({ name, size = 24, strokeWidth = 1.75, className, ...rest }) {
  const Line = LINE_ICONS[name];
  if (Line) {
    return (
      <Line
        size={size}
        strokeWidth={strokeWidth}
        absoluteStrokeWidth={false}
        className={className}
        aria-hidden="true"
        {...rest}
      />
    );
  }
  return null;
}
