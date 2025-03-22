export const padding = (
  top: number,
  right: number,
  bottom: number,
  left: number
) => ({
  paddingTop: top,
  paddingRight: right ?? top,
  paddingBottom: bottom ?? top,
  paddingLeft: left ?? right ?? top,
});

export const borderRadius = (
  topRight: number,
  bottomRight: number,
  bottomLeft: number,
  topLeft: number
) => ({
  borderTopLeftRadius: topLeft,
  borderTopRightRadius: topRight ?? topLeft,
  borderBottomRightRadius: bottomRight ?? topLeft,
  borderBottomLeftRadius: bottomLeft ?? topRight ?? topLeft,
});