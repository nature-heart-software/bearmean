import styled from "@emotion/styled";
import { ExclusiveBoxProps } from "./box.shared";
import { rem } from "polished";
import { spacing } from "@/tokens/spacing";
import { elevation } from "@/tokens/elevation";
import { SoftRequired } from "@/utils/object";
import { borderRadius } from "@/tokens/border-radius";
import { colors } from "@/tokens/colors.ts";
import get from "lodash/get";

type StBoxProps = {
  props: SoftRequired<
    Pick<
      ExclusiveBoxProps,
      | "opacity"
      | "elevation"
      | "backgroundColor"
      | "w"
      | "h"
      | "minH"
      | "minW"
      | "maxH"
      | "maxW"
      | "p"
      | "px"
      | "py"
      | "pl"
      | "pr"
      | "pt"
      | "pb"
      | "m"
      | "mx"
      | "my"
      | "ml"
      | "mr"
      | "mt"
      | "mb"
      | "grow"
      | "shrink"
      | "borderRadius"
      | "borderTopLeftRadius"
      | "borderTopRightRadius"
      | "borderBottomLeftRadius"
      | "borderBottomRightRadius"
    >
  >;
};

export const StBox = styled("div", {
  shouldForwardProp: (prop) => !["props", "as"].includes(prop),
})<StBoxProps>(
  ({
    props: {
      grow,
      shrink,
      opacity,
      elevation: elevationProp,
      backgroundColor,
      w,
      h,
      minW,
      minH,
      maxW,
      maxH,
      p,
      px,
      py,
      pt,
      pl,
      pb,
      pr,
      m,
      mx,
      my,
      mt,
      ml,
      mb,
      mr,
      borderRadius: borderRadiusProp,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
    },
  }) => [
    {
      minWidth: 0,
      minHeight: 0,
    },
    typeof grow !== "undefined" && {
      flexGrow: Number(grow),
    },
    typeof shrink !== "undefined" && {
      flexGrow: Number(grow),
    },
    typeof opacity === "number" && {
      opacity,
    },
    elevationProp && {
      boxShadow: elevation[elevationProp],
    },
    backgroundColor && {
      backgroundColor: get(colors, backgroundColor) || backgroundColor,
    },
    ["string", "number"].includes(typeof w) && {
      width: w === "auto" ? w : w === "full" ? "100%" : rem(w as number),
    },
    ["string", "number"].includes(typeof h) && {
      height: h === "auto" ? h : h === "full" ? "100%" : rem(h as number),
    },
    ["string", "number"].includes(typeof minW) && {
      minWidth:
        minW === "auto" ? minW : minW === "full" ? "100%" : rem(minW as number),
    },
    ["string", "number"].includes(typeof minH) && {
      minHeight:
        minH === "auto" ? minH : minH === "full" ? "100%" : rem(minH as number),
    },
    ["string", "number"].includes(typeof maxW) && {
      maxWidth:
        maxW === "auto" ? maxW : maxW === "full" ? "100%" : rem(maxW as number),
    },
    ["string", "number"].includes(typeof maxH) && {
      maxHeight:
        maxH === "auto" ? maxH : maxH === "full" ? "100%" : rem(maxH as number),
    },
    p && {
      paddingTop: typeof p === "string" ? p : rem(spacing[p]),
      paddingLeft: typeof p === "string" ? p : rem(spacing[p]),
      paddingRight: typeof p === "string" ? p : rem(spacing[p]),
      paddingBottom: typeof p === "string" ? p : rem(spacing[p]),
    },
    px && {
      paddingLeft: typeof px === "string" ? px : rem(spacing[px]),
      paddingRight: typeof px === "string" ? px : rem(spacing[px]),
    },
    py && {
      paddingTop: typeof py === "string" ? py : rem(spacing[py]),
      paddingBottom: typeof py === "string" ? py : rem(spacing[py]),
    },
    pt && {
      paddingTop: typeof pt === "string" ? pt : rem(spacing[pt]),
    },
    pl && {
      paddingLeft: typeof pl === "string" ? pl : rem(spacing[pl]),
    },
    pr && {
      paddingRight: typeof pr === "string" ? pr : rem(spacing[pr]),
    },
    pb && {
      paddingBottom: typeof pb === "string" ? pb : rem(spacing[pb]),
    },
    m && {
      marginTop: typeof m === "string" ? m : rem(spacing[m]),
      marginLeft: typeof m === "string" ? m : rem(spacing[m]),
      marginRight: typeof m === "string" ? m : rem(spacing[m]),
      marginBottom: typeof m === "string" ? m : rem(spacing[m]),
    },
    mx && {
      marginLeft: typeof mx === "string" ? mx : rem(spacing[mx]),
      marginRight: typeof mx === "string" ? mx : rem(spacing[mx]),
    },
    my && {
      marginTop: typeof my === "string" ? my : rem(spacing[my]),
      marginBottom: typeof my === "string" ? my : rem(spacing[my]),
    },
    mt && {
      marginTop: typeof mt === "string" ? mt : rem(spacing[mt]),
    },
    ml && {
      marginLeft: typeof ml === "string" ? ml : rem(spacing[ml]),
    },
    mr && {
      marginRight: typeof mr === "string" ? mr : rem(spacing[mr]),
    },
    mb && {
      marginBottom: typeof mb === "string" ? mb : rem(spacing[mb]),
    },
    borderRadiusProp && {
      borderRadius: rem(borderRadius[borderRadiusProp]),
    },
    borderTopLeftRadius && {
      borderTopLeftRadius: rem(borderRadius[borderTopLeftRadius]),
    },
    borderTopRightRadius && {
      borderTopRightRadius: rem(borderRadius[borderTopRightRadius]),
    },
    borderBottomLeftRadius && {
      borderBottomLeftRadius: rem(borderRadius[borderBottomLeftRadius]),
    },
    borderBottomRightRadius && {
      borderBottomRightRadius: rem(borderRadius[borderBottomRightRadius]),
    },
  ],
);
