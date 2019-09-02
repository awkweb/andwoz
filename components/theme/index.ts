import { Theme } from 'styled-system'

import { toRemString, typeScaleRoot } from '../../lib/toRemString'

import * as _Border from '../types/border'
import * as _Color from '../types/color'
import * as _Position from '../types/position'
import * as _Responsive from '../types/responsive'
import * as _Shadow from '../types/shadow'
import * as _Size from '../types/size'
import * as _Typography from '../types/typography'

const borderStyles = {
    [_Border.Style.None]: 'none',
    [_Border.Style.Solid]: 'solid',
}
const borderWidths = {
    [_Border.Width.Normal]: 1,
    [_Border.Width.Thick]: 2,
}
const breakpoints = [
    toRemString(16),
    toRemString(480),
    toRemString(768),
    toRemString(1024),
]
breakpoints[_Responsive.Breakpoint.Sm] = breakpoints[0]
breakpoints[_Responsive.Breakpoint.Md] = breakpoints[1]
breakpoints[_Responsive.Breakpoint.Lg] = breakpoints[2]
breakpoints[_Responsive.Breakpoint.Xl] = breakpoints[3]
const colors = {
    [_Color.Color.Foreground]: 'hsl(0, 0%, 0%)',
    [_Color.Color.Primary8]: 'hsl(109, 0%, 7%)',
    [_Color.Color.Primary7]: 'hsl(109, 0%, 20%)',
    [_Color.Color.Primary6]: 'hsl(109, 0%, 27%)',
    [_Color.Color.Primary5]: 'hsl(109, 0%, 40%)',
    [_Color.Color.Primary4]: 'hsl(109, 0%, 53%)',
    [_Color.Color.Primary3]: 'hsl(109, 0%, 60%)',
    [_Color.Color.Primary2]: 'hsl(109, 0%, 83%)',
    [_Color.Color.Primary1]: 'hsl(109, 0%, 98%)',
    [_Color.Color.Background]: 'hsl(104, 100%, 100%)',
    [_Color.Color.White]: 'hsl(104, 100%, 100%)',
    [_Color.Color.Error]: 'hsl(0, 100%, 50%)',
    [_Color.Color.Success]: 'hsl(163, 100%, 41%)',
    [_Color.Color.Warning]: 'hsl(38, 100%, 61%)',
}
const fonts = {
    [_Typography.Font.Body]:
        'system-ui, /* macOS 10.11-10.12 */ -apple-system, /* Windows 6+ */ "Segoe UI", /* Android 4+ */ "Roboto", /* Ubuntu 10.10+ */ "Ubuntu", /* Gnome 3+ */ "Cantarell", /* KDE Plasma 5+ */ "Noto Sans", /* fallback */ sans-serif, /* macOS emoji */ "Apple _Color.Color Emoji", /* Windows emoji */ "Segoe UI Emoji", /* Windows emoji */ "Segoe UI Symbol", /* Linux emoji */ "Noto _Color.Color Emoji";',
    [_Typography.Font.Title]: 'Archivo, sans-serif',
}
const fontSizes = {
    [_Typography.Size.Root]: `${typeScaleRoot}px`,
    [_Typography.Size.Xxs]: toRemString(12),
    [_Typography.Size.Xs]: toRemString(14),
    [_Typography.Size.Sm]: toRemString(16),
    [_Typography.Size.Md]: toRemString(18),
    [_Typography.Size.Lg]: toRemString(20),
    [_Typography.Size.Xl]: toRemString(24),
    [_Typography.Size.Xxl]: toRemString(30),
    [_Typography.Size.Xxxl]: toRemString(36),
}
const fontWeights = {
    [_Typography.Weight.Bold]: 700,
    [_Typography.Weight.SemiBold]: 600,
    [_Typography.Weight.Medium]: 500,
    [_Typography.Weight.Normal]: 400,
}
const lineHeights = {
    [_Typography.LineHeight.Body]: 1.35,
    [_Typography.LineHeight.Title]: 1.08,
}
const radii = {
    [_Border.Radius.None]: 0,
    [_Border.Radius.Small]: 2,
    [_Border.Radius.Circle]: '50%',
}
const shadows = {
    [_Shadow.Box.Button]: '0 0 0 0.2em rgba(0,0,0,.4)',
}
const sizes = {
    [_Size.Size.ButtonHeight]: toRemString(48),
    [_Size.Size.FieldHeight]: toRemString(48),
    [_Size.Size.AuthWidth]: toRemString(375),
    [_Size.Size.ContainerWidth]: toRemString(1088),
    [_Size.Size.TextareaHeight]: toRemString(186),
}
const space = [
    toRemString(0),
    toRemString(4),
    toRemString(8),
    toRemString(12),
    toRemString(16),
    toRemString(20),
    toRemString(24),
    toRemString(32),
    toRemString(48),
    toRemString(64),
    toRemString(96),
    toRemString(128),
    toRemString(192),
    toRemString(256),
    toRemString(384),
    toRemString(512),
    toRemString(640),
    toRemString(768),
]
const zIndices = [
    _Position.ZIndex.Lowest,
    _Position.ZIndex.Zero,
    _Position.ZIndex.High,
    _Position.ZIndex.Higher,
    _Position.ZIndex.Highest,
]

const theme: Theme = {
    borderStyles,
    borderWidths,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    zIndices,
}

export { theme }
