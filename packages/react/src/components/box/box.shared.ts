import {
  ObjectDotNotation,
  RequireField,
  setNullIfUndefined,
  SoftRequired,
} from "@/utils/object";
import { CSSProperties, HTMLAttributes } from "react";
import { PositiveSpacing, Spacing } from "@/tokens/spacing";
import { Elevation } from "@/tokens/elevation";
import { BorderRadius } from "@/tokens/border-radius";
import { Colors } from "@/tokens/colors.ts";

export type MarginSpacing = Spacing | "auto";
export type PaddingSpacing = PositiveSpacing;
export type BoxSpacing<S = any> = S | string;

export type ExclusiveBoxProps = {
  opacity?: CSSProperties["opacity"];
  elevation?: Elevation;
  backgroundColor?: ObjectDotNotation<Colors>;
  w?: "auto" | "full" | number;
  h?: "auto" | "full" | number;
  minH?: "auto" | "full" | number;
  minW?: "auto" | "full" | number;
  maxH?: "auto" | "full" | number;
  maxW?: "auto" | "full" | number;
  p?: BoxSpacing<PaddingSpacing>;
  px?: BoxSpacing<PaddingSpacing>;
  py?: BoxSpacing<PaddingSpacing>;
  pl?: BoxSpacing<PaddingSpacing>;
  pr?: BoxSpacing<PaddingSpacing>;
  pt?: BoxSpacing<PaddingSpacing>;
  pb?: BoxSpacing<PaddingSpacing>;
  m?: BoxSpacing<MarginSpacing>;
  mx?: BoxSpacing<MarginSpacing>;
  my?: BoxSpacing<MarginSpacing>;
  ml?: BoxSpacing<MarginSpacing>;
  mr?: BoxSpacing<MarginSpacing>;
  mt?: BoxSpacing<MarginSpacing>;
  mb?: BoxSpacing<MarginSpacing>;
  grow?: CSSProperties["flexGrow"] | boolean;
  shrink?: CSSProperties["flexShrink"] | boolean;
  borderRadius?: BorderRadius;
  borderTopLeftRadius?: BorderRadius;
  borderTopRightRadius?: BorderRadius;
  borderBottomLeftRadius?: BorderRadius;
  borderBottomRightRadius?: BorderRadius;
};

export const useExtractBoxProps = <P>(allProps: ExclusiveBoxProps & P) => {
  const {
    opacity,
    elevation,
    backgroundColor,
    w,
    h,
    minH,
    minW,
    maxH,
    maxW,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    grow,
    shrink,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    ...props
  } = allProps;

  const boxProps: SoftRequired<ExclusiveBoxProps> = {
    opacity: setNullIfUndefined(opacity),
    elevation: setNullIfUndefined(elevation),
    backgroundColor: setNullIfUndefined(backgroundColor),
    w: setNullIfUndefined(w),
    h: setNullIfUndefined(h),
    minH: setNullIfUndefined(minH),
    minW: setNullIfUndefined(minW),
    maxH: setNullIfUndefined(maxH),
    maxW: setNullIfUndefined(maxW),
    p: setNullIfUndefined(p),
    px: setNullIfUndefined(px),
    py: setNullIfUndefined(py),
    pl: setNullIfUndefined(pl),
    pr: setNullIfUndefined(pr),
    pt: setNullIfUndefined(pt),
    pb: setNullIfUndefined(pb),
    m: setNullIfUndefined(m),
    mx: setNullIfUndefined(mx),
    my: setNullIfUndefined(my),
    ml: setNullIfUndefined(ml),
    mr: setNullIfUndefined(mr),
    mt: setNullIfUndefined(mt),
    mb: setNullIfUndefined(mb),
    grow: setNullIfUndefined(grow),
    shrink: setNullIfUndefined(shrink),
    borderRadius: setNullIfUndefined(borderRadius),
    borderTopLeftRadius: setNullIfUndefined(borderTopLeftRadius),
    borderTopRightRadius: setNullIfUndefined(borderTopRightRadius),
    borderBottomLeftRadius: setNullIfUndefined(borderBottomLeftRadius),
    borderBottomRightRadius: setNullIfUndefined(borderBottomRightRadius),
  };
  return {
    boxProps,
    props,
  };
};

export type BoxProps = HTMLAttributes<HTMLDivElement> & ExclusiveBoxProps;

export const defaultBoxProps = {} as const;

export type BoxPropsWithDefaults = RequireField<
  BoxProps,
  keyof typeof defaultBoxProps
>;
